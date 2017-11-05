import { IValueOption } from '@btas/common/value-option';
import {
  WEEKLY, FORTNIGHTLY, MONTHLY, ANNUALLY, OTHER,
  YesNo, YES, NO, UNSURE
} from './base.reference';


export const FULL_TIME = 'Full-Time';
export const PART_TIME = 'Part-Time';
export const CONTRACTOR = 'Contractor';
export const SELF_EMPLOYED = 'Self-Employed';
export const RETIRED = 'Retired';
export const NOT_WORKING = 'Not Working';
export const HOME_DUTIES = 'Home Duties';

export type EmploymentStatus =
  'Full-Time' | 'Part-Time' | 'Contractor' | 'Self-Employed'
  | 'Retired' | 'Not Working' | 'Home Duties';

export const EmploymentStatusOptions: Array<IValueOption<string>> = [
  {
    title: FULL_TIME,
    value: FULL_TIME
  },
  {
    title: PART_TIME,
    value: PART_TIME
  },
  {
    title: CONTRACTOR,
    value: CONTRACTOR
  },
  {
    title: SELF_EMPLOYED,
    value: SELF_EMPLOYED
  },
  {
    title: RETIRED,
    value: RETIRED
  },
  {
    title: NOT_WORKING,
    value: NOT_WORKING
  },
  {
    title: HOME_DUTIES,
    value: HOME_DUTIES
  }
];

export const WorkingHourFrequencyOptions: Array<IValueOption<string>> = [
  {
    title: WEEKLY,
    value: WEEKLY
  },
  {
    title: FORTNIGHTLY,
    value: FORTNIGHTLY
  },
  {
    title: MONTHLY,
    value: MONTHLY
  },
  {
    title: ANNUALLY,
    value: ANNUALLY
  },
  {
    title: OTHER,
    value: OTHER
  }
];


export const SOLE_TRADER = 'Sole Trader';
export const PARTNERSHIP = 'Partnership';
export const COMPANY = 'Company';
export const TRUST = 'Trust';

export type SelfEmployedBusinessStructure =
  'Sole Trader' | 'Partnership' | 'Company' | 'Trust';

export const SelfEmployedBusinessStructureOptions: Array<IValueOption<string>> = [
  {
    title: SOLE_TRADER,
    value: SOLE_TRADER
  },
  {
    title: PARTNERSHIP,
    value: PARTNERSHIP
  },
  {
    title: COMPANY,
    value: COMPANY
  },
  {
    title: TRUST,
    value: TRUST
  }
];


export type SalaryPackagingPermission = YesNo | 'Unsure';
export const SalaryPackagingPermissionOptions: Array<IValueOption<string>> = [
  {
    title: YES,
    value: YES
  },
  {
    title: NO,
    value: NO
  },
  {
    title: UNSURE,
    value: UNSURE
  }
];
