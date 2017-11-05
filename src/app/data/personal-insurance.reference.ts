import { IValueOption } from '@btas/common/value-option';
import {
  IPersonalInsurance,
  ILifeCoverType,
  ITPDCoverType,
  ITraumaCoverType,
  IIncomeProtectionCoverType
} from '@btas/models/personal-insurance';
import {
  FrequencyOptions
} from '@data/base.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { Currency } from '@btas/common/currency';

import * as uuid from 'uuid/v4';


export const STEPPED = 'stepped';
export const LEVEL = 'level';
export const HYBRID = 'hybrid';

export type PremiumStructureType =
  'stepped' | 'jolevelint' | 'hybrid';

export const PremiumStructureTypeOptions: Array<IValueOption<string>> = [
  {
    title: STEPPED,
    value: STEPPED,
  },
  {
    title: LEVEL,
    value: LEVEL,
  },
  {
    title: HYBRID,
    value: HYBRID,
  }
];

export const OWN_OCCUPATION = 'Own occupation';
export const ANY_OCCUPATION = 'any occupation';
export const GENERAL = 'general';
export const HOME_DUTIES = 'home duties';

export type OccupationDefinitionType =
  'Own occupation' | 'any occupation' | 'general' | 'home duties';

export const OccupationDefinitionTypeOptions: Array<IValueOption<string>> = [
  {
    title: OWN_OCCUPATION,
    value: OWN_OCCUPATION,
  },
  {
    title: ANY_OCCUPATION,
    value: ANY_OCCUPATION,
  },
  {
    title: GENERAL,
    value: GENERAL,
  },
  {
    title: HOME_DUTIES,
    value: HOME_DUTIES,
  }
];

export const LINKED_COVER = 'Linked cover';
export const STANDALONE_COVER = 'Standalone cover';

export type LinkedStandaloneType =
  'Linked cover' | 'Standalone cover';

export const LinkedStandaloneTypeOptions: Array<IValueOption<string>> = [
  {
    title: LINKED_COVER,
    value: LINKED_COVER,
  },
  {
    title: STANDALONE_COVER,
    value: STANDALONE_COVER,
  }
];


export const MEMBER = 'member';
export const EMPLOYER_FUNDED = 'employer funded';
export const BOTH = 'both';

export type MemberEmployerFundedType =
  'Linked cover' | 'Standalone cover';

export const MemberEmployerFundedTypeOptions: Array<IValueOption<string>> = [
  {
    title: MEMBER,
    value: MEMBER,
  },
  {
    title: EMPLOYER_FUNDED,
    value: EMPLOYER_FUNDED,
  }
  ,
  {
    title: BOTH,
    value: BOTH,
  }
];


export const AGREED_VALUE = 'Agreed value';
export const AGREED_VALUE_ENDORSED = 'Agreed value endorsed';
export const INDEMNITY_VALUE = 'Indemnity value';

export type BenefitType =
  'Agreed value' | 'Agreed value endorsed' | 'Indemnity value';

export const BenefitTypeOptions: Array<IValueOption<string>> = [
  {
    title: AGREED_VALUE,
    value: AGREED_VALUE,
  },
  {
    title: AGREED_VALUE_ENDORSED,
    value: AGREED_VALUE_ENDORSED,
  }
  ,
  {
    title: INDEMNITY_VALUE,
    value: INDEMNITY_VALUE,
  }
];

// Utilised/Fixed Selection
export const UTILISED  = 'Utilised';
export const FIXED_SELECTION = 'Fixed Selection';

export type UnitisedFixedType =
  'Utilised' | 'Fixed Selection';

export const UnitisedFixedOptions: Array<IValueOption<string>> = [
  {
    title: UTILISED ,
    value: UTILISED ,
  },
  {
    title: FIXED_SELECTION,
    value: FIXED_SELECTION,
  }
];



export const PERSONALINSURANCE: IPersonalInsurance = <IPersonalInsurance> {

  lifeCoverType: <ILifeCoverType[]> [{
    id: uuid(),
    productName: 'paksitan',
    insuranceProvider: 'zindabad',
    policyOwner: 'SMSF',
    amount: <Currency> { value: 20, code: 'USD'},
    policyNo: 'pakistan zindabad',
    productCode: 'pakistan zindabad',
    commencementDate: '2017-02-04',
    lifeInsured: 'joint',
    premium: <Currency> { value: 20, code: 'USD'},
    premiumFrequency: 'Annual',
    premiumStructure: 'hybrid',
    hybridPremiumDetails: 'pakistan zindabad',
    features: 'pakistan zindabad',
    isPolicyUnderwritten: false,
    underwriter: 'pakistan zindabad',
    underwritingDetails: 'Nabeel Ahmed',
    loadingExclusionsExist: false,
    details: 'pakistan zindabad',
    reviewPolicy: false,
    indexationlinked: false,
    childInsuranceAttached: false,
    childInsuranceDetail: 'pakistan zindabad',
    needlestickAttached: false,
    premiumSplit: false,
    customerOnePremiumSplit: <Currency> { value: 20, code: 'USD'},
    customerTwoPremiumSplit: <Currency> { value: 20, code: 'USD'},
    coverDefault: false,
    unitisedFixed: 'Utilised',
    masterTrustPay: false,
    masterTrustFund: 'pakistan zindabad',
    coverMember: 'Linked cover',
    splitDetail: 'pakistan zindabad',
    coverAccidentalDeath: false,
    medicalEvents: 'pakistan zindabad',
    productFlexi: false,
    premiumByClient: <Currency> { value: 20, code: 'USD'},
    canPolicyBeSwitched: false,
    policySwitchProcedure: 'pakistan zindabad',
    benefitAmount: false,
    additionalCoverTypes: false,
    requireUnderwriting: false,
    decreaseIncreaseAge: false,
    age: 10,
    coverExpiration: '2017-02-04',
    cancellationProcedure: 'pakistan zindabad'

  }
  ],

  tpdCoverType: <ITPDCoverType[]> [{
    id: uuid(),
    productName: 'paksitan',
    insuranceProvider: 'zindabad',
    policyOwner: 'SMSF',
    amount: <Currency> { value: 20, code: 'USD'},
    policyNo: 'pakistan zindabad',
    productCode: 'pakistan zindabad',
    commencementDate: '2017-02-04',
    lifeInsured: 'joint',
    premium: <Currency> { value: 20, code: 'USD'},
    premiumFrequency: 'Annual',
    premiumStructure: 'hybrid',
    hybridPremiumDetails: 'pakistan zindabad',
    features: 'pakistan zindabad',
    isPolicyUnderwritten: false,
    underwriter: 'pakistan zindabad',
    underwritingDetails: 'pakistan zindabad',
    loadingExclusionsExist: false,
    details: 'pakistan zindabad',
    reviewPolicy: false,
    occupationDefinition: 'general',
    indexationlinked: false,
    linkedStandalone: 'Linked cover',
    buyBackReinstatement: false,
    childInsuranceAttached: false,
    childInsuranceDetail: 'pakistan zindabad',
    needlestickAttached: false,
    premiumSplit: false,
    customerOnePremiumSplit: <Currency> { value: 20, code: 'USD'},
    customerTwoPremiumSplit: <Currency> { value: 20, code: 'USD'},
    coverDefault: false,
    unitisedFixed: 'Utilised',
    masterTrustPay: false,
    masterTrustFund: 'pakistan zindabad',
    coverMember: 'Linked cover',
    splitDetail: 'pakistan zindabad',
    occupationTPDFund: false,
    medicalEvents: 'pakistan zindabad',
    productFlexi: false,
    premiumByClient: <Currency> { value: 20, code: 'USD'},
    canPolicyBeSwitched: false,
    policySwitchProcedure: 'pakistan zindabad',
    benefitAmount: false,
    additionalCoverTypes: false,
    requireUnderwriting: false,
    decreaseIncreaseAge: false,
    age: 10,
    coverExpiration: '2017-02-04',
    cancellationProcedure: 'pakistan zindabad'

  }],

  traumaCoverType: <ITraumaCoverType[]> [{
    id: uuid(),
    productName: 'paksitan',
    insuranceProvider: 'zindabad',
    policyOwner: 'SMSF',
    // coverType: CoverType,
    amount: <Currency> { value: 20, code: 'USD'},
    policyNo: 'pakistan zindabad',
    productCode: 'pakistan zindabad',
    commencementDate: '2017-02-04',
    lifeInsured: 'joint',
    premium: <Currency> { value: 20, code: 'USD'},
    premiumFrequency: 'Annual',
    premiumStructure: 'hybrid',
    hybridPremiumDetails: 'pakistan zindabad',
    features: 'pakistan zindabad',
    isPolicyUnderwritten: false,
    underwriter: 'pakistan zindabad',
    underwritingDetails: 'pakistan zindabad',
    loadingExclusionsExist: false,
    details: 'pakistan zindabad',
    reviewPolicy: false,
    indexationlinked: false,
    linkedStandalone: 'Linked cover',
    buyBackReinstatement: false,
    childInsuranceAttached: false,
    childInsuranceDetail: 'pakistan zindabad',
    needlestickAttached: false,
    premiumSplit: false,
    customerOnePremiumSplit: <Currency> { value: 20, code: 'USD'},
    customerTwoPremiumSplit: <Currency> { value: 20, code: 'USD'},
    coverDefault: false,
    unitisedFixed: 'Utilised',
    masterTrustPay: false,
    masterTrustFund: 'pakistan zindabad',
    coverMember: 'Linked cover',
    splitDetail: 'pakistan zindabad',
    occupationTPDFund: false,
    medicalEvents: 'pakistan zindabad',
    canPolicyBeSwitched: false,
    policySwitchProcedure: 'pakistan zindabad',
    benefitAmount: false,
    additionalCoverTypes: false,
    requireUnderwriting: false,
    decreaseIncreaseAge: false,
    age: 10,
    coverExpiration: '2017-02-04',
    cancellationProcedure: 'pakistan zindabad',
    premiumByClient: <Currency> { value: 20, code: 'USD'},

  }],

  incomeProtectionCoverType: <IIncomeProtectionCoverType[]> [{
    id: uuid(),
    productName: 'paksitan',
    insuranceProvider: 'zindabad',
    policyOwner: 'SMSF',
    // coverType: CoverType,
    amount: <Currency> { value: 20, code: 'USD'},
    policyNo: 'pakistan zindabad',
    productCode: 'pakistan zindabad',
    commencementDate: '2017-02-04',
    lifeInsured: 'joint',
    premium: <Currency> { value: 20, code: 'USD'},
    premiumFrequency: 'Annual',
    premiumStructure: 'hybrid',
    hybridPremiumDetails: 'pakistan zindabad',
    features: 'pakistan zindabad',
    isPolicyUnderwritten: false,
    underwriter: 'pakistan zindabad',
    underwritingDetails: 'pakistan zindabad',
    loadingExclusionsExist: false,
    details: 'pakistan zindabad',
    reviewPolicy: false,
    occupationDefinition: 'general',
    benefitType: 'Agreed value',
    indexationlinked: false,
    childInsuranceAttached: false,
    childInsuranceDetail: 'pakistan zindabad',
    needlestickAttached: false,
    premiumSplit: false,
    customerOnePremiumSplit: <Currency> { value: 20, code: 'USD'},
    customerTwoPremiumSplit: <Currency> { value: 20, code: 'USD'},
    coverDefault: false,
    unitisedFixed: 'Utilised',
    masterTrustPay: false,
    masterTrustFund: 'pakistan zindabad',
    coverMember: 'Linked cover',
    splitDetail: 'pakistan zindabad',
    occupationTPDFund: false,
    medicalEvents: 'pakistan zindabad',
    containsTPDoption: false,
    allBenefitPeriodsOffered: 'pakistan zindabad',
    waitingPeriodsOffered: 'pakistan zindabad',
    occupationCategory: 'pakistan zindabad',
    canPolicyBeSwitched: false,
    policySwitchProcedure: 'pakistan zindabad',
    benefitAmount: false,
    additionalCoverTypes: false,
    requireUnderwriting: false,
    decreaseIncreaseAge: false,
    age: 10,
    coverExpiration: '2017-02-04',
    cancellationProcedure: 'pakistan zindabad',
    premiumByClient: <Currency> { value: 20, code: 'USD'},

  }]

};

// four new field's
export const LIFE_COVER_TYPE_DEF = <IGroupPanelItem> {
  title: 'Life Cover Type',
  subtitle: 'Let\'s get to know each other so we can better serve you.',
  summary: [
    {
      name: 'productName',
      title: 'Policy Name',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'amount',
      title: 'Insured cover amount',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    },
    {
      name: 'premium',
      title: 'Premiums',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    }
  ],
   fields: [
    {
      name: 'productName',
      title: 'Product name',
      type: 'input:text'
    },
    {
      name: 'insuranceProvider',
      title: 'Insurance provider',
      type: 'input:text'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      type: 'select',
      options: '$.ClientOptions + $.SuperFundsOptions + $.SMSFOptions'
    },
    {
      name: 'amount',
      title: 'Cover amount',
      type: 'currency'
    },
    {
      name: 'policyNo',
      title: 'Policy No.',
      type: 'input:text',
    },
    {
      name: 'productCode',
      title: 'Product code',
      type: 'input:text'
    },
    {
      name: 'commencementDate',
      title: 'Commencement date',
      type: 'date'
    },
    {
      name: 'lifeInsured',
      title: 'Life Insured',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'premium',
      title: 'Premium ($)',
      type: 'currency'
    },
    {
      name: 'premiumFrequency',
      title: 'Premium frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'premiumStructure',
      title: 'Premium structure',
      type: 'select',
      options: PremiumStructureTypeOptions
    },
    {
      name: 'hybridPremiumDetails',
      title: 'Hybrid premium details',
      type: 'textarea',
      hideWhen: '!(\'hybrid\' in premiumStructure)'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'textarea'
    },
    {
      name: 'isPolicyUnderwritten',
      title: 'Has policy been underwritten?',
      type: 'radio'
    },
    {
      name: 'underwriter',
      title: 'underwriter',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'underwritingDetails',
      title: 'Underwriting details',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'loadingExclusionsExist',
      title: 'Loadings or exclusions exist?',
      type: 'radio'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'input:text',
      hideWhen: '!loadingExclusionsExist'
    },
    {
      name: 'reviewPolicy',
      title: 'Do you wish to review this policy?',
      type: 'radio'
    },
    {
      name: 'indexationlinked',
      title: 'Indexation linked',
      type: 'radio'
    },
    {
      name: 'childInsuranceAttached',
      title: 'Child insurance attached?',
      type: 'radio'
    },
    {
      name: 'childInsuranceDetail',
      title: 'Details of Child Insurance',
      type: 'input:text',
      hideWhen: '!childInsuranceAttached'
    },
    {
      name: 'needlestickAttached',
      title: 'Needlestick attached?',
      type: 'radio'
    },
    {
      name: 'premiumSplit',
      title: 'Premium (S) split',
      type: 'radio',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    // Note :- Calculate customer's 2 split based on Premium ($)
    // less Customer 1 - Premium ($) split amount
    {
      name: 'customerOnePremiumSplit',
      title: 'Customer 1 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'customerTwoPremiumSplit',
      title: 'Customer 2 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'coverDefault',
      title: 'Is the Cover Default?',
      type: 'radio',
    },
    {
      name: 'unitisedFixed',
      title: 'Is the cover Unitised or Fixed?',
      fieldSpan: 6,
      type: 'radio',
      options: UnitisedFixedOptions
    },
    {
      name: 'masterTrustPay',
      title: 'Is the cover held within a master trust (pay by rollover)',
      type: 'radio',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'masterTrustFund',
      title: 'IF held in a master trust what fund is it rolling from?',
      type: 'input:text',
      hideWhen: '!masterTrustPay'
    },
    {
      name: 'coverMember',
      title: 'Is the cover member or employer funded?',
      type: 'select',
      options: MemberEmployerFundedTypeOptions,
    },
    {
      name: 'splitDetail',
      title: 'If both, provide details of the split',
      type: 'input:text',
      hideWhen: '!(\'both\' in coverMember)'
    },
    {
      name: 'coversAccidentalDeath',
      title: 'Covers Accidental Death?',
      type: 'radio'
    },
    {
      name: 'occupationTPDFund',
      title: 'Is own occupation TPD offered within the fund?',
      type: 'radio'
    },
    {
      name: 'medicalEvents',
      title: 'How many medical events are listed',
      type: 'input:text',
      hideWhen: '!requireUnderwriting'
    },
    {
      name: 'productFlexi',
      title: 'Is the product flexi linked (super-link)?',
      type: 'radio',
    },
    {
      name: 'premiumByClient',
      title: 'What is the premium paid by the client?',
      type: 'currency',
      hideWhen: '!productFlexi'
    },
    {
      name: 'canPolicyBeSwitched',
      title: 'Can the policy be switched to an alternate premium structure?',
      type: 'radio'
    },
    {
      name: 'policySwitchProcedure',
      title: 'If so, what is the procedure?',
      type: 'textarea',
      hideWhen: '!canPolicyBeSwitched'
    },
    {
      name: 'benefitAmount',
      title: `Does the policy allow requests to increase existing
        cover/move to fixed benefit amount?`,
      type: 'radio'
    },
    {
      name: 'additionalCoverTypes',
      title: 'Can client ask for additional cover types?',
      type: 'radio'
    },
    {
      name: 'requireUnderwriting',
      title: 'Does it require underwriting?',
      type: 'radio',
      hideWhen: '!additionalCoverTypes'
    },
    {
      name: 'decreaseIncreaseAge',
      title: 'Does the cover decrease or increase with age?',
      type: 'radio'
    },
    {
      name: 'age',
      title: 'At what age?',
      type: 'number',
      hideWhen: '!decreaseIncreaseAge'
    },
    {
      name: 'coverExpiration',
      title: 'What age or date does the cover expire?',
      type: 'input:text',
    },
    {
      name: 'cancellationProcedure',
      title: 'How can the cover be cancelled?',
      type: 'textarea'
    }
  ],
  deletable: true
};

export const TPD_COVER_TYPE_DEF = <IGroupPanelItem> {
  title: 'TPD Cover Type',
  summary: [
     {
      name: 'productName',
      title: 'Policy Name',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'amount',
      title: 'Insured cover amount',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    },
    {
      name: 'premium',
      title: 'Premiums',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    }
  ],
   fields: [
    {
      name: 'productName',
      title: 'Product name',
      type: 'input:text'
    },
    {
      name: 'insuranceProvider',
      title: 'Insurance provider',
      type: 'input:text'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      type: 'select',
      options: '$.ClientOptions + $.SuperFundsOptions + $.SMSFOptions'
    },
    {
      name: 'amount',
      title: 'Cover amount',
      type: 'currency'
    },
    {
      name: 'policyNo',
      title: 'Policy No.',
      type: 'input:text',
    },
    {
      name: 'productCode',
      title: 'Product code',
      type: 'input:text'
    },
    {
      name: 'commencementDate',
      title: 'Commencement date',
      type: 'date'
    },
    {
      name: 'lifeInsured',
      title: 'Life Insured',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'premium',
      title: 'Premium ($)',
      type: 'currency'
    },
    {
      name: 'premiumFrequency',
      title: 'Premium frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'premiumStructure',
      title: 'Premium structure',
      type: 'select',
      options: PremiumStructureTypeOptions
    },
    {
      name: 'hybridPremiumDetails',
      title: 'Hybrid premium details',
      type: 'textarea',
      hideWhen: '!(\'hybrid\' in premiumStructure)'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'textarea'
    },
    {
      name: 'isPolicyUnderwritten',
      title: 'Has policy been underwritten?',
      type: 'radio'
    },
    {
      name: 'underwriter',
      title: 'underwriter',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'underwritingDetails',
      title: 'Underwriting details',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'loadingExclusionsExist',
      title: 'Loadings or exclusions exist?',
      type: 'radio'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'input:text',
      hideWhen: '!loadingExclusionsExist'
    },
    {
      name: 'reviewPolicy',
      title: 'Do you wish to review this policy?',
      type: 'radio'
    },
    {
      name: 'occupationDefinition',
      title: 'Occupation definition',
      type: 'select',
      options: OccupationDefinitionTypeOptions
    },
    {
      name: 'indexationlinked',
      title: 'Indexation linked',
      type: 'radio'
    },
    {
      name: 'linkedStandalone',
      title: 'Linked or Standalone',
      type: 'select',
      options: LinkedStandaloneTypeOptions
    },
    {
      name: 'buyBackReinstatement',
      title: 'Buy back/reinstatement',
      type: 'radio'
    },
    {
      name: 'childInsuranceAttached',
      title: 'Child insurance attached?',
      type: 'radio'
    },
    {
      name: 'childInsuranceDetail',
      title: 'Details of Child Insurance',
      type: 'input:text',
      hideWhen: '!childInsuranceAttached'
    },
    {
      name: 'needlestickAttached',
      title: 'Needlestick attached?',
      type: 'radio'
    },
    {
      name: 'premiumSplit',
      title: 'Premium (S) split',
      type: 'radio',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    // Note :- Calculate customer's 2 split based on Premium ($)
    // less Customer 1 - Premium ($) split amount
    {
      name: 'customerOnePremiumSplit',
      title: 'Customer 1 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'customerTwoPremiumSplit',
      title: 'Customer 2 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'coverDefault',
      title: 'Is the Cover Default?',
      type: 'radio',
    },
    {
      name: 'unitisedFixed',
      title: 'Is the cover Unitised or Fixed?',
      fieldSpan: 6,
      type: 'radio',
      options: UnitisedFixedOptions
    },
    {
      name: 'masterTrustPay',
      title: 'Is the cover held within a master trust (pay by rollover)',
      type: 'radio',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'masterTrustFund',
      title: 'IF held in a master trust what fund is it rolling from?',
      type: 'input:text',
      hideWhen: '!masterTrustPay'
    },
    {
      name: 'coverMember',
      title: 'Is the cover member or employer funded?',
      type: 'select',
      options: MemberEmployerFundedTypeOptions,
    },
       {
      name: 'splitDetail',
      title: 'If both, provide details of the split',
      type: 'input:text',
      hideWhen: '!(\'both\' in coverMember)'
    },
    {
      name: 'occupationTPDFund',
      title: 'Is own occupation TPD offered within the fund?',
      type: 'radio'
    },
    {
      name: 'medicalEvents',
      title: 'How many medical events are listed',
      type: 'input:text',
      hideWhen: '!requireUnderwriting'
    },
    {
      name: 'productFlexi',
      title: 'Is the product flexi linked (super-link)?',
      type: 'radio'
    },
    {
      name: 'premiumByClient',
      title: 'What is the premium paid by the client?',
      type: 'currency',
      hideWhen: '!productFlexi'
    },
    {
      name: 'canPolicyBeSwitched',
      title: 'Can the policy be switched to an alternate premium structure?',
      type: 'radio'
    },
    {
      name: 'policySwitchProcedure',
      title: 'If so, what is the procedure?',
      type: 'textarea',
      hideWhen: '!canPolicyBeSwitched'
    },
    {
      name: 'benefitAmount',
      title: `Does the policy allow requests to increase existing
        cover/move to fixed benefit amount?`,
      type: 'radio'
    },
    {
      name: 'additionalCoverTypes',
      title: 'Can client ask for additional cover types?',
      type: 'radio'
    },
    {
      name: 'requireUnderwriting',
      title: 'Does it require underwriting?',
      type: 'radio',
      hideWhen: '!additionalCoverTypes'
    },
    {
      name: 'decreaseIncreaseAge',
      title: 'Does the cover decrease or increase with age?',
      type: 'radio'
    },
    {
      name: 'age',
      title: 'At what age?',
      type: 'number',
      hideWhen: '!decreaseIncreaseAge'
    },
    {
      name: 'coverExpiration',
      title: 'What age or date does the cover expire?',
      type: 'input:text',
    },
    {
      name: 'cancellationProcedure',
      title: 'How can the cover be cancelled?',
      type: 'textarea'
    }
  ],
  deletable: true
};

export const TRAUMA_COVER_TYPE_DEF = <IGroupPanelItem> {
  title: 'Trauma Cover Type',
  summary: [
    {
      name: 'productName',
      title: 'Policy Name',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'amount',
      title: 'Insured cover amount',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    },
    {
      name: 'premium',
      title: 'Premiums',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    }
  ],
   fields: [
    {
      name: 'productName',
      title: 'Product name',
      type: 'input:text'
    },
    {
      name: 'insuranceProvider',
      title: 'Insurance provider',
      type: 'input:text'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      type: 'select',
      options: '$.ClientOptions + $.SuperFundsOptions + $.SMSFOptions'
    },
    {
      name: 'amount',
      title: 'Cover amount',
      type: 'currency'
    },
    {
      name: 'policyNo',
      title: 'Policy No.',
      type: 'input:text',
    },
    {
      name: 'productCode',
      title: 'Product code',
      type: 'input:text'
    },
    {
      name: 'commencementDate',
      title: 'Commencement date',
      type: 'date'
    },
    {
      name: 'lifeInsured',
      title: 'Life Insured',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'premium',
      title: 'Premium ($)',
      type: 'currency'
    },
    {
      name: 'premiumFrequency',
      title: 'Premium frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'premiumStructure',
      title: 'Premium structure',
      type: 'select',
      options: PremiumStructureTypeOptions
    },
    {
      name: 'hybridPremiumDetails',
      title: 'Hybrid premium details',
      type: 'textarea',
      hideWhen: '!(\'hybrid\' in premiumStructure)'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'textarea'
    },
    {
      name: 'isPolicyUnderwritten',
      title: 'Has policy been underwritten?',
      type: 'radio'
    },
    {
      name: 'underwriter',
      title: 'underwriter',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'underwritingDetails',
      title: 'Underwriting details',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'loadingExclusionsExist',
      title: 'Loadings or exclusions exist?',
      type: 'radio'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'input:text',
      hideWhen: '!loadingExclusionsExist'
    },
    {
      name: 'reviewPolicy',
      title: 'Do you wish to review this policy?',
      type: 'radio'
    },
    {
      name: 'indexationlinked',
      title: 'Indexation linked',
      type: 'radio'
    },
    {
      name: 'linkedStandalone',
      title: 'Linked or Standalone',
      type: 'select',
      options: LinkedStandaloneTypeOptions
    },
    {
      name: 'buyBackReinstatement',
      title: 'Buy back/reinstatement',
      type: 'radio'
    },
    {
      name: 'childInsuranceAttached',
      title: 'Child insurance attached?',
      type: 'radio'
    },
    {
      name: 'childInsuranceDetail',
      title: 'Details of Child Insurance',
      type: 'input:text',
      hideWhen: '!childInsuranceAttached'
    },
    {
      name: 'needlestickAttached',
      title: 'Needlestick attached?',
      type: 'radio'
    },
    {
      name: 'premiumSplit',
      title: 'Premium (S) split',
      type: 'radio',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    // Note :- Calculate customer's 2 split based on Premium ($)
    // less Customer 1 - Premium ($) split amount
    {
      name: 'customerOnePremiumSplit',
      title: 'Customer 1 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'customerTwoPremiumSplit',
      title: 'Customer 2 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'coverDefault',
      title: 'Is the Cover Default?',
      type: 'radio',
    },
    {
      name: 'unitisedFixed',
      title: 'Is the cover Unitised or Fixed?',
      fieldSpan: 6,
      type: 'radio',
      options: UnitisedFixedOptions
    },
    {
      name: 'masterTrustPay',
      title: 'Is the cover held within a master trust (pay by rollover)',
      type: 'radio',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'masterTrustFund',
      title: 'IF held in a master trust what fund is it rolling from?',
      type: 'input:text',
      hideWhen: '!masterTrustPay'
    },
    {
      name: 'coverMember',
      title: 'Is the cover member or employer funded?',
      type: 'select',
      options: MemberEmployerFundedTypeOptions,
    },
       {
      name: 'splitDetail',
      title: 'If both, provide details of the split',
      type: 'input:text',
      hideWhen: '!(\'both\' in coverMember)'
    },
    {
      name: 'occupationTPDFund',
      title: 'Is own occupation TPD offered within the fund?',
      type: 'radio'
    },
    {
      name: 'medicalEvents',
      title: 'How many medical events are listed',
      type: 'input:text',
      hideWhen: '!requireUnderwriting'
    },
    {
      name: 'canPolicyBeSwitched',
      title: 'Can the policy be switched to an alternate premium structure?',
      type: 'radio'
    },
    {
      name: 'policySwitchProcedure',
      title: 'If so, what is the procedure?',
      type: 'textarea',
      hideWhen: '!canPolicyBeSwitched'
    },
    {
      name: 'benefitAmount',
      title: `Does the policy allow requests to increase existing
        cover/move to fixed benefit amount?`,
      type: 'radio'
    },
    {
      name: 'additionalCoverTypes',
      title: 'Can client ask for additional cover types?',
      type: 'radio'
    },
    {
      name: 'requireUnderwriting',
      title: 'Does it require underwriting?',
      type: 'radio',
      hideWhen: '!additionalCoverTypes'
    },
    {
      name: 'decreaseIncreaseAge',
      title: 'Does the cover decrease or increase with age?',
      type: 'radio'
    },
    {
      name: 'age',
      title: 'At what age?',
      type: 'number',
      hideWhen: '!decreaseIncreaseAge'
    },
    {
      name: 'coverExpiration',
      title: 'What age or date does the cover expire?',
      type: 'input:text',
    },
    {
      name: 'cancellationProcedure',
      title: 'How can the cover be cancelled?',
      type: 'textarea'
    },
    {
      name: 'premiumByClient',
      title: 'What is the premium paid by the client?',
      type: 'currency',
      hideWhen: '!productFlexi'
    },
  ],
  deletable: true
};

export const INCOME_PROTECTION_COVER_TYPE_DEF = <IGroupPanelItem> {
  title: 'Personal Insurance',
  summary: [
    {
      name: 'productName',
      title: 'Policy Name',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'amount',
      title: 'Insured cover amount',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    },
    {
      name: 'premium',
      title: 'Premiums',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    }
  ],
   fields: [
    {
      name: 'productName',
      title: 'Product name',
      type: 'input:text'
    },
    {
      name: 'insuranceProvider',
      title: 'Insurance provider',
      type: 'input:text'
    },
    {
      name: 'policyOwner',
      title: 'Policy owner',
      type: 'select',
      options: '$.ClientOptions + $.SuperFundsOptions + $.SMSFOptions'
    },
    {
      name: 'amount',
      title: 'Cover amount',
      type: 'currency'
    },
    {
      name: 'policyNo',
      title: 'Policy No.',
      type: 'input:text',
    },
    {
      name: 'productCode',
      title: 'Product code',
      type: 'input:text'
    },
    {
      name: 'commencementDate',
      title: 'Commencement date',
      type: 'date'
    },
    {
      name: 'lifeInsured',
      title: 'Life Insured',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'premium',
      title: 'Premium ($)',
      type: 'currency'
    },
    {
      name: 'premiumFrequency',
      title: 'Premium frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'premiumStructure',
      title: 'Premium structure',
      type: 'select',
      options: PremiumStructureTypeOptions
    },
    {
      name: 'hybridPremiumDetails',
      title: 'Hybrid premium details',
      type: 'textarea',
      hideWhen: '!(\'hybrid\' in premiumStructure)'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'textarea'
    },
    {
      name: 'isPolicyUnderwritten',
      title: 'Has policy been underwritten?',
      type: 'radio'
    },
    {
      name: 'underwriter',
      title: 'underwriter',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'underwritingDetails',
      title: 'Underwriting details',
      type: 'textarea',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'loadingExclusionsExist',
      title: 'Loadings or exclusions exist?',
      type: 'radio'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'input:text',
      hideWhen: '!loadingExclusionsExist'
    },
    {
      name: 'reviewPolicy',
      title: 'Do you wish to review this policy?',
      type: 'radio'
    },
    {
      name: 'occupationDefinition',
      title: 'Occupation definition',
      type: 'select',
      options: OccupationDefinitionTypeOptions,
    },
    {
      name: 'benefitType',
      title: 'Benefit type',
      type: 'radio',
      fieldSpan: 8,
      options: BenefitTypeOptions,
    },
    {
      name: 'indexationlinked',
      title: 'Indexation linked',
      type: 'radio'
    },
    {
      name: 'childInsuranceAttached',
      title: 'Child insurance attached?',
      type: 'radio'
    },
    {
      name: 'childInsuranceDetail',
      title: 'Details of Child Insurance',
      type: 'input:text',
      hideWhen: '!childInsuranceAttached'
    },
    {
      name: 'needlestickAttached',
      title: 'Needlestick attached?',
      type: 'radio'
    },
    {
      name: 'premiumSplit',
      title: 'Premium (S) split',
      type: 'radio',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    // Note :- Calculate customer's 2 split based on Premium ($)
    // less Customer 1 - Premium ($) split amount
    {
      name: 'customerOnePremiumSplit',
      title: 'Customer 1 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'customerTwoPremiumSplit',
      title: 'Customer 2 - Premium (S) split',
      type: 'currency',
      hideWhen: '!(\'joint\' in lifeInsured)'
    },
    {
      name: 'coverDefault',
      title: 'Is the Cover Default?',
      type: 'radio',
    },
    {
      name: 'unitisedFixed',
      title: 'Is the cover Unitised or Fixed?',
      fieldSpan: 6,
      type: 'radio',
      options: UnitisedFixedOptions
    },
    {
      name: 'masterTrustPay',
      title: 'Is the cover held within a master trust (pay by rollover)',
      type: 'radio',
      hideWhen: '!isPolicyUnderwritten'
    },
    {
      name: 'masterTrustFund',
      title: 'IF held in a master trust what fund is it rolling from?',
      type: 'input:text',
      hideWhen: '!masterTrustPay'
    },
    {
      name: 'coverMember',
      title: 'Is the cover member or employer funded?',
      type: 'select',
      options: MemberEmployerFundedTypeOptions,
    },
       {
      name: 'splitDetail',
      title: 'If both, provide details of the split',
      type: 'input:text',
      hideWhen: '!(\'both\' in coverMember)'
    },
    {
      name: 'occupationTPDFund',
      title: 'Is own occupation TPD offered within the fund?',
      type: 'radio'
    },
    {
      name: 'medicalEvents',
      title: 'How many medical events are listed',
      type: 'input:text',
      hideWhen: '!requireUnderwriting'
    },
    {
      name: 'containsTPDoption',
      title: 'Contains TPD Option?',
      type: 'radio'
    },
    {
      name: 'allBenefitPeriodsOffered',
      title: 'What are all of the benefit periods offered?',
      type: 'input:text'
    },
    {
      name: 'waitingPeriodsOffered',
      title: 'What are all of the  waiting periods offered',
      type: 'input:text'
    },
    {
      name: 'occupationCategory',
      title: 'Occupation category',
      type: 'input:text'
    },
    {
      name: 'canPolicyBeSwitched',
      title: 'Can the policy be switched to an alternate premium structure?',
      type: 'radio'
    },
    {
      name: 'policySwitchProcedure',
      title: 'If so, what is the procedure?',
      type: 'textarea',
      hideWhen: '!canPolicyBeSwitched'
    },
    {
      name: 'benefitAmount',
      title: `Does the policy allow requests to increase existing
        cover/move to fixed benefit amount?`,
      type: 'radio'
    },
    {
      name: 'additionalCoverTypes',
      title: 'Can client ask for additional cover types?',
      type: 'radio'
    },
    {
      name: 'requireUnderwriting',
      title: 'Does it require underwriting?',
      type: 'radio',
      hideWhen: '!additionalCoverTypes'
    },
    {
      name: 'decreaseIncreaseAge',
      title: 'Does the cover decrease or increase with age?',
      type: 'radio'
    },
    {
      name: 'age',
      title: 'At what age?',
      type: 'number',
      hideWhen: '!decreaseIncreaseAge'
    },
    {
      name: 'coverExpiration',
      title: 'What age or date does the cover expire?',
      type: 'input:text',
    },
    {
      name: 'cancellationProcedure',
      title: 'How can the cover be cancelled?',
      type: 'textarea'
    },
    {
      name: 'premiumByClient',
      title: 'What is the premium paid by the client?',
      type: 'currency',
      hideWhen: '!productFlexi'
    },
  ],
  deletable: true
};
