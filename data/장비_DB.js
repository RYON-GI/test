// 장비 옵션 DB
// 구조:
//   SET_BONUS[세트명]       → 세트 효과 텍스트
//   ITEM_OPTIONS[장비명]    → { baseStats, uniqueStat, forgeLv1, forgeLv2, forgeLv3 }
//     baseStats   : 기본 고정 스탯 { 방어력, 힘, 민첩, 지능, 의지 } (없는 항목은 생략)
//     uniqueStat  : 고유 옵션 { name, value }  (기본값)
//     forge       : 단조 스탯 [ { name, lv1, lv2, lv3 }, ... ]

// ────────────────────────────────────────
// 세트 효과
// ────────────────────────────────────────
export const SET_BONUS = {
  "개척": "3개 세트 효과: 장착자의 연계 스킬 쿨타임 감소 +15% / 장착자가 스킬을 사용하여 스킬 게이지를 회복한 후, 팀 전체가 주는 피해 +16%, 15초 동안 지속. 해당 효과는 30초마다 최대 1회만 발동합니다.",
  "검술사": "3개 세트 효과: 장착자의 불균형 효율 보너스 +20% / 장착자가 물리 이상 효과를 부여한 후, 공격력 250%만큼의 추가 물리 피해[10포인트 불균형치]. 해당 효과는 15초마다 최대 1회만 발동합니다.",
  "경량 초자연": "3개 세트 효과: 장착자의 공격력 +8% / 장착자가 적에게 방어 불능을 부여한 후, 물리 피해 +8%, 15초 동안 지속, 최대 중첩 4스택. 목표의 방어 불능 스택이 4스택에 도달할 경우, 추가 물리 피해 +16%, 10초 동안 지속, 해당 효과는 중첩되지 않습니다.",
  "본 크러셔": "3개 세트 효과: 장착자의 공격력 +15% / 장착자가 연계 스킬을 사용할 때, 본 크러셔의 압박 1스택 획득, 다음 배틀 스킬의 피해 +30%. 본 크러셔의 압박은 최대 2스택까지만 중첩됩니다.",
  "생체 보조": "3개 세트 효과: 장착자의 치유 효율 +20% / 장착자가 아군을 치유할 때, 목표가 10초 동안 받는 모든 유형 피해 -15%, 해당 목표가 받는 치유량이 최대치를 넘을 경우, 받는 모든 유형 피해 -30%, 해당 효과는 중첩되지 않습니다.",
  "식양의 숨결": "3개 세트 효과: 장착자의 생명력 +1000 / 장착자가 중폭, 비호, 취약, 허약을 부여한 후, 다른 팀원이 주는 피해 +16%, 15초 동안 지속. 해당 효과는 중첩되지 않습니다.",
  "열 작업용": "3개 세트 효과: 장착자의 오리지늄 아츠 강도 +30 / 장착자가 적에게 연소를 부여한 후, 열기 피해 +50%, 10초 동안 지속, 해당 효과는 중첩되지 않습니다. / 장착자가 적에게 부식을 부여한 후, 자연 피해 +50%, 10초 동안 지속, 해당 효과는 중첩되지 않습니다.",
  "위기 탈출": null,
  "응룡 50식": "3개 세트 효과: 장착자의 공격력 +15% / 팀 내 임의의 오퍼레이터가 배틀 스킬을 사용할 때, 장착자가 응룡의 예리함 1스택 획득, 해당 오퍼레이터의 다음 연계 스킬 피해 +20%. 응룡의 예리함은 최대 3스택까지만 중첩됩니다.",
  "조류의 물결": "3개 세트 효과: 장착자의 모든 스킬 피해 +20% / 장착자가 적에게 2스택 혹은 그 이상의 아츠 부착을 부여한 후, 주는 아츠 피해 +35%, 15초 동안 지속. 해당 효과는 중첩되지 않습니다.",
  "펄스식": "3개 세트 효과: 장착자의 오리지늄 아츠 강도 +30 / 장착자가 적에게 감전을 부여한 후, 전기 피해 +50%, 10초 동안 지속, 해당 효과는 중첩되지 않습니다. / 장착자가 적에게 동결을 부여한 후, 냉기 피해 +50%, 10초 동안 지속, 해당 효과는 중첩되지 않습니다.",
  "M. I. 경찰용": "3개 세트 효과: 장착자의 치명타 확률 +5% / 장착자가 적에게 치명타를 준 후, 5초 동안 공격력 +5%, 최대 중첩 5스택. 최대 중첩 시, 치명타 확률 추가 +5%, 해당 효과는 중첩되지 않습니다.",
};

// ────────────────────────────────────────
// 장비별 옵션
// forge: 단조 단계 1/2/3 강화 스탯
// ────────────────────────────────────────
export const ITEM_OPTIONS = {

  // ── 개척 ────────────────────────────
  "개척자 증량 산소 공급 장치": {
    baseStats: { 방어력: 21, 민첩: 32, 지능: 21 },
    uniqueStat: { name: "보조 능력치", value: "+20.7%" },
    forge: [
      { name: "민첩", lv1: 35, lv2: 38, lv3: 41 },
      { name: "지능", lv1: 23, lv2: 25, lv3: 27 },
      { name: "보조 능력치", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "개척자 통신기 · I": {
    baseStats: { 방어력: 21, 힘: 32, 지능: 21 },
    uniqueStat: { name: "냉기와 전기 피해 보너스", value: "+23%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "지능", lv1: 23, lv2: 25, lv3: 27 },
      { name: "냉기와 전기 피해 보너스", lv1: "+25.3%", lv2: "+27.6%", lv3: "+29.9%" },
    ],
  },
  "개척자 통신기": {
    baseStats: { 방어력: 21, 힘: 32, 민첩: 21 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "민첩", lv1: 23, lv2: 25, lv3: 27 },
      { name: "연계 스킬 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "개척자 내부식성 장갑": {
    baseStats: { 방어력: 42, 민첩: 65, 지능: 43 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+34.5%" },
    forge: [
      { name: "민첩", lv1: 71, lv2: 78, lv3: 84 },
      { name: "지능", lv1: 47, lv2: 51, lv3: 55 },
      { name: "배틀 스킬 피해 보너스", lv1: "+38%", lv2: "+41.4%", lv3: "+44.9%" },
    ],
  },
  "개척자 방어구 · III": {
    baseStats: { 방어력: 56, 민첩: 87, 지능: 58 },
    uniqueStat: { name: "보조 능력치", value: "+10.4%" },
    forge: [
      { name: "민첩", lv1: 95, lv2: 104, lv3: 113 },
      { name: "지능", lv1: 63, lv2: 69, lv3: 75 },
      { name: "보조 능력치", lv1: "+11.4%", lv2: "+12.4%", lv3: "+13.5%" },
    ],
  },
  "개척자 방어구 · II": {
    baseStats: { 방어력: 56, 민첩: 87, 지능: 58 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+20.7%" },
    forge: [
      { name: "민첩", lv1: 95, lv2: 104, lv3: 113 },
      { name: "지능", lv1: 63, lv2: 69, lv3: 75 },
      { name: "배틀 스킬 피해 보너스", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "개척자 방어구 · I": {
    baseStats: { 방어력: 56, 힘: 87, 민첩: 58 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+20.7%" },
    forge: [
      { name: "힘", lv1: 95, lv2: 104, lv3: 113 },
      { name: "민첩", lv1: 63, lv2: 69, lv3: 75 },
      { name: "배틀 스킬 피해 보너스", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "개척자 방어구": {
    baseStats: { 방어력: 56, 힘: 87, 지능: 58 },
    uniqueStat: { name: "궁극기 피해 보너스", value: "+25.9%" },
    forge: [
      { name: "힘", lv1: 95, lv2: 104, lv3: 113 },
      { name: "지능", lv1: 63, lv2: 69, lv3: 75 },
      { name: "궁극기 피해 보너스", lv1: "+28.5%", lv2: "+31.1%", lv3: "+33.6%" },
    ],
  },

  // ── 검술사 ────────────────────────────
  "홍산 부싯돌": {
    baseStats: { 방어력: 21, 민첩: 32, 힘: 21 },
    uniqueStat: { name: "물리 피해 보너스", value: "+23%" },
    forge: [
      { name: "민첩", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "물리 피해 보너스", lv1: "+25.3%", lv2: "+27.6%", lv3: "+29.9%" },
    ],
  },
  "홍산 전술 건틀릿": {
    baseStats: { 방어력: 42, 민첩: 65, 힘: 43 },
    uniqueStat: { name: "궁극기 피해 보너스", value: "+43.1%" },
    forge: [
      { name: "민첩", lv1: 71, lv2: 78, lv3: 84 },
      { name: "힘", lv1: 47, lv2: 51, lv3: 55 },
      { name: "궁극기 피해 보너스", lv1: "+47.4%", lv2: "+51.7%", lv3: "+56.1%" },
    ],
  },
  "홍산 전술 장갑": {
    baseStats: { 방어력: 42, 힘: 65, 의지: 43 },
    uniqueStat: { name: "물리 피해 보너스", value: "+19.2%" },
    forge: [
      { name: "힘", lv1: 71, lv2: 78, lv3: 84 },
      { name: "의지", lv1: 47, lv2: 51, lv3: 55 },
      { name: "물리 피해 보너스", lv1: "+21.1%", lv2: "+23%", lv3: "+24.9%" },
    ],
  },
  "홍산 중장갑": {
    baseStats: { 방어력: 56, 민첩: 87, 힘: 58 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+20" },
    forge: [
      { name: "민첩", lv1: 95, lv2: 104, lv3: 113 },
      { name: "힘", lv1: 63, lv2: 69, lv3: 75 },
      { name: "오리지늄 아츠 강도", lv1: 22, lv2: 24, lv3: 27 },
    ],
  },

  // ── 경량 초자연 ────────────────────────
  "경량 초자연 안정판": {
    baseStats: { 방어력: 21, 민첩: 32, 힘: 21 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+41" },
    forge: [
      { name: "민첩", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "오리지늄 아츠 강도", lv1: 45, lv2: 49, lv3: 53 },
    ],
  },
  "경량 초자연 분석 반지": {
    baseStats: { 방어력: 21, 힘: 32, 의지: 21 },
    uniqueStat: { name: "물리 피해 보너스", value: "+23%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "의지", lv1: 23, lv2: 25, lv3: 27 },
      { name: "물리 피해 보너스", lv1: "+25.3%", lv2: "+27.6%", lv3: "+29.9%" },
    ],
  },
  "경량 초자연 글러브": {
    baseStats: { 방어력: 42, 민첩: 65, 힘: 43 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+34" },
    forge: [
      { name: "민첩", lv1: 71, lv2: 78, lv3: 84 },
      { name: "힘", lv1: 47, lv2: 51, lv3: 55 },
      { name: "오리지늄 아츠 강도", lv1: 38, lv2: 41, lv3: 45 },
    ],
  },
  "경량 초자연 보호판": {
    baseStats: { 방어력: 56, 힘: 87, 의지: 58 },
    uniqueStat: { name: "불균형 목표에 주는 피해 보너스", value: "+20.7%" },
    forge: [
      { name: "힘", lv1: 95, lv2: 104, lv3: 113 },
      { name: "의지", lv1: 63, lv2: 69, lv3: 75 },
      { name: "불균형 목표에 주는 피해 보너스", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },

  // ── 본 크러셔 ────────────────────────
  "본 크러셔 조각상 · I": {
    baseStats: { 방어력: 21, 의지: 32, 지능: 21 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "지능", lv1: 23, lv2: 25, lv3: 27 },
      { name: "연계 스킬 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "본 크러셔 조각상": {
    baseStats: { 방어력: 21, 의지: 32, 민첩: 21 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "민첩", lv1: 23, lv2: 25, lv3: 27 },
      { name: "배틀 스킬 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "본 크러셔 마스크 · I": {
    baseStats: { 방어력: 21, 민첩: 32, 힘: 21 },
    uniqueStat: { name: "치명타 확률", value: "+10.4%" },
    forge: [
      { name: "민첩", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "치명타 확률", lv1: "+11.4%", lv2: "+12.4%", lv3: "+13.5%" },
    ],
  },
  "본 크러셔 마스크": {
    baseStats: { 방어력: 21, 민첩: 32, 힘: 21 },
    uniqueStat: { name: "불균형 목표에 주는 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "민첩", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "불균형 목표에 주는 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "본 크러셔 머플러 · I": {
    baseStats: { 방어력: 56, 의지: 87, 민첩: 58 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+12.3%" },
    forge: [
      { name: "의지", lv1: 95, lv2: 104, lv3: 113 },
      { name: "민첩", lv1: 63, lv2: 69, lv3: 75 },
      { name: "궁극기 충전 효율", lv1: "+13.6%", lv2: "+14.8%", lv3: "+16%" },
    ],
  },
  "본 크러셔 머플러": {
    baseStats: { 방어력: 56, 의지: 87, 힘: 58 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+20.7%" },
    forge: [
      { name: "의지", lv1: 95, lv2: 104, lv3: 113 },
      { name: "힘", lv1: 63, lv2: 69, lv3: 75 },
      { name: "연계 스킬 피해 보너스", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "본 크러셔 중갑 방어구 · I": {
    baseStats: { 방어력: 56, 민첩: 87, 힘: 58 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+20.7%" },
    forge: [
      { name: "민첩", lv1: 95, lv2: 104, lv3: 113 },
      { name: "힘", lv1: 63, lv2: 69, lv3: 75 },
      { name: "연계 스킬 피해 보너스", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "본 크러셔 중갑 방어구": {
    baseStats: { 방어력: 56, 민첩: 87, 지능: 58 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+12.3%" },
    forge: [
      { name: "민첩", lv1: 95, lv2: 104, lv3: 113 },
      { name: "지능", lv1: 63, lv2: 69, lv3: 75 },
      { name: "궁극기 충전 효율", lv1: "+13.6%", lv2: "+14.8%", lv3: "+16%" },
    ],
  },

  // ── 생체 보조 ────────────────────────
  "생체 보조 보호 주사기": {
    baseStats: { 방어력: 21, 의지: 41 },
    uniqueStat: { name: "heal_pct", value: "+20.7%" },
    forge: [
      { name: "의지", lv1: 45, lv2: 49, lv3: 53 },
      { name: "heal_pct", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "생체 보조 보호판": {
    baseStats: { 방어력: 21, 의지: 32, 지능: 21 },
    uniqueStat: { name: "main_stat_pct", value: "+20.7%" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "지능", lv1: 23, lv2: 25, lv3: 27 },
      { name: "main_stat_pct", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "생체 보조 접속기 · I": {
    baseStats: { 방어력: 21, 힘: 32, 의지: 21 },
    uniqueStat: { name: "생명력", value: "+41.4%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "의지", lv1: 23, lv2: 25, lv3: 27 },
      { name: "생명력", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "생체 보조 접속기": {
    baseStats: { 방어력: 21, 힘: 32, 의지: 21 },
    uniqueStat: { name: "dmg_reduction", value: "17.2%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "의지", lv1: 23, lv2: 25, lv3: 27 },
      { name: "dmg_reduction", lv1: "18.5%", lv2: "19.9%", lv3: "21.2%" },
    ],
  },
  "생체 보조 건틀릿": {
    baseStats: { 방어력: 42, 의지: 65, 힘: 43 },
    uniqueStat: { name: "heal_pct", value: "+17.3%" },
    forge: [
      { name: "의지", lv1: 71, lv2: 78, lv3: 84 },
      { name: "힘", lv1: 47, lv2: 51, lv3: 55 },
      { name: "heal_pct", lv1: "19%", lv2: "20.7%", lv3: "22.4%" },
    ],
  },
  "생체 보조 견갑": {
    baseStats: { 방어력: 42, 힘: 65, 의지: 43 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+20.5%" },
    forge: [
      { name: "힘", lv1: 71, lv2: 78, lv3: 84 },
      { name: "의지", lv1: 47, lv2: 51, lv3: 55 },
      { name: "궁극기 충전 효율", lv1: "+22.6%", lv2: "+24.6%", lv3: "+26.7%" },
    ],
  },
  "생체 보조 흉갑": {
    baseStats: { 방어력: 56, 의지: 87, 지능: 58 },
    uniqueStat: { name: "heal_pct", value: "+10.4%" },
    forge: [
      { name: "의지", lv1: 95, lv2: 104, lv3: 113 },
      { name: "지능", lv1: 63, lv2: 69, lv3: 75 },
      { name: "heal_pct", lv1: "+11.4%", lv2: "+12.4%", lv3: "+13.5%" },
    ],
  },
  "생체 보조 중갑": {
    baseStats: { 방어력: 56, 힘: 87, 의지: 58 },
    uniqueStat: { name: "heal_pct", value: "+10.4%" },
    forge: [
      { name: "힘", lv1: 95, lv2: 104, lv3: 113 },
      { name: "의지", lv1: 63, lv2: 69, lv3: 75 },
      { name: "heal_pct", lv1: "+11.4%", lv2: "+12.4%", lv3: "+13.5%" },
    ],
  },

  // ── 식양의 숨결 ────────────────────────
  "식양의 숨결 보조 견갑": {
    baseStats: { 방어력: 21, 의지: 32, 지능: 21 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+24.6%" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "지능", lv1: 23, lv2: 25, lv3: 27 },
      { name: "궁극기 충전 효율", lv1: "+27.1%", lv2: "+29.6%", lv3: "+32%" },
    ],
  },
  "식양의 숨결 충전 코어 · I": {
    baseStats: { 방어력: 21, 지능: 32, 의지: 21 },
    uniqueStat: { name: "heal_pct", value: "+20.7%" },
    forge: [
      { name: "지능", lv1: 35, lv2: 38, lv3: 41 },
      { name: "의지", lv1: 23, lv2: 25, lv3: 27 },
      { name: "heal_pct", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "식양의 숨결 충전 코어": {
    baseStats: { 방어력: 21, 지능: 32, 힘: 21 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+24.6%" },
    forge: [
      { name: "지능", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "궁극기 충전 효율", lv1: "+27.1%", lv2: "+29.6%", lv3: "+32%" },
    ],
  },
  "식양의 숨결 글러브 · I": {
    baseStats: { 방어력: 42, 지능: 65, 의지: 43 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+20.5%" },
    forge: [
      { name: "지능", lv1: 71, lv2: 78, lv3: 84 },
      { name: "의지", lv1: 47, lv2: 51, lv3: 55 },
      { name: "궁극기 충전 효율", lv1: "+22.6%", lv2: "+24.6%", lv3: "+26.7%" },
    ],
  },
  "식양의 숨결 글러브": {
    baseStats: { 방어력: 42, 지능: 65, 힘: 43 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+20.5%" },
    forge: [
      { name: "지능", lv1: 71, lv2: 78, lv3: 84 },
      { name: "힘", lv1: 47, lv2: 51, lv3: 55 },
      { name: "궁극기 충전 효율", lv1: "+22.6%", lv2: "+24.6%", lv3: "+26.7%" },
    ],
  },
  "식양의 숨결 장갑": {
    baseStats: { 방어력: 56, 의지: 87, 지능: 58 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+20" },
    forge: [
      { name: "의지", lv1: 95, lv2: 104, lv3: 113 },
      { name: "지능", lv1: 63, lv2: 69, lv3: 75 },
      { name: "오리지늄 아츠 강도", lv1: 22, lv2: 24, lv3: 27 },
    ],
  },

  // ── 열 작업용 ────────────────────────
  "열 작업용 전력 상자": {
    baseStats: { 방어력: 21, 의지: 32, 지능: 21 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+41" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "지능", lv1: 23, lv2: 25, lv3: 27 },
      { name: "오리지늄 아츠 강도", lv1: 45, lv2: 49, lv3: 53 },
    ],
  },
  "열 작업용 에너지 저장함": {
    baseStats: { 방어력: 21, 힘: 32, 민첩: 21 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+41" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "민첩", lv1: 23, lv2: 25, lv3: 27 },
      { name: "오리지늄 아츠 강도", lv1: 45, lv2: 49, lv3: 53 },
    ],
  },
  "열 작업용 온도 측정기": {
    baseStats: { 방어력: 21, 지능: 41 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "지능", lv1: 45, lv2: 49, lv3: 53 },
      { name: "배틀 스킬 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "열 작업용 건틀릿 · I": {
    baseStats: { 방어력: 42, 의지: 65, 지능: 43 },
    uniqueStat: { name: "heat_nat_dmg", value: "+19.2%" },
    forge: [
      { name: "의지", lv1: 71, lv2: 78, lv3: 84 },
      { name: "지능", lv1: 47, lv2: 51, lv3: 55 },
      { name: "heat_nat_dmg", lv1: "+21.1%", lv2: "+23%", lv3: "+24.9%" },
    ],
  },
  "열 작업용 건틀릿": {
    baseStats: { 방어력: 42, 지능: 65, 힘: 43 },
    uniqueStat: { name: "heat_nat_dmg", value: "+19.2%" },
    forge: [
      { name: "지능", lv1: 71, lv2: 78, lv3: 84 },
      { name: "힘", lv1: 47, lv2: 51, lv3: 55 },
      { name: "heat_nat_dmg", lv1: "+21.1%", lv2: "+23%", lv3: "+24.9%" },
    ],
  },
  "열 작업용 강화 골격": {
    baseStats: { 방어력: 56, 힘: 87, 민첩: 58 },
    uniqueStat: { name: "heat_nat_dmg", value: "+11.5%" },
    forge: [
      { name: "힘", lv1: 95, lv2: 104, lv3: 113 },
      { name: "민첩", lv1: 63, lv2: 69, lv3: 75 },
      { name: "heat_nat_dmg", lv1: "+12.7%", lv2: "+13.8%", lv3: "+14.9%" },
    ],
  },

  // ── 위기 탈출 ────────────────────────
  "위기 탈출 도장 · I": {
    baseStats: { 방어력: 21, 의지: 43 },
    uniqueStat: { name: "치명타 확률", value: "+10.8%" },
    forge: [
      { name: "의지", lv1: 47, lv2: 51, lv3: 55 },
      { name: "치명타 확률", lv1: "+11.9%", lv2: "+13%", lv3: "+14%" },
    ],
  },
  "위기 탈출 도장": {
    baseStats: { 방어력: 21, 지능: 43 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+25.7%" },
    forge: [
      { name: "지능", lv1: 47, lv2: 51, lv3: 55 },
      { name: "궁극기 충전 효율", lv1: "+28.3%", lv2: "+30.9%", lv3: "+33.4%" },
    ],
  },
  "위기 탈출 식별 패널 · I": {
    baseStats: { 방어력: 21, 민첩: 43 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+43.2%" },
    forge: [
      { name: "민첩", lv1: 47, lv2: 51, lv3: 55 },
      { name: "연계 스킬 피해 보너스", lv1: "+47.5%", lv2: "+51.8%", lv3: "+56.2%" },
    ],
  },
  "위기 탈출 식별 패널": {
    baseStats: { 방어력: 21, 힘: 43 },
    uniqueStat: { name: "dmg_reduction", value: "17.8%" },
    forge: [
      { name: "힘", lv1: 47, lv2: 51, lv3: 55 },
      { name: "dmg_reduction", lv1: "19.2%", lv2: "20.6%", lv3: "21.9%" },
    ],
  },

  // ── 응룡 50식 ────────────────────────
  "응룡 50식 탐지기": {
    baseStats: { 방어력: 21, 힘: 32, 의지: 21 },
    uniqueStat: { name: "물리 피해 보너스", value: "+23%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "의지", lv1: 23, lv2: 25, lv3: 27 },
      { name: "물리 피해 보너스", lv1: "+25.3%", lv2: "+27.6%", lv3: "+29.9%" },
    ],
  },
  "응룡 50식 단검 · I": {
    baseStats: { 방어력: 21, 지능: 32, 힘: 21 },
    uniqueStat: { name: "all_skill_dmg", value: "+27.6%" },
    forge: [
      { name: "지능", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "all_skill_dmg", lv1: "+30.4%", lv2: "+33.1%", lv3: "+35.9%" },
    ],
  },
  "응룡 50식 단검": {
    baseStats: { 방어력: 21, 의지: 32, 민첩: 21 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "민첩", lv1: 23, lv2: 25, lv3: 27 },
      { name: "연계 스킬 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "응룡 50식 글러브 · I": {
    baseStats: { 방어력: 42, 의지: 65, 민첩: 43 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+34.5%" },
    forge: [
      { name: "의지", lv1: 71, lv2: 78, lv3: 84 },
      { name: "민첩", lv1: 47, lv2: 51, lv3: 55 },
      { name: "연계 스킬 피해 보너스", lv1: "+38%", lv2: "+41.4%", lv3: "+44.9%" },
    ],
  },
  "응룡 50식 글러브": {
    baseStats: { 방어력: 42, 민첩: 65, 지능: 43 },
    uniqueStat: { name: "연계 스킬 피해 보너스", value: "+34.5%" },
    forge: [
      { name: "민첩", lv1: 71, lv2: 78, lv3: 84 },
      { name: "지능", lv1: 47, lv2: 51, lv3: 55 },
      { name: "연계 스킬 피해 보너스", lv1: "+38%", lv2: "+41.4%", lv3: "+44.9%" },
    ],
  },
  "응룡 50식 경갑": {
    baseStats: { 방어력: 56, 의지: 87, 힘: 58 },
    uniqueStat: { name: "all_skill_dmg", value: "+13.8%" },
    forge: [
      { name: "의지", lv1: 95, lv2: 104, lv3: 113 },
      { name: "힘", lv1: 63, lv2: 69, lv3: 75 },
      { name: "all_skill_dmg", lv1: "+15.2%", lv2: "+16.6%", lv3: "+17.9%" },
    ],
  },
  "응룡 50식 중갑": {
    baseStats: { 방어력: 56, 힘: 87, 의지: 58 },
    uniqueStat: { name: "물리 피해 보너스", value: "+11.5%" },
    forge: [
      { name: "힘", lv1: 95, lv2: 104, lv3: 113 },
      { name: "의지", lv1: 63, lv2: 69, lv3: 75 },
      { name: "물리 피해 보너스", lv1: "+12.7%", lv2: "+13.8%", lv3: "+14.9%" },
    ],
  },

  // ── 조류의 물결 ────────────────────────
  "탁류 화염 절단기": {
    baseStats: { 방어력: 21, 지능: 32, 힘: 21 },
    uniqueStat: { name: "일반 공격 피해 보너스", value: "+27.6%" },
    forge: [
      { name: "지능", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "일반 공격 피해 보너스", lv1: "+30.4%", lv2: "+33.1%", lv3: "+35.9%" },
    ],
  },
  "현하 산소 공급 장치": {
    baseStats: { 방어력: 21, 힘: 32, 의지: 21 },
    uniqueStat: { name: "냉기와 전기 피해 보너스", value: "+23%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "의지", lv1: 23, lv2: 25, lv3: 27 },
      { name: "냉기와 전기 피해 보너스", lv1: "+25.3%", lv2: "+27.6%", lv3: "+29.9%" },
    ],
  },
  "조류의 물결 건틀릿": {
    baseStats: { 방어력: 42, 힘: 65, 의지: 43 },
    uniqueStat: { name: "냉기와 전기 피해 보너스", value: "+19.2%" },
    forge: [
      { name: "힘", lv1: 71, lv2: 78, lv3: 84 },
      { name: "의지", lv1: 47, lv2: 51, lv3: 55 },
      { name: "냉기와 전기 피해 보너스", lv1: "+21.1%", lv2: "+23%", lv3: "+24.9%" },
    ],
  },
  "낙조 경갑": {
    baseStats: { 방어력: 56, 지능: 87, 힘: 58 },
    uniqueStat: { name: "궁극기 충전 효율", value: "+12.3%" },
    forge: [
      { name: "지능", lv1: 95, lv2: 104, lv3: 113 },
      { name: "힘", lv1: 63, lv2: 69, lv3: 75 },
      { name: "궁극기 충전 효율", lv1: "+13.6%", lv2: "+14.8%", lv3: "+16%" },
    ],
  },

  // ── 펄스식 ────────────────────────
  "펄스식 교정기": {
    baseStats: { 방어력: 21, 지능: 41 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+41" },
    forge: [
      { name: "지능", lv1: 45, lv2: 49, lv3: 53 },
      { name: "오리지늄 아츠 강도", lv1: 45, lv2: 49, lv3: 53 },
    ],
  },
  "펄스식 장갑": {
    baseStats: { 방어력: 42, 의지: 65, 지능: 43 },
    uniqueStat: { name: "냉기와 전기 피해 보너스", value: "+19.2%" },
    forge: [
      { name: "의지", lv1: 71, lv2: 78, lv3: 84 },
      { name: "지능", lv1: 47, lv2: 51, lv3: 55 },
      { name: "냉기와 전기 피해 보너스", lv1: "+21.1%", lv2: "+23%", lv3: "+24.9%" },
    ],
  },
  "펄스식 방해 슈트": {
    baseStats: { 방어력: 56, 지능: 87, 의지: 58 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+20" },
    forge: [
      { name: "지능", lv1: 95, lv2: 104, lv3: 113 },
      { name: "의지", lv1: 63, lv2: 69, lv3: 75 },
      { name: "오리지늄 아츠 강도", lv1: 22, lv2: 24, lv3: 27 },
    ],
  },

  // ── M. I. 경찰용 ────────────────────────
  "M. I. 경찰용 단검 · I": {
    baseStats: { 방어력: 21, 의지: 32, 민첩: 21 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "민첩", lv1: 23, lv2: 25, lv3: 27 },
      { name: "배틀 스킬 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "M. I. 경찰용 단검": {
    baseStats: { 방어력: 21, 의지: 32, 지능: 21 },
    uniqueStat: { name: "heat_nat_dmg", value: "+23%" },
    forge: [
      { name: "의지", lv1: 35, lv2: 38, lv3: 41 },
      { name: "지능", lv1: 23, lv2: 25, lv3: 27 },
      { name: "heat_nat_dmg", lv1: "+25.3%", lv2: "+27.6%", lv3: "+29.9%" },
    ],
  },
  "M. I. 경찰용 도구 세트": {
    baseStats: { 방어력: 21, 지능: 32, 민첩: 21 },
    uniqueStat: { name: "치명타 확률", value: "+10.4%" },
    forge: [
      { name: "지능", lv1: 35, lv2: 38, lv3: 41 },
      { name: "민첩", lv1: 23, lv2: 25, lv3: 27 },
      { name: "치명타 확률", lv1: "+11.4%", lv2: "+12.4%", lv3: "+13.5%" },
    ],
  },
  "M. I. 경찰용 조준기": {
    baseStats: { 방어력: 21, 민첩: 32, 힘: 21 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "민첩", lv1: 35, lv2: 38, lv3: 41 },
      { name: "힘", lv1: 23, lv2: 25, lv3: 27 },
      { name: "배틀 스킬 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "M. I. 경찰용 수갑": {
    baseStats: { 방어력: 21, 힘: 32, 의지: 21 },
    uniqueStat: { name: "냉기와 전기 피해 보너스", value: "+41.4%" },
    forge: [
      { name: "힘", lv1: 35, lv2: 38, lv3: 41 },
      { name: "의지", lv1: 23, lv2: 25, lv3: 27 },
      { name: "냉기와 전기 피해 보너스", lv1: "+45.5%", lv2: "+49.7%", lv3: "+53.8%" },
    ],
  },
  "M. I. 경찰용 팔찌 · I": {
    baseStats: { 방어력: 42, 지능: 65, 의지: 43 },
    uniqueStat: { name: "치명타 확률", value: "+8.6%" },
    forge: [
      { name: "지능", lv1: 71, lv2: 78, lv3: 84 },
      { name: "의지", lv1: 47, lv2: 51, lv3: 55 },
      { name: "치명타 확률", lv1: "+9.5%", lv2: "+10.3%", lv3: "+11.2%" },
    ],
  },
  "M. I. 경찰용 팔찌": {
    baseStats: { 방어력: 42, 지능: 65, 민첩: 43 },
    uniqueStat: { name: "일반 공격 피해 보너스", value: "+23%" },
    forge: [
      { name: "지능", lv1: 71, lv2: 78, lv3: 84 },
      { name: "민첩", lv1: 47, lv2: 51, lv3: 55 },
      { name: "일반 공격 피해 보너스", lv1: "+25.3%", lv2: "+27.6%", lv3: "+29.9%" },
    ],
  },
  "M. I. 경찰용 장갑": {
    baseStats: { 방어력: 42, 민첩: 65, 힘: 43 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+34.5%" },
    forge: [
      { name: "민첩", lv1: 71, lv2: 78, lv3: 84 },
      { name: "힘", lv1: 47, lv2: 51, lv3: 55 },
      { name: "배틀 스킬 피해 보너스", lv1: "+38%", lv2: "+41.4%", lv3: "+44.9%" },
    ],
  },
  "M. I. 경찰용 망토 · II": {
    baseStats: { 방어력: 56, 의지: 87, 민첩: 58 },
    uniqueStat: { name: "배틀 스킬 피해 보너스", value: "+20.7%" },
    forge: [
      { name: "의지", lv1: 95, lv2: 104, lv3: 113 },
      { name: "민첩", lv1: 63, lv2: 69, lv3: 75 },
      { name: "배틀 스킬 피해 보너스", lv1: "+22.8%", lv2: "+24.8%", lv3: "+26.9%" },
    ],
  },
  "M. I. 경찰용 망토 · I": {
    baseStats: { 방어력: 56, 지능: 87, 의지: 58 },
    uniqueStat: { name: "치명타 확률", value: "+5.2%" },
    forge: [
      { name: "지능", lv1: 95, lv2: 104, lv3: 113 },
      { name: "의지", lv1: 63, lv2: 69, lv3: 75 },
      { name: "치명타 확률", lv1: "+5.7%", lv2: "+6.2%", lv3: "+6.7%" },
    ],
  },
  "M. I. 경찰용 망토": {
    baseStats: { 방어력: 56, 지능: 87, 민첩: 58 },
    uniqueStat: { name: "일반 공격 피해 보너스", value: "+13.8%" },
    forge: [
      { name: "지능", lv1: 95, lv2: 104, lv3: 113 },
      { name: "민첩", lv1: 63, lv2: 69, lv3: 75 },
      { name: "일반 공격 피해 보너스", lv1: "+15.2%", lv2: "+16.6%", lv3: "+17.9%" },
    ],
  },
  "M. I. 경찰용 방어구": {
    baseStats: { 방어력: 56, 민첩: 87, 힘: 58 },
    uniqueStat: { name: "오리지늄 아츠 강도", value: "+20" },
    forge: [
      { name: "민첩", lv1: 95, lv2: 104, lv3: 113 },
      { name: "힘", lv1: 63, lv2: 69, lv3: 75 },
      { name: "오리지늄 아츠 강도", lv1: 22, lv2: 24, lv3: 27 },
    ],
  },
};

// 계산기 전용 장비 DB 포맷
export const EQUIPMENT_DB = { "개척자 내부식성 장갑": { "name": "개척자 내부식성 장갑", "set": "개척", "slot": "글러브", "isVariant": false, "img": "장비/개척/개척자 내부식성 장갑.png", "base": { "def": 42, "agi": 65, "int": 43 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.345, "forge": [{ "key": "agi", "label": "민첩", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "int", "label": "지능", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.345, "lv1": 0.38, "lv2": 0.414, "lv3": 0.449 }] }, "개척자 방어구 · I": { "name": "개척자 방어구 · I", "set": "개척", "slot": "방어구", "isVariant": true, "img": "장비/개척/개척자 방어구 · I.png", "base": { "def": 56, "str": 87, "agi": 58 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.207, "forge": [{ "key": "str", "label": "힘", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "agi", "label": "민첩", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "개척자 방어구 · II": { "name": "개척자 방어구 · II", "set": "개척", "slot": "방어구", "isVariant": true, "img": "장비/개척/개척자 방어구 · II.png", "base": { "def": 56, "agi": 87, "int": 58 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.207, "forge": [{ "key": "agi", "label": "민첩", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "int", "label": "지능", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "개척자 방어구 · III": { "name": "개척자 방어구 · III", "set": "개척", "slot": "방어구", "isVariant": true, "img": "장비/개척/개척자 방어구 · III.png", "base": { "def": 56, "agi": 87, "int": 58 }, "uniqueKey": "sub_stat_pct", "uniqueVal": 0.104, "forge": [{ "key": "agi", "label": "민첩", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "int", "label": "지능", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "sub_stat_pct", "label": "보조 능력치", "lv0": 0.104, "lv1": 0.114, "lv2": 0.124, "lv3": 0.135 }] }, "개척자 방어구": { "name": "개척자 방어구", "set": "개척", "slot": "방어구", "isVariant": false, "img": "장비/개척/개척자 방어구.png", "base": { "def": 56, "str": 87, "int": 58 }, "uniqueKey": "ult_dmg", "uniqueVal": 0.259, "forge": [{ "key": "str", "label": "힘", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "int", "label": "지능", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "ult_dmg", "label": "궁극기 피해 보너스", "lv0": 0.259, "lv1": 0.285, "lv2": 0.311, "lv3": 0.336 }] }, "개척자 증량 산소 공급 장치": { "name": "개척자 증량 산소 공급 장치", "set": "개척", "slot": "부품", "isVariant": false, "img": "장비/개척/개척자 증량 산소 공급 장치.png", "base": { "def": 21, "agi": 32, "int": 21 }, "uniqueKey": "sub_stat_pct", "uniqueVal": 0.207, "forge": [{ "key": "agi", "label": "민첩", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "int", "label": "지능", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "sub_stat_pct", "label": "보조 능력치", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "개척자 통신기 · I": { "name": "개척자 통신기 · I", "set": "개척", "slot": "부품", "isVariant": true, "img": "장비/개척/개척자 통신기 · I.png", "base": { "def": 21, "str": 32, "int": 21 }, "uniqueKey": "cold_elec_dmg", "uniqueVal": 0.23, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "int", "label": "지능", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "cold_elec_dmg", "label": "냉기와 전기 피해 보너스", "lv0": 0.23, "lv1": 0.253, "lv2": 0.276, "lv3": 0.299 }] }, "개척자 통신기": { "name": "개척자 통신기", "set": "개척", "slot": "부품", "isVariant": false, "img": "장비/개척/개척자 통신기.png", "base": { "def": 21, "str": 32, "agi": 21 }, "uniqueKey": "link_dmg", "uniqueVal": 0.414, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "agi", "label": "민첩", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "홍산 부싯돌": { "name": "홍산 부싯돌", "set": "검술사", "slot": "부품", "isVariant": false, "img": "장비/검술사/홍산 부싯돌.png", "base": { "def": 21, "agi": 32, "str": 21 }, "uniqueKey": "phys_dmg", "uniqueVal": 0.23, "forge": [{ "key": "agi", "label": "민첩", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "phys_dmg", "label": "물리 피해 보너스", "lv0": 0.23, "lv1": 0.253, "lv2": 0.276, "lv3": 0.299 }] }, "홍산 전술 건틀릿": { "name": "홍산 전술 건틀릿", "set": "검술사", "slot": "글러브", "isVariant": false, "img": "장비/검술사/홍산 전술 건틀릿.png", "base": { "def": 42, "agi": 65, "str": 43 }, "uniqueKey": "ult_dmg", "uniqueVal": 0.431, "forge": [{ "key": "agi", "label": "민첩", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "str", "label": "힘", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "ult_dmg", "label": "궁극기 피해 보너스", "lv0": 0.431, "lv1": 0.474, "lv2": 0.517, "lv3": 0.561 }] }, "홍산 전술 장갑": { "name": "홍산 전술 장갑", "set": "검술사", "slot": "글러브", "isVariant": false, "img": "장비/검술사/홍산 전술 장갑.png", "base": { "def": 42, "str": 65, "wil": 43 }, "uniqueKey": "phys_dmg", "uniqueVal": 0.192, "forge": [{ "key": "str", "label": "힘", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "wil", "label": "의지", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "phys_dmg", "label": "물리 피해 보너스", "lv0": 0.192, "lv1": 0.211, "lv2": 0.23, "lv3": 0.249 }] }, "홍산 중장갑": { "name": "홍산 중장갑", "set": "검술사", "slot": "방어구", "isVariant": false, "img": "장비/검술사/홍산 중장갑.png", "base": { "def": 56, "agi": 87, "str": 58 }, "uniqueKey": "arts_power", "uniqueVal": 20.0, "forge": [{ "key": "agi", "label": "민첩", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "str", "label": "힘", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 20.0, "lv1": 22, "lv2": 24, "lv3": 27 }] }, "경량 초자연 글러브": { "name": "경량 초자연 글러브", "set": "경량 초자연", "slot": "글러브", "isVariant": false, "img": "장비/경량 초자연/경량 초자연 글러브.png", "base": { "def": 42, "agi": 65, "str": 43 }, "uniqueKey": "arts_power", "uniqueVal": 34.0, "forge": [{ "key": "agi", "label": "민첩", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "str", "label": "힘", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 34.0, "lv1": 38, "lv2": 41, "lv3": 45 }] }, "경량 초자연 보호판": { "name": "경량 초자연 보호판", "set": "경량 초자연", "slot": "방어구", "isVariant": false, "img": "장비/경량 초자연/경량 초자연 보호판.png", "base": { "def": 56, "str": 87, "wil": 58 }, "uniqueKey": "stagger_target_dmg", "uniqueVal": 0.207, "forge": [{ "key": "str", "label": "힘", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "wil", "label": "의지", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "stagger_target_dmg", "label": "불균형 목표에 주는 피해 보너스", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "경량 초자연 분석 반지": { "name": "경량 초자연 분석 반지", "set": "경량 초자연", "slot": "부품", "isVariant": false, "img": "장비/경량 초자연/경량 초자연 분석 반지.png", "base": { "def": 21, "str": 32, "wil": 21 }, "uniqueKey": "phys_dmg", "uniqueVal": 0.23, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "wil", "label": "의지", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "phys_dmg", "label": "물리 피해 보너스", "lv0": 0.23, "lv1": 0.253, "lv2": 0.276, "lv3": 0.299 }] }, "경량 초자연 안정판": { "name": "경량 초자연 안정판", "set": "경량 초자연", "slot": "부품", "isVariant": false, "img": "장비/경량 초자연/경량 초자연 안정판.png", "base": { "def": 21, "agi": 32, "str": 21 }, "uniqueKey": "arts_power", "uniqueVal": 41.0, "forge": [{ "key": "agi", "label": "민첩", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 41.0, "lv1": 45, "lv2": 49, "lv3": 53 }] }, "본 크러셔 마스크 · I": { "name": "본 크러셔 마스크 · I", "set": "본 크러셔", "slot": "부품", "isVariant": true, "img": "장비/본 크러셔/본 크러셔 마스크 · I.png", "base": { "def": 21, "agi": 32, "str": 21 }, "uniqueKey": "crit_rate", "uniqueVal": 0.104, "forge": [{ "key": "agi", "label": "민첩", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "crit_rate", "label": "치명타 확률", "lv0": 0.104, "lv1": 0.114, "lv2": 0.124, "lv3": 0.135 }] }, "본 크러셔 마스크": { "name": "본 크러셔 마스크", "set": "본 크러셔", "slot": "부품", "isVariant": false, "img": "장비/본 크러셔/본 크러셔 마스크.png", "base": { "def": 21, "agi": 32, "str": 21 }, "uniqueKey": "stagger_target_dmg", "uniqueVal": 0.414, "forge": [{ "key": "agi", "label": "민첩", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "stagger_target_dmg", "label": "불균형 목표에 주는 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "본 크러셔 머플러 · I": { "name": "본 크러셔 머플러 · I", "set": "본 크러셔", "slot": "방어구", "isVariant": true, "img": "장비/본 크러셔/본 크러셔 머플러 · I.png", "base": { "def": 56, "wil": 87, "agi": 58 }, "uniqueKey": "ult_eff", "uniqueVal": 0.123, "forge": [{ "key": "wil", "label": "의지", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "agi", "label": "민첩", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.123, "lv1": 0.136, "lv2": 0.148, "lv3": 0.16 }] }, "본 크러셔 머플러": { "name": "본 크러셔 머플러", "set": "본 크러셔", "slot": "방어구", "isVariant": false, "img": "장비/본 크러셔/본 크러셔 머플러.png", "base": { "def": 56, "wil": 87, "str": 58 }, "uniqueKey": "link_dmg", "uniqueVal": 0.207, "forge": [{ "key": "wil", "label": "의지", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "str", "label": "힘", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "본 크러셔 조각상 · I": { "name": "본 크러셔 조각상 · I", "set": "본 크러셔", "slot": "부품", "isVariant": true, "img": "장비/본 크러셔/본 크러셔 조각상 · I.png", "base": { "def": 21, "wil": 32, "int": 21 }, "uniqueKey": "link_dmg", "uniqueVal": 0.414, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "int", "label": "지능", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "본 크러셔 조각상": { "name": "본 크러셔 조각상", "set": "본 크러셔", "slot": "부품", "isVariant": false, "img": "장비/본 크러셔/본 크러셔 조각상.png", "base": { "def": 21, "wil": 32, "agi": 21 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.414, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "agi", "label": "민첩", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "본 크러셔 중갑 방어구 · I": { "name": "본 크러셔 중갑 방어구 · I", "set": "본 크러셔", "slot": "방어구", "isVariant": true, "img": "장비/본 크러셔/본 크러셔 중갑 방어구 · I.png", "base": { "def": 56, "agi": 87, "str": 58 }, "uniqueKey": "link_dmg", "uniqueVal": 0.207, "forge": [{ "key": "agi", "label": "민첩", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "str", "label": "힘", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "본 크러셔 중갑 방어구": { "name": "본 크러셔 중갑 방어구", "set": "본 크러셔", "slot": "방어구", "isVariant": false, "img": "장비/본 크러셔/본 크러셔 중갑 방어구.png", "base": { "def": 56, "agi": 87, "int": 58 }, "uniqueKey": "ult_eff", "uniqueVal": 0.123, "forge": [{ "key": "agi", "label": "민첩", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "int", "label": "지능", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.123, "lv1": 0.136, "lv2": 0.148, "lv3": 0.16 }] }, "생체 보조 건틀릿": { "name": "생체 보조 건틀릿", "set": "생체 보조", "slot": "글러브", "isVariant": false, "img": "장비/생체 보조/생체 보조 건틀릿.png", "base": { "def": 42, "wil": 65, "str": 43 }, "uniqueKey": "heal_pct", "uniqueVal": 0.173, "forge": [{ "key": "wil", "label": "의지", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "str", "label": "힘", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "heal_pct", "label": "heal_pct", "lv0": 0.173, "lv1": 0.19, "lv2": 0.207, "lv3": 0.224 }] }, "생체 보조 견갑": { "name": "생체 보조 견갑", "set": "생체 보조", "slot": "글러브", "isVariant": false, "img": "장비/생체 보조/생체 보조 견갑.png", "base": { "def": 42, "str": 65, "wil": 43 }, "uniqueKey": "ult_eff", "uniqueVal": 0.205, "forge": [{ "key": "str", "label": "힘", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "wil", "label": "의지", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.205, "lv1": 0.226, "lv2": 0.246, "lv3": 0.267 }] }, "생체 보조 보호 주사기": { "name": "생체 보조 보호 주사기", "set": "생체 보조", "slot": "부품", "isVariant": false, "img": "장비/생체 보조/생체 보조 보호 주사기.png", "base": { "def": 21, "wil": 41 }, "uniqueKey": "heal_pct", "uniqueVal": 0.207, "forge": [{ "key": "wil", "label": "의지", "lv0": 41, "lv1": 45, "lv2": 49, "lv3": 53 }, { "key": "heal_pct", "label": "heal_pct", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "생체 보조 보호판": { "name": "생체 보조 보호판", "set": "생체 보조", "slot": "부품", "isVariant": false, "img": "장비/생체 보조/생체 보조 보호판.png", "base": { "def": 21, "wil": 32, "int": 21 }, "uniqueKey": "main_stat_pct", "uniqueVal": 0.207, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "int", "label": "지능", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "main_stat_pct", "label": "main_stat_pct", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "생체 보조 접속기 · I": { "name": "생체 보조 접속기 · I", "set": "생체 보조", "slot": "부품", "isVariant": true, "img": "장비/생체 보조/생체 보조 접속기 · I.png", "base": { "def": 21, "str": 32, "wil": 21 }, "uniqueKey": "hp", "uniqueVal": 0.414, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "wil", "label": "의지", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "hp_pct", "label": "생명력%", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "생체 보조 접속기": { "name": "생체 보조 접속기", "set": "생체 보조", "slot": "부품", "isVariant": false, "img": "장비/생체 보조/생체 보조 접속기.png", "base": { "def": 21, "str": 32, "wil": 21 }, "uniqueKey": "dmg_reduction", "uniqueVal": 0.172, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "wil", "label": "의지", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "dmg_reduction", "label": "dmg_reduction", "lv0": 0.172, "lv1": 0.185, "lv2": 0.199, "lv3": 0.212 }] }, "생체 보조 중갑": { "name": "생체 보조 중갑", "set": "생체 보조", "slot": "방어구", "isVariant": false, "img": "장비/생체 보조/생체 보조 중갑.png", "base": { "def": 56, "str": 87, "wil": 58 }, "uniqueKey": "heal_pct", "uniqueVal": 0.104, "forge": [{ "key": "str", "label": "힘", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "wil", "label": "의지", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "heal_pct", "label": "heal_pct", "lv0": 0.104, "lv1": 0.114, "lv2": 0.124, "lv3": 0.135 }] }, "생체 보조 흉갑": { "name": "생체 보조 흉갑", "set": "생체 보조", "slot": "방어구", "isVariant": false, "img": "장비/생체 보조/생체 보조 흉갑.png", "base": { "def": 56, "wil": 87, "int": 58 }, "uniqueKey": "heal_pct", "uniqueVal": 0.104, "forge": [{ "key": "wil", "label": "의지", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "int", "label": "지능", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "heal_pct", "label": "heal_pct", "lv0": 0.104, "lv1": 0.114, "lv2": 0.124, "lv3": 0.135 }] }, "식양의 숨결 글러브 · I": { "name": "식양의 숨결 글러브 · I", "set": "식양의 숨결", "slot": "글러브", "isVariant": true, "img": "장비/식양의 숨결/식양의 숨결 글러브 · I.png", "base": { "def": 42, "int": 65, "wil": 43 }, "uniqueKey": "ult_eff", "uniqueVal": 0.205, "forge": [{ "key": "int", "label": "지능", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "wil", "label": "의지", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.205, "lv1": 0.226, "lv2": 0.246, "lv3": 0.267 }] }, "식양의 숨결 글러브": { "name": "식양의 숨결 글러브", "set": "식양의 숨결", "slot": "글러브", "isVariant": false, "img": "장비/식양의 숨결/식양의 숨결 글러브.png", "base": { "def": 42, "int": 65, "str": 43 }, "uniqueKey": "ult_eff", "uniqueVal": 0.205, "forge": [{ "key": "int", "label": "지능", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "str", "label": "힘", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.205, "lv1": 0.226, "lv2": 0.246, "lv3": 0.267 }] }, "식양의 숨결 보조 견갑": { "name": "식양의 숨결 보조 견갑", "set": "식양의 숨결", "slot": "부품", "isVariant": false, "img": "장비/식양의 숨결/식양의 숨결 보조 견갑.png", "base": { "def": 21, "wil": 32, "int": 21 }, "uniqueKey": "ult_eff", "uniqueVal": 0.246, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "int", "label": "지능", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.246, "lv1": 0.271, "lv2": 0.296, "lv3": 0.32 }] }, "식양의 숨결 장갑": { "name": "식양의 숨결 장갑", "set": "식양의 숨결", "slot": "방어구", "isVariant": false, "img": "장비/식양의 숨결/식양의 숨결 장갑.png", "base": { "def": 56, "wil": 87, "int": 58 }, "uniqueKey": "arts_power", "uniqueVal": 20.0, "forge": [{ "key": "wil", "label": "의지", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "int", "label": "지능", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 20.0, "lv1": 22, "lv2": 24, "lv3": 27 }] }, "식양의 숨결 충전 코어 · I": { "name": "식양의 숨결 충전 코어 · I", "set": "식양의 숨결", "slot": "부품", "isVariant": true, "img": "장비/식양의 숨결/식양의 숨결 충전 코어 · I.png", "base": { "def": 21, "int": 32, "wil": 21 }, "uniqueKey": "heal_pct", "uniqueVal": 0.207, "forge": [{ "key": "int", "label": "지능", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "wil", "label": "의지", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "heal_pct", "label": "heal_pct", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "식양의 숨결 충전 코어": { "name": "식양의 숨결 충전 코어", "set": "식양의 숨결", "slot": "부품", "isVariant": false, "img": "장비/식양의 숨결/식양의 숨결 충전 코어.png", "base": { "def": 21, "int": 32, "str": 21 }, "uniqueKey": "ult_eff", "uniqueVal": 0.246, "forge": [{ "key": "int", "label": "지능", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.246, "lv1": 0.271, "lv2": 0.296, "lv3": 0.32 }] }, "열 작업용 강화 골격": { "name": "열 작업용 강화 골격", "set": "열 작업용", "slot": "방어구", "isVariant": false, "img": "장비/열 작업용/열 작업용 강화 골격.png", "base": { "def": 56, "str": 87, "agi": 58 }, "uniqueKey": "heat_nat_dmg", "uniqueVal": 0.115, "forge": [{ "key": "str", "label": "힘", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "agi", "label": "민첩", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "heat_nat_dmg", "label": "heat_nat_dmg", "lv0": 0.115, "lv1": 0.127, "lv2": 0.138, "lv3": 0.149 }] }, "열 작업용 건틀릿 · I": { "name": "열 작업용 건틀릿 · I", "set": "열 작업용", "slot": "글러브", "isVariant": true, "img": "장비/열 작업용/열 작업용 건틀릿 · I.png", "base": { "def": 42, "wil": 65, "int": 43 }, "uniqueKey": "heat_nat_dmg", "uniqueVal": 0.192, "forge": [{ "key": "wil", "label": "의지", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "int", "label": "지능", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "heat_nat_dmg", "label": "heat_nat_dmg", "lv0": 0.192, "lv1": 0.211, "lv2": 0.23, "lv3": 0.249 }] }, "열 작업용 건틀릿": { "name": "열 작업용 건틀릿", "set": "열 작업용", "slot": "글러브", "isVariant": false, "img": "장비/열 작업용/열 작업용 건틀릿.png", "base": { "def": 42, "int": 65, "str": 43 }, "uniqueKey": "heat_nat_dmg", "uniqueVal": 0.192, "forge": [{ "key": "int", "label": "지능", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "str", "label": "힘", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "heat_nat_dmg", "label": "heat_nat_dmg", "lv0": 0.192, "lv1": 0.211, "lv2": 0.23, "lv3": 0.249 }] }, "열 작업용 에너지 저장함": { "name": "열 작업용 에너지 저장함", "set": "열 작업용", "slot": "부품", "isVariant": false, "img": "장비/열 작업용/열 작업용 에너지 저장함.png", "base": { "def": 21, "str": 32, "agi": 21 }, "uniqueKey": "arts_power", "uniqueVal": 41.0, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "agi", "label": "민첩", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 41.0, "lv1": 45, "lv2": 49, "lv3": 53 }] }, "열 작업용 온도 측정기": { "name": "열 작업용 온도 측정기", "set": "열 작업용", "slot": "부품", "isVariant": false, "img": "장비/열 작업용/열 작업용 온도 측정기.png", "base": { "def": 21, "int": 41 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.414, "forge": [{ "key": "int", "label": "지능", "lv0": 41, "lv1": 45, "lv2": 49, "lv3": 53 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "열 작업용 전력 상자": { "name": "열 작업용 전력 상자", "set": "열 작업용", "slot": "부품", "isVariant": false, "img": "장비/열 작업용/열 작업용 전력 상자.png", "base": { "def": 21, "wil": 32, "int": 21 }, "uniqueKey": "arts_power", "uniqueVal": 41.0, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "int", "label": "지능", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 41.0, "lv1": 45, "lv2": 49, "lv3": 53 }] }, "위기 탈출 도장 · I": { "name": "위기 탈출 도장 · I", "set": "위기 탈출", "slot": "부품", "isVariant": true, "img": "장비/위기 탈출/위기 탈출 도장 · I.png", "base": { "def": 21, "wil": 43 }, "uniqueKey": "crit_rate", "uniqueVal": 0.108, "forge": [{ "key": "wil", "label": "의지", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "crit_rate", "label": "치명타 확률", "lv0": 0.108, "lv1": 0.119, "lv2": 0.13, "lv3": 0.14 }] }, "위기 탈출 도장": { "name": "위기 탈출 도장", "set": "위기 탈출", "slot": "부품", "isVariant": false, "img": "장비/위기 탈출/위기 탈출 도장.png", "base": { "def": 21, "int": 43 }, "uniqueKey": "ult_eff", "uniqueVal": 0.257, "forge": [{ "key": "int", "label": "지능", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.257, "lv1": 0.283, "lv2": 0.309, "lv3": 0.334 }] }, "위기 탈출 식별 패널 · I": { "name": "위기 탈출 식별 패널 · I", "set": "위기 탈출", "slot": "부품", "isVariant": true, "img": "장비/위기 탈출/위기 탈출 식별 패널 · I.png", "base": { "def": 21, "agi": 43 }, "uniqueKey": "link_dmg", "uniqueVal": 0.432, "forge": [{ "key": "agi", "label": "민첩", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.432, "lv1": 0.475, "lv2": 0.518, "lv3": 0.562 }] }, "위기 탈출 식별 패널": { "name": "위기 탈출 식별 패널", "set": "위기 탈출", "slot": "부품", "isVariant": false, "img": "장비/위기 탈출/위기 탈출 식별 패널.png", "base": { "def": 21, "str": 43 }, "uniqueKey": "dmg_reduction", "uniqueVal": 0.178, "forge": [{ "key": "str", "label": "힘", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "dmg_reduction", "label": "dmg_reduction", "lv0": 0.178, "lv1": 0.192, "lv2": 0.206, "lv3": 0.219 }] }, "응룡 50식 경갑": { "name": "응룡 50식 경갑", "set": "응룡 50식", "slot": "방어구", "isVariant": false, "img": "장비/응룡 50식/응룡 50식 경갑.png", "base": { "def": 56, "wil": 87, "str": 58 }, "uniqueKey": "all_skill_dmg", "uniqueVal": 0.138, "forge": [{ "key": "wil", "label": "의지", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "str", "label": "힘", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "all_skill_dmg", "label": "all_skill_dmg", "lv0": 0.138, "lv1": 0.152, "lv2": 0.166, "lv3": 0.179 }] }, "응룡 50식 글러브 · I": { "name": "응룡 50식 글러브 · I", "set": "응룡 50식", "slot": "글러브", "isVariant": true, "img": "장비/응룡 50식/응룡 50식 글러브 · I.png", "base": { "def": 42, "wil": 65, "agi": 43 }, "uniqueKey": "link_dmg", "uniqueVal": 0.345, "forge": [{ "key": "wil", "label": "의지", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "agi", "label": "민첩", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.345, "lv1": 0.38, "lv2": 0.414, "lv3": 0.449 }] }, "응룡 50식 글러브": { "name": "응룡 50식 글러브", "set": "응룡 50식", "slot": "글러브", "isVariant": false, "img": "장비/응룡 50식/응룡 50식 글러브.png", "base": { "def": 42, "agi": 65, "int": 43 }, "uniqueKey": "link_dmg", "uniqueVal": 0.345, "forge": [{ "key": "agi", "label": "민첩", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "int", "label": "지능", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.345, "lv1": 0.38, "lv2": 0.414, "lv3": 0.449 }] }, "응룡 50식 단검 · I": { "name": "응룡 50식 단검 · I", "set": "응룡 50식", "slot": "부품", "isVariant": true, "img": "장비/응룡 50식/응룡 50식 단검 · I.png", "base": { "def": 21, "int": 32, "str": 21 }, "uniqueKey": "all_skill_dmg", "uniqueVal": 0.276, "forge": [{ "key": "int", "label": "지능", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "all_skill_dmg", "label": "all_skill_dmg", "lv0": 0.276, "lv1": 0.304, "lv2": 0.331, "lv3": 0.359 }] }, "응룡 50식 단검": { "name": "응룡 50식 단검", "set": "응룡 50식", "slot": "부품", "isVariant": false, "img": "장비/응룡 50식/응룡 50식 단검.png", "base": { "def": 21, "wil": 32, "agi": 21 }, "uniqueKey": "link_dmg", "uniqueVal": 0.414, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "agi", "label": "민첩", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "link_dmg", "label": "연계 스킬 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "응룡 50식 중갑": { "name": "응룡 50식 중갑", "set": "응룡 50식", "slot": "방어구", "isVariant": false, "img": "장비/응룡 50식/응룡 50식 중갑.png", "base": { "def": 56, "str": 87, "wil": 58 }, "uniqueKey": "phys_dmg", "uniqueVal": 0.115, "forge": [{ "key": "str", "label": "힘", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "wil", "label": "의지", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "phys_dmg", "label": "물리 피해 보너스", "lv0": 0.115, "lv1": 0.127, "lv2": 0.138, "lv3": 0.149 }] }, "응룡 50식 탐지기": { "name": "응룡 50식 탐지기", "set": "응룡 50식", "slot": "부품", "isVariant": false, "img": "장비/응룡 50식/응룡 50식 탐지기.png", "base": { "def": 21, "str": 32, "wil": 21 }, "uniqueKey": "phys_dmg", "uniqueVal": 0.23, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "wil", "label": "의지", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "phys_dmg", "label": "물리 피해 보너스", "lv0": 0.23, "lv1": 0.253, "lv2": 0.276, "lv3": 0.299 }] }, "낙조 경갑": { "name": "낙조 경갑", "set": "조류의 물결", "slot": "방어구", "isVariant": false, "img": "장비/조류의 물결/낙조 경갑.png", "base": { "def": 56, "int": 87, "str": 58 }, "uniqueKey": "ult_eff", "uniqueVal": 0.123, "forge": [{ "key": "int", "label": "지능", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "str", "label": "힘", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "ult_eff", "label": "궁극기 충전 효율", "lv0": 0.123, "lv1": 0.136, "lv2": 0.148, "lv3": 0.16 }] }, "조류의 물결 건틀릿": { "name": "조류의 물결 건틀릿", "set": "조류의 물결", "slot": "글러브", "isVariant": false, "img": "장비/조류의 물결/조류의 물결 건틀릿.png", "base": { "def": 42, "str": 65, "wil": 43 }, "uniqueKey": "cold_elec_dmg", "uniqueVal": 0.192, "forge": [{ "key": "str", "label": "힘", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "wil", "label": "의지", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "cold_elec_dmg", "label": "냉기와 전기 피해 보너스", "lv0": 0.192, "lv1": 0.211, "lv2": 0.23, "lv3": 0.249 }] }, "탁류 화염 절단기": { "name": "탁류 화염 절단기", "set": "조류의 물결", "slot": "부품", "isVariant": false, "img": "장비/조류의 물결/탁류 화염 절단기.png", "base": { "def": 21, "int": 32, "str": 21 }, "uniqueKey": "attack_dmg", "uniqueVal": 0.276, "forge": [{ "key": "int", "label": "지능", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "attack_dmg", "label": "일반 공격 피해 보너스", "lv0": 0.276, "lv1": 0.304, "lv2": 0.331, "lv3": 0.359 }] }, "현하 산소 공급 장치": { "name": "현하 산소 공급 장치", "set": "조류의 물결", "slot": "부품", "isVariant": false, "img": "장비/조류의 물결/현하 산소 공급 장치.png", "base": { "def": 21, "str": 32, "wil": 21 }, "uniqueKey": "cold_elec_dmg", "uniqueVal": 0.23, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "wil", "label": "의지", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "cold_elec_dmg", "label": "냉기와 전기 피해 보너스", "lv0": 0.23, "lv1": 0.253, "lv2": 0.276, "lv3": 0.299 }] }, "펄스식 교정기": { "name": "펄스식 교정기", "set": "펄스식", "slot": "부품", "isVariant": false, "img": "장비/펄스식/펄스식 교정기.png", "base": { "def": 21, "int": 41 }, "uniqueKey": "arts_power", "uniqueVal": 41.0, "forge": [{ "key": "int", "label": "지능", "lv0": 41, "lv1": 45, "lv2": 49, "lv3": 53 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 41.0, "lv1": 45, "lv2": 49, "lv3": 53 }] }, "펄스식 방해 슈트": { "name": "펄스식 방해 슈트", "set": "펄스식", "slot": "방어구", "isVariant": false, "img": "장비/펄스식/펄스식 방해 슈트.png", "base": { "def": 56, "int": 87, "wil": 58 }, "uniqueKey": "arts_power", "uniqueVal": 20.0, "forge": [{ "key": "int", "label": "지능", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "wil", "label": "의지", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 20.0, "lv1": 22, "lv2": 24, "lv3": 27 }] }, "펄스식 장갑": { "name": "펄스식 장갑", "set": "펄스식", "slot": "글러브", "isVariant": false, "img": "장비/펄스식/펄스식 장갑.png", "base": { "def": 42, "wil": 65, "int": 43 }, "uniqueKey": "cold_elec_dmg", "uniqueVal": 0.192, "forge": [{ "key": "wil", "label": "의지", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "int", "label": "지능", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "cold_elec_dmg", "label": "냉기와 전기 피해 보너스", "lv0": 0.192, "lv1": 0.211, "lv2": 0.23, "lv3": 0.249 }] }, "M. I. 경찰용 단검 · I": { "name": "M. I. 경찰용 단검 · I", "set": "M. I. 경찰용", "slot": "부품", "isVariant": true, "img": "장비/M. I. 경찰용/M. I. 경찰용 단검 · I.png", "base": { "def": 21, "wil": 32, "agi": 21 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.414, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "agi", "label": "민첩", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "M. I. 경찰용 단검": { "name": "M. I. 경찰용 단검", "set": "M. I. 경찰용", "slot": "부품", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 단검.png", "base": { "def": 21, "wil": 32, "int": 21 }, "uniqueKey": "heat_nat_dmg", "uniqueVal": 0.23, "forge": [{ "key": "wil", "label": "의지", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "int", "label": "지능", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "heat_nat_dmg", "label": "heat_nat_dmg", "lv0": 0.23, "lv1": 0.253, "lv2": 0.276, "lv3": 0.299 }] }, "M. I. 경찰용 도구 세트": { "name": "M. I. 경찰용 도구 세트", "set": "M. I. 경찰용", "slot": "부품", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 도구 세트.png", "base": { "def": 21, "int": 32, "agi": 21 }, "uniqueKey": "crit_rate", "uniqueVal": 0.104, "forge": [{ "key": "int", "label": "지능", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "agi", "label": "민첩", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "crit_rate", "label": "치명타 확률", "lv0": 0.104, "lv1": 0.114, "lv2": 0.124, "lv3": 0.135 }] }, "M. I. 경찰용 망토 · I": { "name": "M. I. 경찰용 망토 · I", "set": "M. I. 경찰용", "slot": "방어구", "isVariant": true, "img": "장비/M. I. 경찰용/M. I. 경찰용 망토 · I.png", "base": { "def": 56, "int": 87, "wil": 58 }, "uniqueKey": "crit_rate", "uniqueVal": 0.052, "forge": [{ "key": "int", "label": "지능", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "wil", "label": "의지", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "crit_rate", "label": "치명타 확률", "lv0": 0.052, "lv1": 0.057, "lv2": 0.062, "lv3": 0.067 }] }, "M. I. 경찰용 망토 · II": { "name": "M. I. 경찰용 망토 · II", "set": "M. I. 경찰용", "slot": "방어구", "isVariant": true, "img": "장비/M. I. 경찰용/M. I. 경찰용 망토 · II.png", "base": { "def": 56, "wil": 87, "agi": 58 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.207, "forge": [{ "key": "wil", "label": "의지", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "agi", "label": "민첩", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.207, "lv1": 0.228, "lv2": 0.248, "lv3": 0.269 }] }, "M. I. 경찰용 망토": { "name": "M. I. 경찰용 망토", "set": "M. I. 경찰용", "slot": "방어구", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 망토.png", "base": { "def": 56, "int": 87, "agi": 58 }, "uniqueKey": "attack_dmg", "uniqueVal": 0.138, "forge": [{ "key": "int", "label": "지능", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "agi", "label": "민첩", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "attack_dmg", "label": "일반 공격 피해 보너스", "lv0": 0.138, "lv1": 0.152, "lv2": 0.166, "lv3": 0.179 }] }, "M. I. 경찰용 방어구": { "name": "M. I. 경찰용 방어구", "set": "M. I. 경찰용", "slot": "방어구", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 방어구.png", "base": { "def": 56, "agi": 87, "str": 58 }, "uniqueKey": "arts_power", "uniqueVal": 20.0, "forge": [{ "key": "agi", "label": "민첩", "lv0": 87, "lv1": 95, "lv2": 104, "lv3": 113 }, { "key": "str", "label": "힘", "lv0": 58, "lv1": 63, "lv2": 69, "lv3": 75 }, { "key": "arts_power", "label": "오리지늄 아츠 강도", "lv0": 20.0, "lv1": 22, "lv2": 24, "lv3": 27 }] }, "M. I. 경찰용 수갑": { "name": "M. I. 경찰용 수갑", "set": "M. I. 경찰용", "slot": "부품", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 수갑.png", "base": { "def": 21, "str": 32, "wil": 21 }, "uniqueKey": "cold_elec_dmg", "uniqueVal": 0.414, "forge": [{ "key": "str", "label": "힘", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "wil", "label": "의지", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "cold_elec_dmg", "label": "냉기와 전기 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "M. I. 경찰용 장갑": { "name": "M. I. 경찰용 장갑", "set": "M. I. 경찰용", "slot": "글러브", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 장갑.png", "base": { "def": 42, "agi": 65, "str": 43 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.345, "forge": [{ "key": "agi", "label": "민첩", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "str", "label": "힘", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.345, "lv1": 0.38, "lv2": 0.414, "lv3": 0.449 }] }, "M. I. 경찰용 조준기": { "name": "M. I. 경찰용 조준기", "set": "M. I. 경찰용", "slot": "부품", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 조준기.png", "base": { "def": 21, "agi": 32, "str": 21 }, "uniqueKey": "skill_dmg", "uniqueVal": 0.414, "forge": [{ "key": "agi", "label": "민첩", "lv0": 32, "lv1": 35, "lv2": 38, "lv3": 41 }, { "key": "str", "label": "힘", "lv0": 21, "lv1": 23, "lv2": 25, "lv3": 27 }, { "key": "skill_dmg", "label": "배틀 스킬 피해 보너스", "lv0": 0.414, "lv1": 0.455, "lv2": 0.497, "lv3": 0.538 }] }, "M. I. 경찰용 팔찌 · I": { "name": "M. I. 경찰용 팔찌 · I", "set": "M. I. 경찰용", "slot": "글러브", "isVariant": true, "img": "장비/M. I. 경찰용/M. I. 경찰용 팔찌 · I.png", "base": { "def": 42, "int": 65, "wil": 43 }, "uniqueKey": "crit_rate", "uniqueVal": 0.086, "forge": [{ "key": "int", "label": "지능", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "wil", "label": "의지", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "crit_rate", "label": "치명타 확률", "lv0": 0.086, "lv1": 0.095, "lv2": 0.103, "lv3": 0.112 }] }, "M. I. 경찰용 팔찌": { "name": "M. I. 경찰용 팔찌", "set": "M. I. 경찰용", "slot": "글러브", "isVariant": false, "img": "장비/M. I. 경찰용/M. I. 경찰용 팔찌.png", "base": { "def": 42, "int": 65, "agi": 43 }, "uniqueKey": "attack_dmg", "uniqueVal": 0.23, "forge": [{ "key": "int", "label": "지능", "lv0": 65, "lv1": 71, "lv2": 78, "lv3": 84 }, { "key": "agi", "label": "민첩", "lv0": 43, "lv1": 47, "lv2": 51, "lv3": 55 }, { "key": "attack_dmg", "label": "일반 공격 피해 보너스", "lv0": 0.23, "lv1": 0.253, "lv2": 0.276, "lv3": 0.299 }] } };

// 세트 보너스 수치 효과 (계산기 전용)
export const SET_BONUS_EFFECTS = {
    '개척': { link_cd_reduce: 0.15 },
    '검술사': { stagger_eff: 0.20 },
    '경량 초자연': { atk_pct: 0.08 },
    '본 크러셔': { atk_pct: 0.15 },
    '생체 보조': { heal_eff: 0.20 },
    '식양의 숨결': { hp: 1000 },
    '응룡 50식': { atk_pct: 0.15 },
    '조류의 물결': { all_skill_dmg: 0.20 },
    '펄스식': { arts_power: 30 },
    '열 작업용': { arts_power: 30 },
    'M. I. 경찰용': { crit_rate: 0.05 },
  };

// 슬롯별 장비 목록 (EQUIPMENT_DB에서 자동 생성)
export const EQ_BY_SLOT = Object.values(EQUIPMENT_DB).reduce((acc, item) => {
  const slot = item.slot;
  if (!acc[slot]) acc[slot] = [];
  acc[slot].push(item);
  return acc;
}, {});
