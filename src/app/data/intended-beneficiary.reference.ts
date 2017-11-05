import { IValueOption } from '@btas/common/value-option';


export const CUSTOMER = 'Customer(s)';
export const DEPENDENT = 'Dependent(s)';
export const OTHER = 'Other';

export type IntendedBeneficiary =
  'Customer(s)' | 'Dependent(s)' | 'Other';

export const IntendedBeneficiaryOptions: Array<IValueOption<string>> = [
  {
    title: CUSTOMER,
    value: CUSTOMER
  },
  {
    title: DEPENDENT,
    value: DEPENDENT,
  },
  {
    title: OTHER,
    value: OTHER
  }
];
