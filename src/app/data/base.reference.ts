import { IValueOption } from '@btas/common/value-option';

export const PLEASE_SELECT = 'Please Select';

// boolean
export const YES = 'Yes';
export const NO = 'No';
export const UNSURE = 'UNSURE';

export type YesNo = 'Yes' | 'No';

export const YesNoOptions: Array<IValueOption<boolean>> = [
  {
    title: YES,
    value: true
  },
  {
    title: NO,
    value: false
  }
];

// gender
export type Gender = 'M' | 'F';

export const MALE: Gender = 'M';
export const FEMALE: Gender = 'F';
export const GenderOptions: Array<IValueOption<Gender>> = [
  {
    title: MALE,
    value: MALE
  },
  {
    title: FEMALE,
    value: FEMALE
  }
];

// frequency
export const WEEKLY = 'Weekly';
export const FORTNIGHTLY = 'Fortnightly';
export const MONTHLY = 'Monthly';
export const QUARTERLY = 'Quarterly';
export const BI_ANNUALLY = 'Bi-Annually';
export const ANNUALLY = 'Annually';
export const OTHER = 'Other';

export type Frequency =
  'Weekly' | 'Fortnightly' | 'Monthly' | 'Quarterly'
  | 'Bi-Annual' | 'Annual' | 'Other';

export const FrequencyOptions: Array<IValueOption<string>> = [
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
    title: QUARTERLY,
    value: QUARTERLY
  },
  {
    title: BI_ANNUALLY,
    value: BI_ANNUALLY
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


// 3rd party relationships
export const FAMILY_MEMBER = 'Family Member';
export const NEXT_OF_KIN = 'Next of Kin';
export const ACCOUNTANT_TAX_AGENT = 'Accountant/Tax Agent';
export const BANKER = 'Banker';
export const SOLICITOR = 'Solicitor';
export const DOCTOR = 'Doctor';

export type Relationship =
  'Family member' | 'Next of kin' | 'Accountant/Tax agent' | 'Banker'
  | 'Solicitor' | 'Doctor' | 'Other';

export const RelationshipOptions: Array<IValueOption<string>> = [
  {
    title: FAMILY_MEMBER,
    value: FAMILY_MEMBER
  },
  {
    title: NEXT_OF_KIN,
    value: NEXT_OF_KIN
  },
  {
    title: ACCOUNTANT_TAX_AGENT,
    value: ACCOUNTANT_TAX_AGENT
  },
  {
    title: BANKER,
    value: BANKER
  },
  {
    title: SOLICITOR,
    value: SOLICITOR
  },
  {
    title: DOCTOR,
    value: DOCTOR
  },
  {
    title: OTHER,
    value: OTHER
  }
];


export const BRANCH_IDENTIFIED = 'Branch Identified';
export const NON_BRANCH_IDENTIFIED = 'Non-Branch Identified';
export const NOT_IDENTIFIED = 'Not Identified';

export type AMLIdentification =
  'Branch Identified' | 'Non-Branch Identified' | 'Not Identified';

export const AMLIdentificationOptions: Array<IValueOption<string>> = [
  {
    title: BRANCH_IDENTIFIED,
    value: BRANCH_IDENTIFIED
  },
  {
    title: NON_BRANCH_IDENTIFIED,
    value: NON_BRANCH_IDENTIFIED
  },
  {
    title: NOT_IDENTIFIED,
    value: NOT_IDENTIFIED
  }
];


export const BEFORE_TAX = 'Before Tax';
export const AFTER_TAX = 'After Tax';

export type BeforeAfterTax = 'Before Tax' | 'After Tax';

export const BeforeAfterTaxOptions: Array<IValueOption<string>> = [
  {
    title: BEFORE_TAX,
    value: BEFORE_TAX
  },
  {
    title: AFTER_TAX,
    value: AFTER_TAX
  }
];


export const HOME = 'Home';
export const WORK = 'Work';
export const MOBILE = 'Mobile';

export type ContactMethod = 'Home' | 'Work' | 'Mobile';

export const ContactMethodOptions: Array<IValueOption<string>> = [
  {
    title: HOME,
    value: HOME
  },
  {
    title: WORK,
    value: WORK
  },
  {
    title: MOBILE,
    value: MOBILE
  }
];


export const ENDURING = 'Enduring';
export const MEDICAL = 'Medical';
export const GENERAL = 'General';

export type PowerOfAttorneyType = 'Enduring' | 'Medical' | 'General' | 'Other';

export const PowerOfAttorneyTypeOptions: Array<IValueOption<string>> = [
  {
    title: ENDURING,
    value: ENDURING
  },
  {
    title: MEDICAL,
    value: MEDICAL
  },
  {
    title: GENERAL,
    value: GENERAL
  }
];
