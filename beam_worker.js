// ═══════════════════════════════════════════════════════════════════
// beam_worker.js v2 — 빔 서치 최적 딜 사이클 엔진
//
// [기존 v1 버그 수정]
//   1. 점수 계산 시 전체 최솟값(curT) 대신 각 빔 자신의 시간을 사용
//   2. t≤0.5 → Infinity 반환으로 인한 초반 랜덤 프루닝 제거
//   3. 서포터 없을 때 항상 "참기" 분기가 생성되던 문제 수정
//   4. 시뮬레이션 코어 로직을 원본 simulate()와 1:1로 일치
//
// [메시지 프로토콜]
//   받기:  { type:'start', params }
//   보내기: { type:'progress', pct, bestKillTime }
//           { type:'done', result }
//           { type:'error', msg }
// ═══════════════════════════════════════════════════════════════════

const BEAM_WIDTH = 20;
const PROGRESS_INTERVAL_MS = 200;

// SP 시스템 — postMessage 수신 후 params.sp로 덮어씀
let SP = { max_sp:300, initial_sp:200, regen_rate:8, skill_cost:100, skill_regen_pause:0.5, link_regen_pause:1.5 };

// ────────────────────────────────────────────────────────────────────
// 핵심 시뮬레이션 엔진 (원본 simulate()와 동일 로직)
// ────────────────────────────────────────────────────────────────────

function calcSkillDamage(finalAtk, mult, critMult, defMult, elemBonus, skillBonus, ampMult) {
  return Math.round(finalAtk * mult * critMult * defMult * (1+(elemBonus||0)) * (1+(skillBonus||0)) * (ampMult||1));
}

function getLiveMults(buffExpiries, supporters, t) {
  let ampMult = 1.0, atkMult = 1.0;
  for (const { idx, type, val } of supporters) {
    if (t < buffExpiries[idx]) {
      if (type === 'amp') ampMult *= val;
      else if (type === 'atk') atkMult *= (1 + val);
    }
  }
  return { ampMult, atkMult };
}

function advanceSp(state, toTime) {
  if (toTime <= state.lastSpTime) return;
  const regenFrom = Math.max(state.lastSpTime, state.spResumeTime);
  const regenDt = Math.max(0, toTime - regenFrom);
  if (regenDt > 0) state.teamSp = Math.min(SP.max_sp, state.teamSp + regenDt * SP.regen_rate);
  state.lastSpTime = toTime;
}

function decideAction(state, ci, t, chars) {
  const c = chars[ci];
  const cs = state.slots[ci];
  if (cs.ultGauge >= c.ult_cost && c.ult_dur > 0)        return 'ult';
  if (t >= cs.linkCdEnd && t > 1.5 && c.linkMult > 0)    return 'link';
  if (state.teamSp >= SP.skill_cost && c.skill_dur > 0)   return 'skill';
  return 'basic';
}

function executeAction(state, ci, action, t, chars, supporters, defMult, staggerData) {
  const c  = chars[ci];
  const cs = state.slots[ci];
  const { ampMult, atkMult } = getLiveMults(state.buffExpiries, supporters, t);
  const liveAtk = c.finalAtk * atkMult;
  const dmgOf = (mult, bonus) => calcSkillDamage(liveAtk, mult, c.critMult, defMult, c.elemBonus, bonus, ampMult);

  let dmg = 0, dur = 0, actionLabel = '', actionTag = '';

  if (action === 'ult') {
    dur = c.ult_dur;
    dmg = c.ultMult > 0 ? dmgOf(c.ultMult, c.ultBonus) : 0;
    cs.ultGauge = 0;
    state.teamSp = Math.min(SP.max_sp, state.teamSp + 10 + c.ult_sp_gain);
    const sup = supporters.find(s => s.idx === ci && s.trigger === 'ult');
    if (sup) state.buffExpiries[ci] = t + sup.duration;
    state.ultUsed++;
    actionLabel = '궁극기'; actionTag = 'tag-ult';

  } else if (action === 'link') {
    dur = c.link_dur;
    dmg = dmgOf(c.linkMult, c.linkBonus);
    cs.linkCdEnd = t + cs.baseLinkCd;
    state.teamSp = Math.min(SP.max_sp, state.teamSp + 20 + c.link_sp_gain);
    cs.ultGauge = Math.min(c.ult_cost, cs.ultGauge + c.link_gauge);
    state.spResumeTime = t + SP.link_regen_pause;
    const sup = supporters.find(s => s.idx === ci && s.trigger === 'link');
    if (sup) state.buffExpiries[ci] = t + sup.duration;
    state.linkUsed++;
    actionLabel = '연계 스킬'; actionTag = 'tag-link';

  } else if (action === 'skill') {
    dur = c.skill_dur;
    dmg = c.skillMult > 0 ? dmgOf(c.skillMult, c.skillBonus) : 0;
    state.teamSp -= SP.skill_cost;
    state.teamSp = Math.min(SP.max_sp, state.teamSp + c.skill_sp_gain);
    cs.ultGauge = Math.min(c.ult_cost, cs.ultGauge + c.skill_gauge);
    state.spResumeTime = t + SP.skill_regen_pause;
    const sup = supporters.find(s => s.idx === ci && s.trigger === 'skill');
    if (sup) state.buffExpiries[ci] = t + sup.duration;
    state.skillUsed++;
    actionLabel = '배틀 스킬'; actionTag = 'tag-skill';

  } else { // basic
    dur = c.cycle;
    dmg = dmgOf(c.basicMult, 0);
    state.teamSp = Math.min(SP.max_sp, state.teamSp + c.sp_gain);
    cs.ultGauge = Math.min(c.ult_cost, cs.ultGauge + c.ult_gauge_per_basic);
    if (staggerData.maxStagger > 0 && t >= state.staggerBreakEndTime) {
      state.staggerCurrent += c.staggerPerCycle;
      if (state.staggerCurrent >= staggerData.maxStagger) {
        state.staggerBreakEndTime = t + staggerData.breakDuration;
        state.executionDone = false;
        state.staggerCurrent = 0;
      }
    }
    state.basicUsed++;
    actionLabel = '기본 공격'; actionTag = 'tag-basic';
  }

  state.totalDmg    += dmg;
  state.remainingHp  = Math.max(0, state.remainingHp - dmg);
  state.events.push({ time:t, duration:dur, charName:c.name, element:c.element,
                      action, actionLabel, actionTag, dmg, sp:Math.round(state.teamSp) });
  cs.nextTime = t + dur + 0.03;
}

// ────────────────────────────────────────────────────────────────────
// 상태 복제
// ────────────────────────────────────────────────────────────────────
function cloneState(s) {
  return {
    slots:               s.slots.map(c => ({ ...c })),
    buffExpiries:        s.buffExpiries.slice(),
    teamSp:              s.teamSp,
    lastSpTime:          s.lastSpTime,
    spResumeTime:        s.spResumeTime,
    totalDmg:            s.totalDmg,
    remainingHp:         s.remainingHp,
    staggerCurrent:      s.staggerCurrent,
    staggerBreakEndTime: s.staggerBreakEndTime,
    executionDone:       s.executionDone,
    events:              s.events.slice(),
    skillUsed:  s.skillUsed,
    linkUsed:   s.linkUsed,
    ultUsed:    s.ultUsed,
    basicUsed:  s.basicUsed,
  };
}

// ────────────────────────────────────────────────────────────────────
// 점수: 각 빔 자신의 현재 시간 기준 예상 킬타임 (낮을수록 좋음)
// ────────────────────────────────────────────────────────────────────
function scoreBeam(s) {
  if (s.remainingHp <= 0) return 0;
  const t = Math.min(...s.slots.map(c => c.nextTime));
  if (t <= 0 || s.totalDmg <= 0) return Infinity;
  return t + s.remainingHp / (s.totalDmg / t);
}

// ────────────────────────────────────────────────────────────────────
// 빔 1스텝 확장 → 후보 빔 배열 반환
// ────────────────────────────────────────────────────────────────────
function expandBeam(beam, chars, supporters, defMult, staggerData, simTime) {
  let minT = Infinity, ci = -1;
  beam.slots.forEach((cs, i) => { if (cs.nextTime < minT) { minT = cs.nextTime; ci = i; } });

  const t = minT;
  if (t >= simTime || beam.remainingHp <= 0) return [];

  // 처형 처리 (원본과 동일)
  if (staggerData.maxStagger > 0 && t < beam.staggerBreakEndTime && !beam.executionDone) {
    const nb = cloneState(beam);
    advanceSp(nb, t);
    nb.teamSp = Math.min(SP.max_sp, nb.teamSp + staggerData.execRecovery);
    nb.executionDone = true;
    nb.staggerCurrent = 0;
    nb.ultUsed++;
    nb.events.push({ time:t, duration:0.8, charName:chars[ci].name, element:chars[ci].element,
                     action:'exec', actionLabel:'⚡처형', actionTag:'tag-ult', dmg:0, sp:Math.round(nb.teamSp) });
    nb.slots[ci].nextTime = t + 0.83;
    return [nb];
  }

  // SP 미리 진행 (모든 분기에 공통 적용되도록 clone 전에 실행)
  advanceSp(beam, t);

  const greedy = decideAction(beam, ci, t, chars);
  const results = [];

  // ── 분기 A: 그리디 (항상 생성)
  {
    const nb = cloneState(beam);
    executeAction(nb, ci, greedy, t, chars, supporters, defMult, staggerData);
    results.push(nb);
  }

  // ── 분기 B: "참기" — 서포터가 있고, 버프 상황이 바뀔 때만
  if (greedy !== 'basic' && supporters.length > 0) {
    const buffActive = supporters.some(({ idx }) => t < beam.buffExpiries[idx]);
    const buffSoon   = supporters.some(({ idx, trigger }) => {
      if (trigger === 'link') {
        const rem = beam.slots[idx].linkCdEnd - t;
        return rem > 0 && rem <= 4.0;
      }
      if (trigger === 'skill') {
        const need = SP.skill_cost - beam.teamSp;
        return need > 0 && (need / SP.regen_rate) <= 4.0;
      }
      return false;
    });
    if (buffSoon || !buffActive) {
      const nb = cloneState(beam);
      executeAction(nb, ci, 'basic', t, chars, supporters, defMult, staggerData);
      results.push(nb);
    }
  }

  // ── 분기 C: 궁 보유 + 연계 가능 → 연계 먼저 시도
  if (greedy === 'ult' && t >= beam.slots[ci].linkCdEnd && t > 1.5 && chars[ci].linkMult > 0) {
    const nb = cloneState(beam);
    executeAction(nb, ci, 'link', t, chars, supporters, defMult, staggerData);
    results.push(nb);
  }

  return results;
}

// ────────────────────────────────────────────────────────────────────
// 빔 서치 메인
// ────────────────────────────────────────────────────────────────────
function beamSearch(params) {
  SP = params.sp;
  const { chars, supporters, defMult, staggerData, totalHp, simTime, timeLimitMs } = params;

  let beams = [params.initialState];
  let bestResult = null;
  const startTime = Date.now();
  let lastProgress = startTime;
  let step = 0;

  function updateBest(b, kt) {
    if (!bestResult || (kt !== null && (bestResult.killTime === null || kt < bestResult.killTime))) {
      bestResult = buildResult(b, kt, totalHp, simTime, chars);
    }
  }

  while (beams.length > 0) {
    if (Date.now() - startTime > timeLimitMs) break;

    // 진행률 보고
    if (Date.now() - lastProgress >= PROGRESS_INTERVAL_MS) {
      const minT = Math.min(...beams.map(b => Math.min(...b.slots.map(c => c.nextTime))));
      const pct  = Math.min(99, Math.round(minT / simTime * 100));
      postMessage({ type:'progress', pct, bestKillTime: bestResult?.killTime ?? null, step });
      lastProgress = Date.now();
    }

    // 종료 빔 처리
    const active = [];
    for (const b of beams) {
      const minT = Math.min(...b.slots.map(c => c.nextTime));
      if (minT >= simTime || b.remainingHp <= 0) {
        const kt = b.remainingHp <= 0
          ? (b.events.length ? b.events[b.events.length - 1].time : simTime)
          : null;
        updateBest(b, kt);
      } else {
        active.push(b);
      }
    }
    if (active.length === 0) break;

    // 확장
    const nextBeams = [];
    for (const b of active) {
      const expanded = expandBeam(b, chars, supporters, defMult, staggerData, simTime);
      for (const nb of expanded) nextBeams.push(nb);
      if (nextBeams.length >= BEAM_WIDTH * 8) break;
    }
    if (nextBeams.length === 0) break;

    // 각 빔 자신의 시간 기준 정렬 → 상위 BEAM_WIDTH 유지
    nextBeams.sort((a, b) => scoreBeam(a) - scoreBeam(b));
    beams = nextBeams.slice(0, BEAM_WIDTH);
    step++;
  }

  // 남은 빔에서 최선 갱신
  for (const b of beams) {
    const kt = b.remainingHp <= 0
      ? (b.events.length ? b.events[b.events.length - 1].time : simTime)
      : null;
    updateBest(b, kt);
  }

  return bestResult ?? buildResult(params.initialState, null, totalHp, simTime, chars);
}

// ────────────────────────────────────────────────────────────────────
// 결과 객체 빌드
// ────────────────────────────────────────────────────────────────────
function buildResult(b, killTime, totalHp, simTime, chars) {
  const actualTime = b.events.length ? b.events[b.events.length - 1].time : simTime;
  const kt  = killTime ?? (b.remainingHp <= 0 ? actualTime : null);
  const t   = kt ?? Math.min(actualTime, simTime);
  const dps = t > 0 ? Math.round(b.totalDmg / t) : 0;

  const charDmg = {};
  const typeDmg = { basic:0, skill:0, link:0, ult:0 };
  chars.forEach(c => { charDmg[c.name] = 0; });
  b.events.forEach(ev => {
    if (ev.dmg > 0) {
      charDmg[ev.charName] = (charDmg[ev.charName] || 0) + ev.dmg;
      const k = ev.action === 'exec' ? 'ult' : ev.action;
      if (typeDmg[k] !== undefined) typeDmg[k] += ev.dmg;
    }
  });

  return { events:b.events, totalDmg:b.totalDmg, dps, killTime:kt, simTime:t,
           remainingHp:b.remainingHp, totalHp, charDmg, typeDmg,
           skillUsed:b.skillUsed, linkUsed:b.linkUsed, ultUsed:b.ultUsed, basicUsed:b.basicUsed, chars };
}

// ────────────────────────────────────────────────────────────────────
// 메시지 핸들러
// ────────────────────────────────────────────────────────────────────
self.onmessage = function (e) {
  if (e.data.type !== 'start') return;
  try {
    postMessage({ type:'done', result: beamSearch(e.data.params) });
  } catch (err) {
    postMessage({ type:'error', msg: err.message + '\n' + (err.stack || '') });
  }
};
