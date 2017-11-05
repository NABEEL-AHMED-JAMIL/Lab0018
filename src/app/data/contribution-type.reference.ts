import { IValueOption } from '@btas/common/value-option';


export type ContributionType = 'Concessional' | 'Non Concessional';

export const CONCESSIONAL = 'Concessional';
export const NON_CONCESSIONAL = 'Non Concessional';

export const ContributionTypeOptions: Array<IValueOption<ContributionType>> = [
  {
    title: CONCESSIONAL,
    value: CONCESSIONAL
  },
  {
    title: NON_CONCESSIONAL,
    value: NON_CONCESSIONAL
  }
];
