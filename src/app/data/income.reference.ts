import { IValueOption } from '@btas/common/value-option';


export const MAX = 'Max';
export const MIN = 'Min';
export const SPECIFIC_FIGURE = 'Specific figure';

export type IncomeDrawn = 'Max' | 'Min' | 'Specific figure';

export const IncomeDrawnOptions: Array<IValueOption<string>> = [
  {
    title: MAX,
    value: MAX
  },
  {
    title: MIN,
    value: MIN
  },
  {
    title: SPECIFIC_FIGURE,
    value: SPECIFIC_FIGURE
  }
];
