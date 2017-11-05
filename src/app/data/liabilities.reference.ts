import {
  ILiabilities,
  ILiabilitiesHomeMortgage,
  ILiabilitiesPersonalLoan,
  ILiabilitiesCreditCard,
  ILiabilitiesInvestmentLoan,
  ILiabilitiesBusinessLoan,
  ILiabilitiesOtherLoan
} from '@btas/models/liabilities';
import {
  FrequencyOptions
} from '@data/base.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { Currency } from '@btas/common/currency';

import * as uuid from 'uuid/v4';

export const LIABILITIES_HOMEMORTGAGES_DEF = <IGroupPanelItem> {
  title: 'Home Mortgages',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'balanceOwing',
      title: 'Balance Owing',
      type: 'currency',
      readonly: true,
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input:text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'input:text'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'balanceOwing',
      title: 'Balance owing ($)',
      type: 'currency'
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'availableLimit',
      title: 'Available limit ($)',
      type: 'currency'
    },
    {
      name: 'interestRate',
      title: 'Interest rate',
      type: 'number'
    },
    {
      name: 'pAndIOrInterestOnly',
      title: 'P&I or interest only',
      type: 'radio',
      fieldSpan: 6,
      options: [
        {title: 'P&I', value: 'pAndI'},
        {title: 'Interest Only', value: 'interestOnly'}
      ]
    },
    {
      name: 'termRemaining',
      title: 'Term remaining (years)',
      type: 'number'
    },
    {
      name: 'repayment',
      title: 'Repayment ($)',
      type: 'currency'
    },
    {
      name: 'repaymentFrequency',
      title: 'Repayment frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'taxDeductable',
      title: 'Tax Deductible',
      type: 'radio'
    },
    {
      name: 'associatedOffsetAccount',
      title: 'Associated Offset Account?',
      type: 'radio'
    },
    {
      name: 'accountName',
      title: 'Account Name',
      type: 'select',
      options: '$.ClientOptions',
      hideWhen: '!associatedOffsetAccount'
    },
    {
      name: 'totalInterestAmount',
      title: 'Total interest amount (p.a)',
      type: 'currency'
    },
    {
      name: 'interestAmountDeductable',
      title: 'Interest amount (deductible)',
      type: 'currency'
    },
    {
      name: 'interestAmountNonDeductable',
      title: 'Interest amount (non-deductible) (p.a)',
      type: 'currency'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input:text'
    },
    {
      name: 'loanGuarantor',
      title: 'Loan Guarantor',
      type: 'radio'
    },
    {
      name: 'nameOfGuarantor',
      title: 'Name of Guarantor',
      type: 'input:text',
      hideWhen: '!loanGuarantor'
    }
  ],
  deletable: true
};

export const LIABILITIES_PERSONALLOANS_DEF = <IGroupPanelItem> {
  title: 'Personal Loans',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'balanceOwing',
      title: 'Balance Owing',
      type: 'currency',
      readonly: true,
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input:text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'input:text'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'balanceOwing',
      title: 'Balance owing ($)',
      type: 'currency'
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'availableLimit',
      title: 'Available limit ($)',
      type: 'currency'
    },
    {
      name: 'interestRate',
      title: 'Interest rate',
      type: 'number'
    },
    {
      name: 'pAndIOrInterestOnly',
      title: 'P&I or interest only',
      type: 'radio',
      fieldSpan: 6,
      options: [
        {title: 'P&I', value: 'pAndI'},
        {title: 'InterestOnly', value: 'interestOnly'}
      ]
    },
    {
      name: 'termRemaining',
      title: 'Term remaining (years)',
      type: 'number'
    },
    {
      name: 'repayment',
      title: 'Repayment ($)',
      type: 'currency'
    },
    {
      name: 'repaymentFrequency',
      title: 'Repayment frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'taxDeductable',
      title: 'Tax Deductible',
      type: 'radio'
    },
    {
      name: 'associatedOffsetAccount',
      title: 'Associated Offset Account?',
      type: 'radio'
    },
    {
      name: 'accountName',
      title: 'Account Name',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'totalInterestAmount',
      title: 'Total interest amount (p.a)',
      type: 'currency'
    },
    {
      name: 'interestAmountDeductable',
      title: 'Interest amount (deductible)',
      type: 'currency'
    },
    {
      name: 'interestAmountNonDeductable',
      title: 'Interest amount (non-deductible) (p.a)',
      type: 'currency'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input:text'
    },
    {
      name: 'linkToAsset',
      title: 'Linked to Asset?',
      type: 'radio'
    },
    {
      name: 'nameOfAsset',
      title: 'Name of Asset',
      type: 'input:text',
      hideWhen: '!linkToAsset'
    }
  ],
  deletable: true
};

export const LIABILITIES_CREDITCARDS_DEF = <IGroupPanelItem> {
  title: 'Credit Cards',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'balanceOwing',
      title: 'Balance Owing',
      type: 'currency',
      readonly: true,
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input:text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'input:text'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'balanceOwing',
      title: 'Balance owing ($)',
      type: 'currency'
    },
    {
      name: 'availableLimit',
      title: 'Available limit ($)',
      type: 'currency'
    },
    {
      name: 'interestRate',
      title: 'Interest rate',
      type: 'number'
    },
    {
      name: 'repayMonthlyBalance',
      title: 'Repay monthly balance in full?',
      type: 'radio'
    },
    {
      name: 'repayment',
      title: 'Repayment ($)',
      type: 'currency',
      hideWhen: 'repayMonthlyBalance'
    },
    {
      name: 'repaymentFrequency',
      title: 'Repayment frequency',
      type: 'select',
      options: FrequencyOptions,
      hideWhen: 'repayMonthlyBalance'
    },
    {
      name: 'taxDeductable',
      title: 'Tax Deductible',
      type: 'radio'
    },
    {
      name: 'totalInterestAmount',
      title: 'Total interest amount (p.a)',
      type: 'currency'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input:text'
    }
  ],
  deletable: true
};

export const LIABILITIES_INVESTMENTLOANS_DEF = <IGroupPanelItem> {
  title: 'Investment Loans',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'balanceOwing',
      title: 'Balance Owing',
      type: 'currency',
      readonly: true,
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input:text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'input:text'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'balanceOwing',
      title: 'Balance owing ($)',
      type: 'currency'
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'availableLimit',
      title: 'Available limit ($)',
      type: 'currency'
    },
    {
      name: 'interestRate',
      title: 'Interest rate',
      type: 'number'
    },
    {
      name: 'pAndIOrInterestOnly',
      title: 'P&I or interest only',
      type: 'radio',
      fieldSpan: 6,
      options: [
        {title: 'P&I', value: 'pAndI'},
        {title: 'Interest Only', value: 'interestOnly'}
      ]
    },
    {
      name: 'termRemaining',
      title: 'Term remaining (years)',
      type: 'number'
    },
    {
      name: 'repayment',
      title: 'Repayment ($)',
      type: 'currency'
    },
    {
      name: 'repaymentFrequency',
      title: 'Repayment frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'taxDeductable',
      title: 'Tax Deductible',
      type: 'radio'
    },
    {
      name: 'associatedOffsetAccount',
      title: 'Associated Offset Account?',
      type: 'radio'
    },
    {
      name: 'accountName',
      title: 'Account Name',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'totalInterestAmount',
      title: 'Total interest amount (p.a)',
      type: 'currency'
    },
    {
      name: 'interestAmountDeductable',
      title: 'Interest amount (deductible)',
      type: 'currency'
    },
    {
      name: 'interestAmountNonDeductable',
      title: 'Interest amount (non-deductible) (p.a)',
      type: 'currency'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input:text'
    },
    {
      name: 'loanGuarantor',
      title: 'Loan Guarantor',
      type: 'radio'
    },
    {
      name: 'nameOfGuarantor',
      title: 'Name of Guarantor',
      type: 'input:text',
      hideWhen: '!loanGuarantor'
    }
  ],
  deletable: true
};

export const LIABILITIES_BUSINESSLOANS_DEF = <IGroupPanelItem> {
  title: 'Business Loans',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'balanceOwing',
      title: 'Balance Owing',
      type: 'currency',
      readonly: true,
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input:text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'input:text'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'balanceOwing',
      title: 'Balance owing ($)',
      type: 'currency'
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'availableLimit',
      title: 'Available limit ($)',
      type: 'currency'
    },
    {
      name: 'interestRate',
      title: 'Interest rate',
      type: 'number'
    },
    {
      name: 'pAndIOrInterestOnly',
      title: 'P&I or interest only',
      type: 'radio',
      fieldSpan: 6,
      options: [
        {title: 'P&I', value: 'pAndI'},
        {title: 'Interest Only', value: 'interestOnly'}
      ]
    },
    {
      name: 'termRemaining',
      title: 'Term remaining (years)',
      type: 'number'
    },
    {
      name: 'repayment',
      title: 'Repayment ($)',
      type: 'currency'
    },
    {
      name: 'repaymentFrequency',
      title: 'Repayment frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'taxDeductable',
      title: 'Tax Deductible',
      type: 'radio'
    },
    {
      name: 'totalInterestAmount',
      title: 'Total interest amount (p.a)',
      type: 'currency'
    },
    {
      name: 'interestAmountDeductable',
      title: 'Interest amount (deductible)',
      type: 'currency'
    },
    {
      name: 'interestAmountNonDeductable',
      title: 'Interest amount (non-deductible) (p.a)',
      type: 'currency'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input:text'
    },
    {
      name: 'loanGuarantor',
      title: 'Loan Guarantor',
      type: 'radio'
    },
    {
      name: 'nameOfGuarantor',
      title: 'Name of Guarantor',
      type: 'input:text',
      hideWhen: '!loanGuarantor'
    }
  ],
  deletable: true
};

export const LIABILITIES_OTHERLOANS_DEF = <IGroupPanelItem> {
  title: 'Other Loans',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'text',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    },
    {
      name: 'balanceOwing',
      title: 'Balance Owing',
      type: 'currency',
      readonly: true,
      span: 4,
      fieldSpan: 12,
      labelSpan: 12
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input:text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'input:text'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions'
    },
    {
      name: 'balanceOwing',
      title: 'Balance owing ($)',
      type: 'currency'
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date'
    },
    {
      name: 'availableLimit',
      title: 'Available limit ($)',
      type: 'currency'
    },
    {
      name: 'interestRate',
      title: 'Interest rate',
      type: 'number'
    },
    {
      name: 'pAndIOrInterestOnly',
      title: 'P&I or interest only',
      type: 'radio',
      fieldSpan: 6,
      options: [
        {title: 'P&I', value: 'pAndI'},
        {title: 'Interest Only', value: 'interestOnly'}
      ]
    },
    {
      name: 'termRemaining',
      title: 'Term remaining (years)',
      type: 'number'
    },
    {
      name: 'repayment',
      title: 'Repayment ($)',
      type: 'currency'
    },
    {
      name: 'repaymentFrequency',
      title: 'Repayment frequency',
      type: 'select',
      options: FrequencyOptions
    },
    {
      name: 'taxDeductable',
      title: 'Tax Deductible',
      type: 'radio'
    },
    {
      name: 'totalInterestAmount',
      title: 'Total interest amount (p.a)',
      type: 'currency'
    },
    {
      name: 'interestAmountDeductable',
      title: 'Interest amount (deductible)',
      type: 'currency'
    },
    {
      name: 'interestAmountNonDeductable',
      title: 'Interest amount (non-deductible) (p.a)',
      type: 'currency'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input:text'
    },
    {
      name: 'loanGuarantor',
      title: 'Loan Guarantor',
      type: 'radio'
    },
    {
      name: 'nameOfGuarantor',
      title: 'Name of Guarantor',
      type: 'input:text',
      hideWhen: '!loanGuarantor'
    }
  ],
  deletable: true
};

export const LIABILITIES: ILiabilities =
<ILiabilities> {
  homeMortgages: <ILiabilitiesHomeMortgage[]> [{
    id: uuid(),
    accountNumber: '123456',
    description: 'this is mine',
    owner: 'Client 1',
    balanceOwing: <Currency> { value: 20, code: 'USD'},
    startDate: '2017-02-04',
    availableLimit: <Currency> { value: 20, code: 'USD'},
    interestRate: 10,
    pAndIOrInterestOnly: 'pAndI',
    termRemaining: 3,
    repayment : <Currency> { value: 20, code: 'USD'},
    repaymentFrequency: 'Annual',
    taxDeductable: true,
    associatedOffsetAccount: false,
    accountName: 'Client 2',
    totalInterestAmount: <Currency> { value: 20, code: 'USD'},
    interestAmountDeductable: <Currency> { value: 20, code: 'USD'},
    interestAmountNonDeductable: <Currency> { value: 20, code: 'USD'},
    lender: 'me',
    loanGuarantor: true,
    nameOfGuarantor: 'John'
  }],
  personalLoans: <ILiabilitiesPersonalLoan[]> [{
    id: uuid(),
    accountNumber: '123456',
    description: 'this is mine',
    owner: 'Client 1',
    balanceOwing: <Currency> { value: 20, code: 'USD'},
    startDate: '2017-02-04',
    availableLimit: <Currency> { value: 20, code: 'USD'},
    interestRate: 10,
    pAndIOrInterestOnly: 'pAndI',
    termRemaining: 3,
    repayment : <Currency> { value: 20, code: 'USD'},
    repaymentFrequency: 'Annual',
    taxDeductable: true,
    totalInterestAmount: <Currency> { value: 20, code: 'USD'},
    interestAmountDeductable: <Currency> { value: 20, code: 'USD'},
    interestAmountNonDeductable: <Currency> { value: 20, code: 'USD'},
    lender: 'me',
    linkToAsset: true,
    nameOfAsset: 'John'
  }],
  creditCards: <ILiabilitiesCreditCard[]> [{
    id: uuid(),
    accountNumber: '123456',
    description: 'this is mine',
    owner: 'Client 1',
    balanceOwing: <Currency> { value: 20, code: 'USD'},
    availableLimit: <Currency> { value: 20, code: 'USD'},
    interestRate: 10,
    repayMonthlyBalance: true,
    repayment : <Currency> { value: 20, code: 'USD'},
    repaymentFrequency: 'Annual',
    taxDeductable: true,
    totalInterestAmount: <Currency> { value: 20, code: 'USD'},
    lender: 'me'
  }],
  investmentLoans: <ILiabilitiesInvestmentLoan[]> [{
    id: uuid(),
    accountNumber: '123456',
    description: 'this is mine',
    owner: 'Client 1',
    balanceOwing: <Currency> { value: 20, code: 'USD'},
    startDate: '2017-02-04',
    availableLimit: <Currency> { value: 20, code: 'USD'},
    interestRate: 10,
    pAndIOrInterestOnly: 'pAndI',
    termRemaining: 3,
    repayment : <Currency> { value: 20, code: 'USD'},
    repaymentFrequency: 'Annual',
    taxDeductable: true,
    associatedOffsetAccount: false,
    accountName: 'Client 2',
    totalInterestAmount: <Currency> { value: 20, code: 'USD'},
    interestAmountDeductable: <Currency> { value: 20, code: 'USD'},
    interestAmountNonDeductable: <Currency> { value: 20, code: 'USD'},
    lender: 'me',
    loanGuarantor: false,
    nameOfGuarantor: 'John'
  }],
  businessLoans: <ILiabilitiesBusinessLoan[]> [{
    id: uuid(),
    accountNumber: '123456',
    description: 'this is mine',
    owner: 'Client 1',
    balanceOwing: <Currency> { value: 20, code: 'USD'},
    startDate: '2017-02-04',
    availableLimit: <Currency> { value: 20, code: 'USD'},
    interestRate: 10,
    pAndIOrInterestOnly: 'pAndI',
    termRemaining: 3,
    repayment : <Currency> { value: 20, code: 'USD'},
    repaymentFrequency: 'Annual',
    taxDeductable: true,
    totalInterestAmount: <Currency> { value: 20, code: 'USD'},
    interestAmountDeductable: <Currency> { value: 20, code: 'USD'},
    interestAmountNonDeductable: <Currency> { value: 20, code: 'USD'},
    lender: 'me',
    loanGuarantor: false,
    nameOfGuarantor: 'John'
  }],
  otherLoans: <ILiabilitiesOtherLoan[]> [{
    id: uuid(),
    accountNumber: '123456',
    description: 'this is mine',
    owner: 'Client 1',
    balanceOwing: <Currency> { value: 20, code: 'USD'},
    startDate: '2017-02-04',
    availableLimit: <Currency> { value: 20, code: 'USD'},
    interestRate: 10,
    pAndIOrInterestOnly: 'pAndI',
    termRemaining: 3,
    repayment : <Currency> { value: 20, code: 'USD'},
    repaymentFrequency: 'Annual',
    taxDeductable: true,
    totalInterestAmount: <Currency> { value: 20, code: 'USD'},
    interestAmountDeductable: <Currency> { value: 20, code: 'USD'},
    interestAmountNonDeductable: <Currency> { value: 20, code: 'USD'},
    lender: 'me',
    loanGuarantor: false,
    nameOfGuarantor: 'John'
  }]
};
