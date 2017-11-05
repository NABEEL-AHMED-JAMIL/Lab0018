import { IValueOption } from '@btas/common/value-option';


export const ORTHODONTIST = 'Orthodontist';
export const STATISTICIAN = 'Statistician';
export const NURSE = 'Nurse';

export type Occupation = 'Orthodontist' | 'Statistician' | 'Nurse';

export const OccupationOptions: Array<IValueOption<string>> = [
  {
    title: ORTHODONTIST,
    value: ORTHODONTIST
  },
  {
    title: STATISTICIAN,
    value: STATISTICIAN
  },
  {
    title: NURSE,
    value: NURSE
  }
];
