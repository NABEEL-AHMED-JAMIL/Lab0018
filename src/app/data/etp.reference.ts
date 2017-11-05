import { IValueOption } from '@btas/common/value-option';


export const GRATUITY = 'A gratuity or golden handshake';
export const SEVERANCE_PAYMENT = 'Severance payment';
export const SICK_LEAVE = 'Unused sick leave';
export const ROSTERED_DAYOFF = 'Unused rostered days off';
export const PAYMENT_LIEUNOTICE = 'Payment in lieu of notice';
export const COMPENSATION_WRONGFULDISMISSAL = 'Compensation for wrongful dismissal';

export type EtpType =
  'A gratuity or golden handshake' | 'Severance payment' | 'Unused sick leave' |
  'Unused rostered days off' | 'Payment in lieu of notice' | 'Compensation for wrongful dismissal';

export const EtpTypeOptions: Array<IValueOption<string>> = [
  {
    title: GRATUITY,
    value: GRATUITY,
  },
  {
    title: SEVERANCE_PAYMENT,
    value: SEVERANCE_PAYMENT,
  },
  {
    title: SICK_LEAVE,
    value: SICK_LEAVE,
  },
  {
    title: ROSTERED_DAYOFF,
    value: ROSTERED_DAYOFF,
  },
  {
    title: PAYMENT_LIEUNOTICE,
    value: PAYMENT_LIEUNOTICE,
  },
  {
    title: COMPENSATION_WRONGFULDISMISSAL,
    value: COMPENSATION_WRONGFULDISMISSAL,
  }
];

export const SALARYWAGES = 'Salary/wages for work already completed';
export const UNUSED_ANNUALLEAVE = 'Unused annual leave';
export const UNUSED_LONGSERVICELEAVE = 'Unused long service leave';
export const PAYMENTS_RESTRAINTTRADE = 'Payments for restraint of trade';
export const COMPENSATION_PERSONALINJURY = 'Compensation for personal injury';

export type NonEtpType =
  'Salary/wages for work already completed' | 'Unused annual leave' | 'Unused long service leave' |
  'Payments for restraint of trade' | 'Compensation for personal injury';

export const NonEtpTypeOptions: Array<IValueOption<string>> = [
  {
    title: SALARYWAGES,
    value: SALARYWAGES,
  },
  {
    title: UNUSED_ANNUALLEAVE,
    value: UNUSED_ANNUALLEAVE,
  },
  {
    title: UNUSED_LONGSERVICELEAVE,
    value: UNUSED_LONGSERVICELEAVE,
  },
  {
    title: PAYMENTS_RESTRAINTTRADE,
    value: PAYMENTS_RESTRAINTTRADE,
  },
  {
    title: COMPENSATION_PERSONALINJURY,
    value: COMPENSATION_PERSONALINJURY,
  }
];
