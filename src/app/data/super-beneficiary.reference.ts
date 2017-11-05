import { IValueOption } from '@btas/common/value-option';


export const MY_PARTNER = 'My Partner';
export const MY_CHILDREN = 'My children';
export const OTHER = 'Other';
export const MY_ESTATE = 'My estate (distribute as per Will)';
export const NOT_SURE = 'Not sure';

export type SuperBeneficiary =
  'My Partner' | 'My children' | 'Other' | 'My estate (distribute as per Will)' | 'Not sure';

export const SuperBeneficiaryOptions: Array<IValueOption<string>> = [
  {
    title: MY_PARTNER,
    value: MY_PARTNER
  },
  {
    title: MY_CHILDREN,
    value: MY_CHILDREN,
  },
  {
    title: OTHER,
    value: OTHER
  },
  {
    title: MY_ESTATE,
    value: MY_ESTATE
  },
  {
    title: NOT_SURE,
    value: NOT_SURE
  }
];
