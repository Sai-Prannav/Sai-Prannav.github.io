// Simplified client-side port of HeartBridge's triage rule engine.
// Source: heartbridge/backend/src/core/triage.js (THRESHOLDS at lines 35-56, rules at lines 154-211).
// Subset ported: 24 h and 7-day weight change, breathlessness, orthopnea, PND, leg swelling,
// chest pain, fainting, new confusion, dizziness, missed diuretic days.
// Not ported: SpO2, blood pressure, heart rate, COPD, dry-weight, slow-creep and skipped-day rules.
// Threshold values and flag text are copied verbatim from the source.

export type Tier = 'GREEN' | 'YELLOW' | 'RED';
export interface Flag { tier: 'RED' | 'YELLOW'; code: string; text: string }
export interface Answers {
  d24: number; d7: number;
  breath: 'normal' | 'exertion' | 'rest';
  swelling: 'none' | 'mild' | 'worse';
  orthopnea: boolean; pnd: boolean; chestPain: boolean; fainting: boolean; confusion: boolean; dizzy: boolean;
  missedDiureticDays: number;
}

export const THRESHOLDS = {
  gain24hLb: 2,
  gain7dLb: 5,
  lossDehydrationLb: 3,
  weightDropLb: 5,
  missedDiureticDays: 2,
} as const;

export function triage(a: Answers): { tier: Tier; flags: Flag[]; advice: string[] } {
  const flags: Flag[] = [];
  const advice = new Set<string>();
  const flag = (tier: 'RED' | 'YELLOW', code: string, text: string) => flags.push({ tier, code, text });
  const { d24, d7, breath, orthopnea, pnd, swelling, chestPain, fainting, confusion, dizzy, missedDiureticDays } = a;

  // ---- RED: emergency, patient told to call 911 ----
  if (chestPain) flag('RED', 'chest_pain', 'Chest pain or pressure');
  if (breath === 'rest') flag('RED', 'sob_rest', 'Short of breath at rest');
  if (confusion) flag('RED', 'confusion', 'New confusion');
  if (fainting) flag('RED', 'syncope', 'Fainted / passed out');

  // ---- YELLOW: nurse callback today ----
  if (d24 >= THRESHOLDS.gain24hLb) flag('YELLOW', 'weight_24h', `Weight up ${d24} lb in 24h (≥ ${THRESHOLDS.gain24hLb})`);
  if (d7 >= THRESHOLDS.gain7dLb) flag('YELLOW', 'weight_7d', `Weight up ${d7} lb in 7 days (≥ ${THRESHOLDS.gain7dLb})`);
  if (orthopnea) flag('YELLOW', 'orthopnea', 'Needs more pillows / sleeps propped up');
  if (pnd) flag('YELLOW', 'pnd', 'Woke up at night short of breath (PND)');
  if (swelling === 'worse') flag('YELLOW', 'edema_worse', 'Leg/ankle swelling getting worse');
  if (missedDiureticDays >= THRESHOLDS.missedDiureticDays) flag('YELLOW', 'missed_diuretic', `Missed diuretic ${missedDiureticDays} days in a row`);

  // Judgment rules: a symptom that is mild alone but concerning in context.
  const fluidSigns = flags.some((f) => ['weight_24h', 'weight_7d', 'edema_worse', 'orthopnea', 'pnd'].includes(f.code));
  if (breath === 'exertion') {
    if (fluidSigns) flag('YELLOW', 'sob_exertion_fluid', 'More breathless with activity + signs of fluid build-up');
    else advice.add('pace_activity');
  }
  if (dizzy) {
    // Dizziness + weight dropping fast suggests over-diuresis / low blood pressure.
    if (d24 <= -THRESHOLDS.lossDehydrationLb) flag('YELLOW', 'dizzy_dehydration', `Dizzy with weight down ${Math.abs(d24)} lb in 24h (possible over-diuresis)`);
    else advice.add('stand_slowly');
  }
  // A big drop on its own (not already explained by the dizzy rule above).
  if (d24 <= -THRESHOLDS.weightDropLb && !flags.some((f) => f.code === 'dizzy_dehydration'))
    flag('YELLOW', 'weight_drop', `Weight down ${Math.abs(d24)} lb in 24h (possible over-diuresis, or check the scale reading)`);

  const tier: Tier = flags.some((f) => f.tier === 'RED') ? 'RED' : flags.length ? 'YELLOW' : 'GREEN';
  return { tier, flags, advice: [...advice] };
}
