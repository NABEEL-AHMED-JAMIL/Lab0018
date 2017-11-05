import {
  ISuperPensions,
  ISuperPensionsSuperannuation,
  ISuperPensionsPension,
  ISuperPensionsAnnuities,
  ISuperPensionsContributionsHistory
} from '@btas/models/super-pensions';
import {
  NominationTypeOptions
} from '@data/nomination.reference';
import {
  FrequencyOptions
} from '@data/base.reference';
import { IncomeDrawnOptions } from '@data/income.reference';
import { ContributionTypeOptions } from '@data/contribution-type.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import * as uuid from 'uuid/v4';
import { IValueOption } from '@btas/common/value-option';
import { Currency } from '@btas/common/currency';


export type AnnuitiesTerm = 'In years' | 'Lifetime';

export const IN_YEARS = 'In years';
export const LIFETIME = 'Lifetime';

export const AnnuitiesTermOptions: Array<IValueOption<AnnuitiesTerm>> = [
  {
    title: IN_YEARS,
    value: IN_YEARS
  },
  {
    title: LIFETIME,
    value: LIFETIME
  }
];

export type FinancialYearEnding = '30 June 2014' | '30 June 2015' | '30 June 2016';

export const JUNE_2014 = '30 June 2014';
export const JUNE_2015 = '30 June 2015';
export const JUNE_2016 = '30 June 2016';

export const FinancialYearEndingOptions: Array<IValueOption<FinancialYearEnding>> = [
  {
    title: JUNE_2014,
    value: JUNE_2014
  },
  {
    title: JUNE_2015,
    value: JUNE_2015
  },
  {
    title: JUNE_2016,
    value: JUNE_2016
  }
];

export const SUPERPENSIONS_SUPERANNUATION_DEF = <IGroupPanelItem> {
  title: 'Super',
  subtitle: '',
  summary: [
    {
      name: 'asset',
      title: 'Asset',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'owner',
      title: 'Owner',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    },
    {
      name: 'currentValue',
      title: 'Current Value',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'currency',
      label: 'top',
      readonly: true
    },
    {
      name: 'contributions',
      title: 'Contributions',
      span: 3,
      labelSpan: 12,
      fieldSpan: 12,
      type: 'text',
      label: 'top'
    }
  ],
  fields: [
    {
      name: 'fundName',
      title: 'Fund Name',
      type: 'input'
    },
    {
      name: 'fundMembership',
      title: 'Fund membership No.',
      type: 'input'
    },
    {
      name: 'spin',
      title: 'SPIN',
      type: 'input'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'currentValue',
      title: 'Current value',
      type: 'currency'
    },
    {
      name: 'apirTicker',
      title: 'APIR/Ticker',
      type: 'text'
    },
    {
      name: 'optionName',
      title: 'Option Name',
      type: 'input'
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'currency'
    },
    {
      name: 'purchaseDate',
      title: 'Purchase date',
      type: 'date'
    },
    {
      name: 'regularContribution',
      title: 'Total regular contribution received ($ p.a.)',
      type: 'currency'
    },
    {
      name: 'superGuranteeContributions',
      title: 'Regular Super Guarantee contributions ($ p.a)',
      type: 'currency'
    },
    {
      name: 'regularConcessional',
      title: 'Regular concessional contributions ($ p.a.)',
      type: 'currency'
    },
    {
      name: 'regularNonConcessional',
      title: 'Regular non-concessional contributions ($ p.a.)',
      type: 'currency'
    },
    {
      name: 'regularOtherContributions',
      title: 'Regular other contributions ($ p.a.)',
      type: 'currency'
    },
    {
      name: 'superChoice',
      title: 'Super choice',
      type: 'radio'
    },
    {
      name: 'currentDeathNomination',
      title: 'Current death nomination',
      type: 'radio'
    },
    {
      name: 'smsf',
      title: 'SMSF',
      type: 'radio'
    },
    {
      name: 'smsfGoals',
      title: 'Would you like to discuss the needs and goals of your SMSF?',
      type: 'radio',
      hideWhen: '!smsf'
    },
    {
      name: 'containsInsurance',
      title: 'Contains insurance?',
      type: 'radio'
    },
    {
      name: 'exitFundOnEmploymentTermination',
      title: 'Will you need to exit the fund if you leave current employment?',
      type: 'radio'
    },
    {
      name: 'reviewProduct',
      title: 'Do you wish to review this product?',
      type: 'radio',
      fieldSpan: 6,
      options: [
        {title: 'Yes', value: 'yes'},
        {title: 'No', value: 'no'},
        {title: 'For consideration', value: 'consideration', checked: true}
      ]
    },
    {
      name: 'dateJoinedFund',
      title: 'Date joined fund',
      type: 'date'
    },
    {
      name: 'joinedFundDetails',
      title: 'Details',
      type: 'textarea'
    },
    {
      name: 'surrenderValue',
      title: 'Surrender value ($)',
      type: 'currency'
    },
    {
      name: 'taxFree',
      title: 'Tax-free ($)',
      type: 'currency'
    },
    {
      name: 'taxableTaxed',
      title: 'Taxable  - taxed ($)',
      type: 'currency'
    },
    {
      name: 'taxableUntaxed',
      title: 'Taxable  - Untaxed ($)',
      type: 'currency'
    },
    {
      name: 'preserved',
      title: 'Preserved ($)',
      type: 'currency'
    },
    {
      name: 'restrictedNonPreserved',
      title: 'Restricted non-Preserved ($)',
      type: 'currency'
    },
    {
      name: 'unrestrictedNonPreserved',
      title: 'Unrestricted non-Preserved ($)',
      type: 'currency:text'
    },
    {
      name: 'nominationType',
      title: 'Type of Nomination',
      type: 'select',
      options: NominationTypeOptions,
      hideWhen: '!currentDeathNomination'
    },
    {
      name: 'beneficiaryName',
      title: 'Beneficiary Name',
      type: 'input',
      hideWhen: '!currentDeathNomination && !nominationType'
    },
    {
      name: 'beneficiaryPercentage',
      title: 'Beneficiary %',
      type: 'input',
      hideWhen: '!currentDeathNomination && !nominationType'
    }
  ],
  deletable: true
};

export const SUPERPENSIONS_CONTRIBUTIONSHISTORY_DEF = <IGroupPanelItem> {
  title: 'Contributions History',
  subtitle: '',
  summary: [],
  fields: [
    {
      name: 'contributionType',
      title: 'Contribution Type',
      type: 'select',
      options: ContributionTypeOptions
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'financialYearEnding',
      title: 'Financial Year Ending',
      type: 'select',
      options: FinancialYearEndingOptions
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'currency'
    }
  ],
  deletable: true
};

export const SUPERPENSIONS_PENSION_DEF = <IGroupPanelItem> {
  title: 'Pension',
  subtitle: '',
  summary: [],
  fields: [
    {
      name: 'fundName',
      title: 'Fund Name',
      type: 'input'
    },
    {
      name: 'fundMembership',
      title: 'Fund membership No.',
      type: 'input'
    },
    {
      name: 'spin',
      title: 'SPIN',
      type: 'input'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'currentValue',
      title: 'Current value',
      type: 'currency'
    },
    {
      name: 'apirTicker',
      title: 'APIR/Ticker',
      type: 'text'
    },
    {
      name: 'optionName',
      title: 'Option Name',
      type: 'input'
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'currency'
    },
    {
      name: 'purchaseDate',
      title: 'Purchase date',
      type: 'date'
    },
    {
      name: 'complyingCentrelinkPurposes',
      title: 'Complying for Centrelink purposes?',
      type: 'radio'
    },
    {
      name: 'incomeDrawn',
      title: 'Income drawn',
      type: 'select',
      options: IncomeDrawnOptions
    },
    {
      name: 'incomeAmount',
      title: 'Income amount',
      type: 'currency',
      hideWhen: '!incomeDrawn'
    },
    {
      name: 'paymentFrequency',
      title: 'Payment frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'currentDeathNomination',
      title: 'Current death nomination',
      type: 'radio'
    },
    {
      name: 'smsf',
      title: 'SMSF',
      type: 'radio'
    },
    {
      name: 'smsfGoals',
      title: 'Would you like to discuss the needs and goals of your SMSF?',
      type: 'radio',
      hideWhen: '!smsf'
    },
    {
      name: 'reviewProduct',
      title: 'Do you wish to review this product?',
      type: 'radio',
      fieldSpan: 6,
      options: [
        {title: 'Yes', value: 'yes'},
        {title: 'No', value: 'no'},
        {title: 'For consideration', value: 'consideration', checked: true}
      ]
    },
    {
      name: 'dateJoinedFund',
      title: 'Date joined fund',
      type: 'date'
    },
    {
      name: 'joinedFundDetails',
      title: 'Details',
      type: 'textarea'
    },
    {
      name: 'surrenderValue',
      title: 'Surrender value ($)',
      type: 'currency'
    },
    {
      name: 'taxFree',
      title: 'Tax-free ($)',
      type: 'currency'
    },
    {
      name: 'taxableTaxed',
      title: 'Taxable  - taxed ($)',
      type: 'currency'
    },
    {
      name: 'taxableUntaxed',
      title: 'Taxable  - Untaxed ($)',
      type: 'currency'
    },
    {
      name: 'preserved',
      title: 'Preserved ($)',
      type: 'currency'
    },
    {
      name: 'restrictedNonPreserved',
      title: 'Restricted non-Preserved ($)',
      type: 'currency'
    },
    {
      name: 'unrestrictedNonPreserved',
      title: 'Unrestricted non-Preserved ($)',
      type: 'currency:text'
    },
    {
      name: 'nominationType',
      title: 'Type of Nomination',
      type: 'select',
      options: NominationTypeOptions,
      hideWhen: '!currentDeathNomination'
    },
    {
      name: 'beneficiaryName',
      title: 'Beneficiary Name',
      type: 'input',
      hideWhen: '!currentDeathNomination || !nominationType'
    },
    {
      name: 'beneficiaryDetails',
      title: 'Details',
      type: 'textarea',
    }
  ],
  deletable: true
};

export const SUPERPENSIONS_ANNUITIES_DEF = <IGroupPanelItem> {
  title: 'Annuities',
  subtitle: '',
  summary: [],
  fields: [
    {
      name: 'fundName',
      title: 'Fund Name',
      type: 'input'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'isSuperannuationAnnuity',
      title: 'Is this a Superannuation annuity?',
      type: 'radio',
    },
    {
      name: 'complyingCentrelinkPurposes',
      title: 'Complying for Centrelink purposes?',
      type: 'radio'
    },
    {
      name: 'dateOfPurchase',
      title: 'Date of purchase',
      type: 'date'
    },
    {
      name: 'isTermAllocatedPension',
      title: 'Is this a Term Allocated Pension?',
      type: 'radio'
    },
    {
      name: 'initialInvestmentAmount',
      title: 'Investment amount (initial)',
      type: 'currency'
    },
    {
      name: 'currentValue',
      title: 'Current value',
      type: 'currency'
    },
    {
      name: 'centrelinkDeductibleAmount',
      title: 'Centrelink deductible amount',
      type: 'currency'
    },
    {
      name: 'taxFreeComponent',
      title: 'Tax free component',
      type: 'currency'
    },
    {
      name: 'taxableComponent',
      title: 'Taxable component',
      type: 'currency'
    },
    {
      name: 'incomeDrawn',
      title: 'Income drawn',
      type: 'select',
      options: IncomeDrawnOptions
    },
    {
      name: 'otherIncomeAmount',
      title: 'Other Income amount',
      type: 'currency',
      hideWhen: "incomeDrawn != 'Specific figure'"
    },
    {
      name: 'paymentFrequency',
      title: 'Payment frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'term',
      title: 'Term',
      type: 'select',
      options: AnnuitiesTermOptions
    },
    {
      name: 'years',
      title: 'Years',
      type: 'numeric',
      hideWhen: "term != 'In years'"
    },
    {
      name: 'indexed',
      title: 'Indexed',
      type: 'radio'
    },
    {
      name: 'indexationRate',
      title: 'Indexation rate',
      type: 'numeric',
      hideWhen: '!indexed'
    },
    {
      name: 'residualCapitalValue',
      title: 'Residual capital value',
      type: 'currency',
      hideWhen: 'isTermAllocatedPension'
    },
    {
      name: 'reversionary',
      title: 'Reversionary',
      type: 'radio'
    },
    {
      name: 'currentDeathNomination',
      title: 'Current Death nomination',
      type: 'radio'
    },
    {
      name: 'details',
      title: 'Details',
      type: 'textarea'
    }
  ],
  deletable: true
};

export const SUPERPENSIONS: ISuperPensions =
  <ISuperPensions> {
    superannuations: <ISuperPensionsSuperannuation[]> [{
      id: uuid(),
      fundName: 'Fund Name',
      fundMembership: 'Fund Membership',
      spin: 'SPIN',
      owner: 'Client 1',
      currentValue: <Currency> { value: 4849499, code: 'AUD' },
      apirTicker: 'APIR Ticker',
      optionName: 'Option Name',
      amount: <Currency> { value: 1189, code: 'USD' },
      purchaseDate: '2000-05-06',
      regularContribution: <Currency> { value: 6546, code: 'AUD' },
      superGuranteeContributions: <Currency> { value: 59, code: 'AUD' },
      regularConcessional: <Currency> { value: 4948, code: 'AUD' },
      regularNonConcessional: <Currency> { value: 48949, code: 'AUD' },
      regularOtherContributions: <Currency> { value: 489489, code: 'AUD' },
      superChoice: true,
      currentDeathNomination: true,
      smsf: true,
      smsfGoals: true,
      containsInsurance: true,
      exitFundOnEmploymentTermination: false,
      reviewProduct: 'consideration',
      dateJoinedFund: '2010-02-04',
      joinedFundDetails: 'Joined Fund Details',
      surrenderValue: <Currency> { value: 789, code: 'AUD' },
      taxFree: <Currency> { value: 494, code: 'AUD' },
      taxableTaxed: <Currency> { value: 8979, code: 'AUD' },
      taxableUntaxed: <Currency> { value: 4894, code: 'AUD' },
      preserved: <Currency> { value: 849, code: 'AUD' },
      restrictedNonPreserved: <Currency> { value: 71714, code: 'AUD' },
      unrestrictedNonPreserved: <Currency> { value: 6491, code: 'AUD' },
      nominationType: 'None',
      beneficiaryName: 'Beneficiary Name',
      beneficiaryPercentage: '60'
    }],
    contributionHistories: <ISuperPensionsContributionsHistory[]> [
    {
      id: uuid(),
      contributionType: 'Concessional',
      owner: 'Client 1',
      financialYearEnding: '30 June 2016',
      amount: <Currency> { value: 849819, code: 'USD' }
    }],
    pensions: <ISuperPensionsPension[]> [{
      id: uuid(),
      fundName: 'Fund Name',
      fundMembership: 'Fund Membership',
      spin: 'SPIN',
      owner: 'Client 2',
      currentValue: <Currency> { value: 8498984811, code: 'USD' },
      apirTicker: 'APIR/TICKER',
      optionName: 'Option Name',
      amount: <Currency> { value: 7998498, code: 'USD' },
      purchaseDate: '2015-06-08',
      complyingCentrelinkPurposes: true,
      incomeDrawn: 'Max',
      incomeAmount: <Currency> { value: 5946, code: 'USD' },
      paymentFrequency: 'Monthly',
      currentDeathNomination: false,
      smsf: true,
      smsfGoals: true,
      reviewProduct: 'No',
      dateJoinedFund: '2010-09-12',
      joinedFundDetails: 'Joined Fund Details',
      surrenderValue: <Currency> { value: 789849, code: 'USD' },
      taxFree: <Currency> { value: 1213, code: 'USD' },
      taxableTaxed: <Currency> { value: 546, code: 'USD' },
      taxableUntaxed: <Currency> { value: 4486, code: 'USD' },
      preserved: <Currency> { value: 489, code: 'USD' },
      restrictedNonPreserved: <Currency> { value: 131, code: 'USD' },
      unrestrictedNonPreserved: <Currency> { value: 849, code: 'USD' },
      nominationType: 'None',
      beneficiaryName: 'Beneficiary Name',
      beneficiaryDetails: 'Beneficiary Details'
    },
    {
      id: uuid(),
      fundName: 'Fund Name',
      fundMembership: 'Fund Membership',
      spin: 'SPIN',
      owner: 'Client 1',
      currentValue: <Currency> { value: 8498984811, code: 'AUD' },
      apirTicker: 'APIR/TICKER',
      optionName: 'Option Name',
      amount: <Currency> { value: 7998498, code: 'AUD' },
      purchaseDate: '2015-06-08',
      complyingCentrelinkPurposes: false,
      incomeDrawn: 'Max',
      incomeAmount: <Currency> { value: 5946, code: 'AUD' },
      paymentFrequency: 'Annually',
      currentDeathNomination: true,
      smsf: false,
      smsfGoals: false,
      reviewProduct: 'Yes',
      dateJoinedFund: '2010-09-12',
      joinedFundDetails: 'Joined Fund Details',
      surrenderValue: <Currency> { value: 789849, code: 'AUD' },
      taxFree: <Currency> { value: 1213, code: 'AUD' },
      taxableTaxed: <Currency> { value: 546, code: 'AUD' },
      taxableUntaxed: <Currency> { value: 4486, code: 'AUD' },
      preserved: <Currency> { value: 489, code: 'AUD' },
      restrictedNonPreserved: <Currency> { value: 131, code: 'AUD' },
      unrestrictedNonPreserved: <Currency> { value: 849, code: 'AUD' },
      nominationType: 'Binding (Lapsing)',
      beneficiaryName: 'Beneficiary Name',
      beneficiaryDetails: 'Beneficiary Details'
    }],
    annuities: <ISuperPensionsAnnuities[]> [
    {
      id: uuid(),
      fundName: 'Fund Name',
      owner: 'Client 1',
      isSuperannuationAnnuity: true,
      centrelinkPurposes: false,
      dateOfPurchase: '2009-05-06',
      isTermAllocatedPension: false,
      initialInvestmentAmount: <Currency> { value: 78999991, code: 'USD' },
      currentValue: <Currency> { value: 52000000, code: 'USD' },
      centrelinkDeductibleAmount: <Currency> { value: 799999151, code: 'USD' },
      taxFreeComponent: <Currency> { value: 45000, code: 'USD' },
      taxableComponent: <Currency> { value: 899900, code: 'USD' },
      incomeDrawn: 'Min',
      otherIncomeAmount: <Currency> { value: 518190, code: 'USD' },
      paymentFrequency: 'Monthly',
      term: 'In years',
      years: 8,
      indexed: true,
      indexationRate: 0.25,
      residualCapitalValue: <Currency> { value: 90, code: 'USD' },
      reversionary: false,
      currentDeathNomination: false,
      details: 'Details...'
    }]
  };
