// 적 DB — Endaxis 실측 스태거 수치 + 게임 내 레벨별 DEF 실측값 기반
// ─────────────────────────────────────────────────────────────────────
// id             : 내부 식별자
// name           : 한국어 이름
// tier           : 'boss'
// category       : 세력/종류
// maxStagger     : 불균형 최대치 (이 수치 달성 시 스태거 브레이크)
// staggerNodeCount    : 중간 노드 수 (노드 도달마다 일시 경직)
// staggerNodeDuration : 노드 경직 지속 시간(초)
// staggerBreakDuration: 스태거 브레이크 지속 시간(초)
// executionRecovery   : 처형 후 회복되는 불균형치 (=초기화 수치)
// stats[레벨]    : { hp, def } — 해당 레벨 적용 HP/방어력
//   def 적용 공식: 피해 배율 = 100 / (100 + def)
// ─────────────────────────────────────────────────────────────────────

// ── 레벨별 DEF 실측 기준값 ──────────────────────────────────────────
// 엔드필드 공식: 방어력 = 기본방어 × 레벨스케일
// 레벨 60 기준 보스 DEF ≈ 100, 챔피언 ≈ 85, 엘리트 ≈ 70, 일반 ≈ 50
// ─────────────────────────────────────────────────────────────────────

export const ENEMY_DB = [

  // ══ 보스 ══════════════════════════════════════════════════════════

  {
    id: 'eny_0045_agtrinit',
    name: '트라이갤로스',
    tier: 'boss',
    category: '아겔로스',
    maxStagger: 280,
    staggerNodeCount: 1,
    staggerNodeDuration: 2,
    staggerBreakDuration: 11,
    executionRecovery: 100,
    resistances: { phys: 0.8, fire: 0.8, elec: 1, ice: 1, ruin: 0.8, anomaly: 1 },
    stats: {
      20: { hp: 9936,   def: 100 },
      40: { hp: 62869,  def: 100 },
      60: { hp: 247504, def: 100 },
      80: { hp: 595357, def: 100 },
      90: { hp: 917164, def: 100 },
    },
  },

  {
    id: 'eny_0051_rodin',
    name: '로댄',
    tier: 'boss',
    category: '랜드브레이커',
    maxStagger: 280,
    staggerNodeCount: 1,
    staggerNodeDuration: 2,
    staggerBreakDuration: 10,
    executionRecovery: 100,
    resistances: { phys: 1, fire: 1, elec: 1, ice: 1, ruin: 1, anomaly: 1 },
    stats: {
      20: { hp: 24839,   def: 100 },
      40: { hp: 157171,  def: 100 },
      60: { hp: 618759,  def: 100 },
      80: { hp: 1488392, def: 100 },
      90: { hp: 2292909, def: 100 },
    },
  },

  {
    id: 'eny_marble_aggel_1',
    name: '마블 아겔로미레 (1페이즈)',
    tier: 'boss',
    category: '아겔로스',
    maxStagger: 200,
    staggerNodeCount: 1,
    staggerNodeDuration: 2,
    staggerBreakDuration: 24,
    executionRecovery: 100,
    resistances: { phys: 1, fire: 1, elec: 1, ice: 1, ruin: 1, anomaly: 1 },
    stats: {
      20: { hp: 14903,   def: 100 },
      40: { hp: 94303,   def: 100 },
      60: { hp: 371256,  def: 100 },
      80: { hp: 893035,  def: 100 },
      90: { hp: 1375745, def: 100 },
    },
  },

  {
    id: 'eny_marble_aggel_2',
    name: '마블 아겔로미레 (2페이즈)',
    tier: 'boss',
    category: '아겔로스',
    maxStagger: 320,
    staggerNodeCount: 1,
    staggerNodeDuration: 2,
    staggerBreakDuration: 11,
    executionRecovery: 100,
    resistances: { phys: 1, fire: 1, elec: 1, ice: 1, ruin: 1, anomaly: 1 },
    stats: {
      20: { hp: 31794,   def: 100 },
      40: { hp: 201179,  def: 100 },
      60: { hp: 792012,  def: 100 },
      80: { hp: 1905141, def: 100 },
      90: { hp: 2934923, def: 100 },
    },
  },

  // ══ 일반/엘리트 ═════════════════════════════════════════════════════

  {
    id: 'eny_marble_tentacle',
    name: '마블 촉수',
    tier: 'normal',
    category: '아겔로스',
    maxStagger: 0,
    staggerNodeCount: 0,
    staggerNodeDuration: 0,
    staggerBreakDuration: 6,
    executionRecovery: 100,
    resistances: { phys: 1, fire: 1, elec: 1, ice: 1, ruin: 1, anomaly: 1 },
    stats: {
      20: { hp: 1689,   def: 100 },
      40: { hp: 10688,  def: 100 },
      60: { hp: 42076,  def: 100 },
      80: { hp: 101211, def: 100 },
      90: { hp: 155918, def: 100 },
    },
  },
];

// ── 빠른 조회용 Map ─────────────────────────────────────────────────
export const ENEMY_BY_ID   = new Map(ENEMY_DB.map(e => [e.id, e]));
export const ENEMY_BY_NAME = new Map(ENEMY_DB.map(e => [e.name, e]));

// ── 적 레벨별 스탯 가져오기 헬퍼 ────────────────────────────────────
// 지원 레벨: 20 / 40 / 60 / 80 / 90
// 그 외 레벨은 인접 레벨로 보간
export function getEnemyStats(enemyId, level = 60) {
  const enemy = ENEMY_BY_ID.get(enemyId);
  if (!enemy) return { hp: 100000, def: 80 };

  const levels = [20, 40, 60, 80, 90];
  const clamp = Math.max(20, Math.min(90, level));

  // 정확히 맞는 레벨
  if (enemy.stats[clamp]) return { ...enemy.stats[clamp] };

  // 보간: 앞뒤 레벨 찾기
  const lo = levels.filter(l => l <= clamp).pop() ?? 20;
  const hi = levels.filter(l => l >= clamp)[0] ?? 90;
  if (lo === hi) return { ...enemy.stats[lo] };

  const t = (clamp - lo) / (hi - lo);
  const sLo = enemy.stats[lo];
  const sHi = enemy.stats[hi];
  return {
    hp:  Math.round(sLo.hp  + (sHi.hp  - sLo.hp)  * t),
    def: Math.round(sLo.def + (sHi.def - sLo.def) * t),
  };
}
// ── UI 선택 가능한 최상위 적 목록 ────────────────────────────────────
export const SELECTABLE_ENEMIES = ENEMY_DB.filter(e =>
  !e.id.includes('tentacle') &&
  !e.id.endsWith('_1') &&
  !e.id.endsWith('_2')
);

// ── 시뮬레이터용 총 HP 계산 헬퍼 ────────────────────────────────────
export function getTotalHp(enemyId, level = 60) {
  const enemy = ENEMY_BY_ID.get(enemyId);
  if (!enemy) return 0;

  // 복합 페이즈 구조 (마블 아겔로미레)
  if (enemy.phases) {
    let total = 0;
    for (const phase of enemy.phases) {
      for (const targetId of phase.targets) {
        total += getEnemyStats(targetId, level).hp;
      }
    }
    return total;
  }

  // 단일 적 (부활 포함 — 트라이갤로스 등)
  const stats = getEnemyStats(enemyId, level);
  return stats.hp * ((enemy.revival_count ?? 0) + 1);
}

// ── 마블 아겔로미레 합산 (1+2페이즈 HP 합계) ───────────────────────
export const MARBLE_AGGEL_COMBINED = {
  id: 'eny_marble_aggel_combined',
  name: '마블 아겔로미레 (전페이즈)',
  tier: 'boss',
  category: '아겔로스',
  maxStagger: 200,
  staggerNodeCount: 1,
  staggerNodeDuration: 2,
  staggerBreakDuration: 24,
  executionRecovery: 100,
  phase_ids: ['eny_marble_aggel_1', 'eny_marble_aggel_2'],
  stats: {
    20: { hp: 14903 + 31794,   def: 100 },
    40: { hp: 94303 + 201179,  def: 100 },
    60: { hp: 371256 + 792012, def: 100 },
    80: { hp: 893035 + 1905141,def: 100 },
    90: { hp: 1375745+ 2934923,def: 100 },
  },
};
