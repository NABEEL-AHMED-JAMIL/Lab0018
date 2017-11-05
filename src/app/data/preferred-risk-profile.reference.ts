import { IValueOption } from '@btas/common/value-option';


export const HIGH_GROWTH = 'High Growth';
export const GROWTH = 'Growth';
export const BALANCED = 'Balanced';
export const MODERATE = 'Moderate';
export const DEFENSIVE = 'Defensive';
export const CASH_ONLY = 'Cash Only';

export type PreferredRiskProfileType =
  'High Growth' | 'Growth' | 'Balanced'
  | 'Moderate' | 'Defensive' | 'Cash Only';

export const PreferredRiskProfileTypeOptions: Array<IValueOption<string>> = [
  {
    title: HIGH_GROWTH,
    value: HIGH_GROWTH
  },
  {
    title: GROWTH,
    value: GROWTH,
  },
  {
    title: BALANCED,
    value: BALANCED
  },
  {
    title: MODERATE,
    value: MODERATE
  },
  {
    title: DEFENSIVE,
    value: DEFENSIVE
  },
  {
    title: CASH_ONLY,
    value: CASH_ONLY
  }
];
