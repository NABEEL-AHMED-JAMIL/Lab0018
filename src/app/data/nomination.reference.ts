import { IValueOption } from '@btas/common/value-option';


export const LAPSING = 'Binding (Lapsing)';
export const NON_LAPSING = 'Binding (Non-Lapsing)';
export const NON_BINDING = 'Non-Binding';
export const REVERSIONARY = 'Reversionary (Pension Only)';
export const NONE = 'None';

export type NominationType =
  'Binding (Lapsing)' | 'Binding (Non-Lapsing)' | 'Non-Binding'
  | 'Reversionary (Pension Only)' | 'None';

export const NominationTypeOptions: Array<IValueOption<string>> = [
  {
    title: LAPSING,
    value: LAPSING
  },
  {
    title: NON_LAPSING,
    value: NON_LAPSING,
  },
  {
    title: NON_BINDING,
    value: NON_BINDING
  },
  {
    title: REVERSIONARY,
    value: REVERSIONARY
  },
  {
    title: NONE,
    value: NONE
  }
];
