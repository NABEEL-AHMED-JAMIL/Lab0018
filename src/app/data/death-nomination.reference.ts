import { IValueOption } from '@btas/common/value-option';


export const YES = 'Yes';
export const NO = 'No';
export const NOT_APPLICABLE = 'Not Applicable';

export type NominationPermission =
  'Yes' | 'No' | 'Not Applicable';

export const NominationPermissionOptions: Array<IValueOption<string>> = [
  {
    title: YES,
    value: YES
  },
  {
    title: NO,
    value: NO,
  },
  {
    title: NOT_APPLICABLE,
    value: NOT_APPLICABLE
  }
];
