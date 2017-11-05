import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';

import { L } from '@btas/lang';

import {
  IClient,
  IClientKeyInfo,
  IClientOtherInfo,
  IClientContactInfo,
  IClientEmployment,
  IClientIdentification,
  IClientThirdParty
} from '@btas/models/client';
import { IAddress } from '@btas/common/address';

import {
  HealthStatusOptions,
  PrivateHealthCoverOptions
} from '@data/health-status.reference';
import {
  EmploymentStatusOptions,
  WorkingHourFrequencyOptions,
  SelfEmployedBusinessStructureOptions,
  SalaryPackagingPermissionOptions
} from '@data/employment.reference';
import { OccupationOptions } from '@data/occupation.reference';
import {
  FrequencyOptions, RelationshipOptions,
  AMLIdentificationOptions,
  BeforeAfterTaxOptions,
  ContactMethodOptions
} from '@data/base.reference';

import * as uuid from 'uuid/v4';


export const CLIENT_TYPES = [
  {
    name: 'primary',
    text: L('Primary Client')
  },
  {
    name: 'partner',
    text: 'Partner'
  }
];


export const CLIENT_KEYINFO_DEF = <IGroupPanelItem> {
  title: L('Key Information'),
  subtitle: L(''),
  summary: [
    {
      name: 'fullName',
      title: L('Client'),
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'type',
      title: L('Type'),
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'customerKey',
      title: L('Customer Key'),
      type: 'text:number'
    },
    {
      name: 'title',
      title: L('Title'),
      type: 'text'
    },
    {
      name: 'surname',
      title: L('Surname'),
      type: 'text'
    },
    {
      name: 'givenName',
      title: L('Given Name'),
      type: 'text'
    },
    {
      name: 'preferredName',
      title: L('Preferred Name'),
      type: 'input:text'
    },
    {
      name: 'gender',
      title: L('Gender'),
      type: 'text'
    },
    {
      name: 'maritalStatus',
      title: L('Marital Status'),
      type: 'text'
    },
    {
      name: 'dateOfBirth',
      title: L('Date of Birth'),
      type: 'text'
    },
    {
      name: 'age',
      title: L('Age'),
      type: 'text:number'
    },
    {
      name: 'relationship',
      title: L('Relationship'),
      type: 'text'
    }
  ]
};


export const CLIENT_OTHERINFO_DEF = <IGroupPanelItem> {
  title: L('Other Info'),
  subtitle: L(''),
  summary: [
    {
      name: 'fullName',
      title: L(''),
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'healthStatus',
      title: L('What Is Your Health Status?'),
      type: 'select',
      options: HealthStatusOptions
    },
    {
      name: 'poorDetails',
      title: L(`If 'Poor', please provide details`),
      type: 'textarea',
      hideWhen: "healthStatus != 'Poor'"
    },
    {
      name: 'pursuit',
      title: L('Are you involved in any hazardous persuits?'),
      type: 'checkbox'
    },
    {
      name: 'pursuitDetails',
      title: L(`If 'Yes', please provide details`),
      type: 'textarea',
      hideWhen: '!pursuit'
    },
    {
      name: 'smoker',
      title: L('Are You A Smoker, Or Have You Smoked In The Last 12 Months?'),
      type: 'checkbox'
    },
    {
      name: 'healthCover',
      title: L('Do You Have Private Health Cover?'),
      type: 'checkbox'
    },
    {
      name: 'healthCoverType',
      title: L(`If 'Yes', what type?`),
      type: 'select',
      options: PrivateHealthCoverOptions,
      hideWhen: '!healthCover'
    },
    {
      name: 'consideration',
      title: L(`Do you have any environmental, social or ethical considerations
that need to be taken into account in order to understand your needs,
objectives and financial situation?`),
      type: 'checkbox'
    },
    {
      name: 'considerationDetails',
      title: L(`If 'Yes', please provide details.`),
      type: 'textarea',
      hideWhen: '!consideration'
    },
    {
      name: 'healthIssue',
      title: L(`Do You Have Any Health Issues That Might Affect Your Timeframe For Investment,
Or An Application For Life Insurance?`),
      type: 'checkbox'
    },
    {
      name: 'healthIssueDetails',
      title: L(`If 'Yes', please provide details.`),
      type: 'textarea',
      hideWhen: '!healthIssue'
    }
  ]
};

export const CLIENT_CONTACTINFO_DEF = <IGroupPanelItem> {
  title: L('Contacts'),
  subtitle: L(''),
  summary: [
    {
      name: 'fullName',
      title: L(''),
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'residentialAddress',
      title: L('Residential Address'),
      type: 'address'
    },
    {
      name: 'postalAddressSameAsResidential',
      title: L('Postal address the same as residential?'),
      type: 'checkbox'
    },
    {
      name: 'postalAddress',
      title: L('Postal Address'),
      type: 'address'
    },
    {
      name: 'postalAddressPO',
      title: L('Is this a PO Box postal address?'),
      type: 'checkbox'
    },
    {
      name: 'homePhone',
      title: L('Phone Number (Home)'),
      type: 'input:phone'
    },
    {
      name: 'businessPhone',
      title: L('Phone Number (Business)'),
      type: 'input:phone'
    },
    {
      name: 'mobile',
      title: L('Mobile Number'),
      type: 'input:phone'
    },
    {
      name: 'email',
      title: L('Email Address'),
      type: 'input:email'
    },
    {
      name: 'preferredContactMethod',
      title: L('Preferred Contact Method'),
      type: 'select',
      options: ContactMethodOptions
    }
  ]
};

export const CLIENT_EMPLOYMENTINFO_DEF = <IGroupPanelItem> {
  title: L('Employment'),
  subtitle: L(''),
  summary: [
    {
      name: 'fullName',
      title: L(''),
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'employmentStatus',
      title: L('What is your employment status?'),
      type: 'select',
      options: EmploymentStatusOptions
    },
    {
      name: 'preservationAge',
      title: L('Preservation Age'),
      type: 'input:number'
    },
    {
      name: 'retirementAge',
      title: L('At what age do you plan to retire? '),
      type: 'input:number',
      hideWhen: "employmentStatus == 'Retired'"
    },
    {
      name: 'yearsToRetirement',
      title: L('Years to retirement'),
      type: 'input:number'
    },
    {
      name: 'occupation',
      title: L('Occupation'),
      type: 'select',
      options: OccupationOptions,
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'salary',
      title: L('Salary / Income (excluding SG)'),
      type: 'input:money'
    },
    {
      name: 'frequency',
      title: L('Frequency'),
      type: 'select',
      options: FrequencyOptions,
      hideWhen: "salary > '0'"
    },
    {
      name: 'beforeOrAfterTax',
      title: L('Before/After Tax'),
      type: 'radio',
      options: BeforeAfterTaxOptions,
      hideWhen: "salary > '0'"
    },
    {
      name: 'annualIncomeBeforeTax',
      title: L('Before tax annual income'),
      type: 'input:money'
    },
    {
      name: 'workingHours',
      title: L('How many hours do you work?'),
      type: 'input:number'
    },
    {
      name: 'workingHoursFrequency',
      title: L('Frequency of hours worked'),
      type: 'select',
      options: WorkingHourFrequencyOptions
    },
    {
      name: 'plannedChanges',
      title: L('Are there any planned changes to your occupation?'),
      type: 'radio'
    },
    {
      name: 'occupationChangesDetails',
      title: L('If Yes, give details'),
      type: 'textarea',
      hideWhen: '!plannedChanges'
    },
    {
      name: 'employerName',
      title: L(`Employer's name`),
      type: 'input',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'employerPhone',
      title: L(`Employer's phone`),
      type: 'input:number',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'employerAddress',
      title: L(`Employer's address`),
      type: 'address',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'startDate',
      title: L('Start date with employer'),
      type: 'date',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'employerSuperGuarantee',
      title: L('How much do you receive as Employer Super Guarantee?'),
      type: 'input:percentage'
    },
    {
      name: 'participateSalaryPackaging',
      title: L('Do you participate in salary packaging?'),
      type: 'checkbox',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'salaryPackagingAvailable',
      title: L('Does your employer allow you to salary package?'),
      type: 'select',
      options: SalaryPackagingPermissionOptions,
      hideWhen: 'participateSalaryPackaging'
    },
    {
      name: 'salaryPackagingDetails',
      title: L('Provide details'),
      type: 'textarea',
      hideWhen: 'participateSalaryPackaging'
    },
    {
      name: 'accruedAnnualLeave',
      title: L('Do you have accrued annual leave?'),
      type: 'radio',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'accruedAnnualLeaveHours',
      title: L('If Yes, how many hours?'),
      type: 'input:number',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'accruedSickLeave',
      title: L('Do you have accrued sick leave?'),
      type: 'radio',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'accruedSickLeaveHours',
      title: L('If Yes, how many hours?'),
      type: 'input:number',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'accruedLongServiceLeave',
      title: L('Do you have accrued long service leave?'),
      type: 'radio',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'accruedLongServiceLeaveHours',
      title: L('If Yes, how much?'),
      type: 'input:number',
      hideWhen: "employmentStatus == 'Not Working' || employmentStatus == 'Home Duties'"
    },
    {
      name: 'selfEmployedBusinessStructure',
      title: L('If self employed, what is the business structure?'),
      type: 'select',
      options: SelfEmployedBusinessStructureOptions,
      hideWhen: "employmentStatus != 'Self-Employed'"
    },
    {
      name: 'ownership',
      title: L('Ownership %'),
      type: 'input:percentage',
      hideWhen: "selfEmployedBusinessStructure != 'Sole Trader'"
    },
    {
      name: 'discussBusinessNeedsOrGoals',
      title: L('Would you like to discuss the needs and goals of your business?'),
      type: 'checkbox',
      hideWhen: "employmentStatus != 'Self-Employed'"
    }
  ]
};

export const CLIENT_IDENTIFICATION_DEF = <IGroupPanelItem> {
  title: L('Identification'),
  subtitle: L(''),
  summary: [
    {
      name: 'fullName',
      title: L(''),
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'employedByWestpacGroup',
      title: L('Are you employed by the Westpac Group?'),
      type: 'radio'
    },
    {
      name: 'australianForTaxPurposes',
      title: L('Are you an Australian resident for taxation purposes?'),
      type: 'radio'
    },
    {
      name: 'countryOfResidence',
      title: L(`If 'No', which country?`),
      type: 'input',
      hideWhen: 'australianForTaxPurposes'
    },
    {
      name: 'visa188Applicant',
      title: L('Have you applied for a Significant Investor Visa 188?'),
      type: 'radio',
      hideWhen: 'australianForTaxPurposes'
    },
    {
      name: 'fluentEnglish',
      title: L('Are you fluent in English?'),
      type: 'radio'
    },
    {
      name: 'interpreterRequired',
      title: L('Do you require the assistance of an interpreter?'),
      type: 'radio',
      hideWhen: 'fluentEnglish'
    },
    {
      name: 'hazardousPursuits',
      title: L(`If Customer answers, ‘No’ to both above questions,
how will the advice be understood?`),
      type: 'textarea',
      hideWhen: 'interpreterRequired'
    },
    {
      name: 'amlIdentification',
      title: L('AML identification'),
      type: 'select',
      options: AMLIdentificationOptions
    }
  ]
};

export const CLIENT_THIRDPARTY_DEF = <IGroupPanelItem> {
  title: L('Third Parties'),
  subtitle: L(''),
  summary: [
    {
      name: 'fullName',
      title: L(''),
      span: 6,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'thirdPartyName',
      title: L('Name'),
      type: 'input',
      hideWhen: '!thirdPartyConsultation'
    },
    {
      name: 'phone',
      title: L('Phone'),
      type: 'input:phone',
      hideWhen: '!thirdPartyConsultation'
    },
    {
      name: 'email',
      title: L('Email Address'),
      type: 'input:email',
      hideWhen: '!thirdPartyConsultation'
    },
    {
      name: 'relationship',
      title: L('Relationship'),
      type: 'select',
      options: RelationshipOptions,
      hideWhen: '!thirdPartyConsultation'
    },
    {
      name: 'other',
      title: L('Other'),
      type: 'textarea',
      hideWhen: "relationship != 'Other'"
    },
    {
      name: 'thirdPartyConsultation',
      title: L('Do you need to consult any third parties in your decision making process?'),
      type: 'checkbox'
    },
    {
      name: 'otherBackgroundDetail',
      title: L('Other background information'),
      type: 'textarea',
      hideWhen: "relationship != 'Other'"
    }
  ]
};


export const CLIENTS: IClient[] = [
  <IClient> {
    keyInfo: <IClientKeyInfo> {
      id: uuid(),
      customerKey: 1,
      title: 'Mr',
      surname: 'Client',
      givenName: 'Joshua',
      fullName: 'Joshua Client',
      preferredName: 'Josh',
      gender: 'M',
      maritalStatus: 'Married',
      dateOfBirth: '1981-02-03',
      age: 36,
      relationship: 'Spouse',
      type: 'Primary'
    },
    otherInfo: <IClientOtherInfo> {
      id: uuid(),
      healthStatus: 'Excellent',
      poorDetails: 'Poor Details',
      pursuit: true,
      pursuitDetails: 'Pursuit Details',
      smoker: false,
      healthCover: false,
      consideration: true,
      considerationDetails: 'Consideration Details',
      healthIssue: false,
      healthIssueDetails: ''
    },
    contactInfo: <IClientContactInfo> {
      id: uuid(),
      residentialAddress: <IAddress> {
        addressLine1: '12 Alice St',
        addressLine2: 'Newtown',
        state: 'NSW',
        postcode: 2048,
        country: 'Australia'
      },
      postalAddressSameAsResidential: true,
      homePhone: '0292523434',
      businessPhone: '0292553434',
      mobile: '0422260333',
      email: 'josh@rubik.com.au',
      preferredContactMethod: 'Mobile'
    },
    employmentInfo: <IClientEmployment> {
      id: uuid(),
      employmentStatus: 'Retired',
      preservationAge: 45,
      retirementAge: 65,
      yearsToRetirement: 10,
      occupation: 'Statistician',
      salary: '46000',
      frequency: 'Monthly',
      beforeOrAfterTax: 'Before Tax',
      annualIncomeBeforeTax: '80000',
      workingHours: 10,
      workingHoursFrequency: 'Weekly',
      plannedChanges: false,
      occupationChangesDetails: '',
      employerName: 'John Doe',
      employerPhone: '2318846848',
      employerAddress: {
        addressLine1: '85 Castlereagh St',
        addressLine2: 'Sydney',
        state: 'NSW',
        postcode: 2000
      },
      startDate: '2007-02-18',
      employerSuperGuarantee: 0.2,
      participateSalaryPackaging: true,
      salaryPackagingAvailable: 'Yes',
      salaryPackagingDetails: '$2000 Laptop',
      accruedAnnualLeave: false,
      accruedAnnualLeaveHours: 0,
      accruedSickLeave: true,
      accruedSickLeaveHours: 35,
      accruedLongServiceLeave: true,
      accruedLongServiceLeaveHours: 300,
      selfEmployedBusinessStructure: 'Partnership',
      ownership: .5,
      discussBusinessNeedsOrGoals: false
    },
    identification: <IClientIdentification> {
      id: uuid(),
      employedByWestpacGroup: false,
      australianForTaxPurposes: true,
      countryOfResidence: '',
      visa188Applicant: true,
      fluentEnglish: true,
      interpreterRequired: false,
      hazardousPursuits: '',
      amlIdentification: 'Branch Identified'
    },
    thirdParty: <IClientThirdParty> {
      id: uuid(),
      thirdPartyName: 'Macdonald',
      phone: '1234567890',
      email: 'text@text.com',
      relationship: 'Other',
      other: 'Sister',
      thirdPartyConsultation: true,
      otherBackgroundDetail: 'available'
    }
  },
  <IClient> {
    keyInfo: <IClientKeyInfo> {
      id: uuid(),
      customerKey: 2,
      title: 'Ms',
      surname: 'Client',
      givenName: 'Joan',
      fullName: 'Joan Client',
      preferredName: 'Joannie',
      gender: 'F',
      maritalStatus: 'Married',
      dateOfBirth: '1981-02-04',
      age: 36,
      relationship: 'Spouse',
      type: 'Partner'
    },
    otherInfo: <IClientOtherInfo> {
      id: uuid(),
      healthStatus: 'Good',
      poorDetails: 'Poor Details',
      pursuit: true,
      pursuitDetails: 'Pursuit Details',
      smoker: true,
      healthCover: true,
      healthCoverType: 'Hospital Only',
      consideration: true,
      considerationDetails: 'Consideration Details',
      healthIssue: true,
      healthIssueDetails: 'Health Issue Details'
    },
    contactInfo: <IClientContactInfo> {
      id: uuid(),
      residentialAddress: <IAddress> {
        addressLine1: '12 Alice St',
        addressLine2: 'Newtown',
        state: 'NSW',
        postcode: 2048,
        country: 'Australia'
      },
      postalAddressSameAsResidential: false,
      postalAddress: <IAddress> {
        addressLine1: '13 Alice St',
        addressLine2: 'Newtown',
        state: 'NSW',
        postcode: 2048,
        country: 'Australia'
      },
      homePhone: '0292523434',
      businessPhone: '0292553434',
      mobile: '0422260333',
      email: 'joan@rubik.com.au',
      preferredContactMethod: 'Home'
    },
    employmentInfo: <IClientEmployment> {
      id: uuid(),
      employmentStatus: 'Full-Time',
      preservationAge: 45,
      retirementAge: 65,
      yearsToRetirement: 10,
      occupation: 'Nurse',
      salary: '46000',
      frequency: 'Monthly',
      beforeOrAfterTax: 'Before Tax',
      annualIncomeBeforeTax: '80000',
      workingHours: 10,
      workingHoursFrequency: 'Weekly',
      plannedChanges: false,
      occupationChangesDetails: '',
      employerName: 'John Doe',
      employerPhone: '2318846848',
      employerAddress: {
        addressLine1: '355 Bourke St',
        addressLine2: 'Melbourne',
        state: 'VIC',
        postcode: 3000
      },
      startDate: '2007-02-18',
      employerSuperGuarantee: 20,
      participateSalaryPackaging: false,
      salaryPackagingAvailable: 'Yes',
      accruedAnnualLeave: false,
      accruedAnnualLeaveHours: 0,
      accruedSickLeave: false,
      accruedSickLeaveHours: 0,
      accruedLongServiceLeave: true,
      accruedLongServiceLeaveHours: 300,
      selfEmployedBusinessStructure: 'Partnership',
      ownership: 0.5,
      discussBusinessNeedsOrGoals: false
    },
    identification: <IClientIdentification> {
      id: uuid(),
      employedByWestpacGroup: false,
      australianForTaxPurposes: true,
      countryOfResidence: '',
      visa188Applicant: true,
      fluentEnglish: true,
      interpreterRequired: false,
      hazardousPursuits: '',
      amlIdentification: 'Not Identified'
    }
  }
];
