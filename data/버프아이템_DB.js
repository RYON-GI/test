// 버프 아이템 DB - 한국어 공식 번역 기반 (중첩 불가 소모품)
// ─────────────────────────────────────────────────────
// duration: 지속 시간 (초), 0 = 즉시 회복형
// effects: 적용 효과 배열
//   type: 'atk_flat'(공격력 고정) | 'atk_pct'(공격력%) | 'crit_rate' | 'crit_dmg'
//         | 'all_dmg'(모든 피해%) | 'phys_dmg' | 'def_pct' | 'def_flat'
//         | 'dmg_reduce'(받는 피해 감소) | 'heal_eff' | 'ult_eff'(궁극기 충전 효율)
//         | 'ult_restore'(궁극기 에너지 즉시 회복%) | 'all_stat'(모든 능력치 고정)
//   val: 수치 (% 계열은 소수, 예: 0.11 = +11%)
// deploy_effect: 전술 아이템 배치 효과 (null이면 없음)
//   trigger: 'ult_below_50'(궁극기 50% 미만 시 자동 발동)
//   max_uses: 전투당 최대 사용 횟수
// ─────────────────────────────────────────────────────

export const BUFF_ITEM_DB = [
  {
    id: 1,
    name: "뚝 삶은 갈비 미상탕",
    duration: 300,
    effects: [
      { type: "atk_flat", val: 180 },
      { type: "crit_rate", val: 0.11 }
    ],
    deploy_effect: null
  },
  {
    id: 2,
    name: "제이콥의 유산",
    duration: 300,
    effects: [
      { type: "atk_pct", val: 0.27 }
    ],
    deploy_effect: null
  },
  {
    id: 3,
    name: "아츠가 부여된 금속 병",
    duration: 300,
    effects: [
      { type: "all_dmg", val: 0.25 }
    ],
    deploy_effect: null
  },
  {
    id: 4,
    name: "혼란의 약제",
    duration: 300,
    effects: [
      { type: "ult_eff", val: 0.24 }
    ],
    deploy_effect: null
  },
  {
    id: 5,
    name: "원기 회복 탕약",
    duration: 300,
    effects: [
      { type: "crit_rate", val: 0.09 },
      { type: "all_dmg", val: 0.18 }
    ],
    deploy_effect: null
  },
  {
    id: 6,
    name: "기름 폭발 볶음",
    duration: 300,
    effects: [
      { type: "dmg_reduce", val: 0.29 }
    ],
    deploy_effect: null
  },
  {
    id: 7,
    name: "무릎 볶음",
    duration: 300,
    effects: [
      { type: "def_flat", val: 43 },
      { type: "dmg_reduce", val: 0.17 }
    ],
    deploy_effect: null
  },
  {
    id: 8,
    name: "삶은 식양 완자",
    duration: 300,
    effects: [
      { type: "crit_rate", val: 0.21 }
    ],
    deploy_effect: null
  },
  {
    id: 9,
    name: "간편 진통 연고",
    duration: 300,
    effects: [
      { type: "dmg_reduce", val: 0.12 }
    ],
    deploy_effect: null
  },
  {
    id: 10,
    name: "매운 원석충 구이",
    duration: 300,
    effects: [
      { type: "def_pct", val: 0.30 }
    ],
    deploy_effect: null
  },
  {
    id: 11,
    name: "존 어르신의 햄버거",
    duration: 300,
    effects: [
      { type: "phys_dmg", val: 0.21 }
    ],
    deploy_effect: null
  },
  {
    id: 12,
    name: "안갯불에 물든 꽃",
    duration: 300,
    effects: [
      { type: "dmg_reduce", val: 0.17 }
    ],
    deploy_effect: null
  },
  {
    id: 13,
    name: "아츠가 부여된 병",
    duration: 300,
    effects: [
      { type: "all_dmg", val: 0.18 }
    ],
    deploy_effect: null
  },
  {
    id: 14,
    name: "식용 지옥의 용광로",
    duration: 300,
    effects: [
      { type: "atk_pct", val: 0.07 },
      { type: "crit_rate", val: 0.03 },
      { type: "all_dmg", val: 0.07 }
    ],
    deploy_effect: null
  },
  {
    id: 15,
    name: "개업일 고깃국",
    duration: 300,
    effects: [
      { type: "atk_pct", val: 0.12 }
    ],
    deploy_effect: null
  },
  {
    id: 16,
    name: "죽순 고기볶음",
    duration: 300,
    effects: [
      { type: "ult_eff", val: 0.21 },
      { type: "heal_eff", val: 0.35 }
    ],
    deploy_effect: null
  },
  {
    id: 17,
    name: "신비한 탄산음료",
    duration: 300,
    effects: [
      { type: "def_pct", val: 0.18 },
      { type: "dmg_reduce", val: 0.11 },
      { type: "heal_eff", val: 0.12 }
    ],
    deploy_effect: null
  },
  {
    id: 18,
    name: "작은 설탕 그림",
    duration: 300,
    effects: [
      { type: "atk_pct", val: 0.09 },
      { type: "crit_rate", val: 0.09 }
    ],
    deploy_effect: null
  },
  {
    id: 19,
    name: "꿀벌레 푸딩",
    duration: 0,
    effects: [
      { type: "ult_restore", val: 0.08 }
    ],
    deploy_effect: {
      trigger: "ult_below_50",
      desc: "장착한 오퍼레이터의 궁극기 에너지가 50% 미만일 때 자동으로 사용",
      max_uses: 4
    }
  },
  {
    id: 20,
    name: "고기들의 회의",
    duration: 0,
    effects: [
      { type: "ult_restore", val: 0.20 }
    ],
    deploy_effect: {
      trigger: "ult_below_50",
      desc: "장착한 오퍼레이터의 궁극기 에너지가 50% 미만일 때 자동으로 사용",
      max_uses: 4
    }
  },
  {
    id: 21,
    name: "세쉬키폼 스테이크",
    duration: 300,
    effects: [
      { type: "all_stat", val: 15 }
    ],
    deploy_effect: null
  },
  {
    id: 22,
    name: "이상한 수제 사탕",
    duration: 300,
    effects: [
      { type: "def_pct", val: 0.18 }
    ],
    deploy_effect: null
  }
];

// 딜 관련 버프만 필터링 (시뮬레이터용)
export const DPS_RELEVANT_ITEMS = BUFF_ITEM_DB.filter(item =>
  item.effects.some(e => ['atk_flat','atk_pct','crit_rate','all_dmg','phys_dmg','heat_dmg','cold_dmg','elec_dmg','nat_dmg','arts_dmg','ult_restore','ult_eff'].includes(e.type))
);
