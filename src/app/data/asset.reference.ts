import {
  IAsset,
  IAssetInvestmentProperty,
  IAssetLifeStyle,
  IAssetCashAndFixedInterest,
  IAssetSharesAndManagedFunds,
  IAssetBusiness,
  IAssetOther
} from '@btas/models/asset';
import {
  WorkingHourFrequencyOptions
} from '@data/employment.reference';
import {
  FrequencyOptions
} from '@data/base.reference';
import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { AssetTypeOptions } from '@data/asset-type.reference';
import { Currency } from '@btas/common/currency';

import * as uuid from 'uuid/v4';


export const ASSET_LIFESTYLE_DEF = <IGroupPanelItem> {
  title: 'Lifestyle Assets',
  subtitle: '',
  summary: [
    {
      name: 'assetType',
      title: 'Asset Type',
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
      name: 'currentValue',
      title: 'Amount',
      type: 'currency',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12,
      readonly: true
    }
  ],
  fields: [
    {
      name: 'assetType',
      title: 'Asset Type',
      type: 'select',
      options: AssetTypeOptions
    },
    {
      name: 'customAssetType',
      title: 'Please specify',
      type: 'input',
      hideWhen: "assetType != 'Other'"
    },
    {
      name: 'assetDescription',
      title: 'Asset description',
      type: 'input'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions + $.ClientOptions',
      // if we need to concat the dynamic options, use "+"
      // options: '$.ClientOptions + $.ClientOptions'
    },
    {
      name: 'currentValue',
      title: 'Current value',
      type: 'currency'
    },
    {
      name: 'purchaseDate',
      title: 'Purchase date',
      type: 'date'
    },
    {
      name: 'centrelinkValue',
      title: 'Centrelink value ($)',
      type: 'currency'
    },
    {
      name: 'insured',
      title: 'Insured',
      type: 'checkbox'
    },
    {
      name: 'loanExists',
      title: 'Loan exists',
      type: 'checkbox'
    }
  ],
  deletable: true
};

export const ASSET_CASHANDFIXEDINTEREST_DEF = <IGroupPanelItem> {
  title: 'Cash & Fixed Interests',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Asset Description',
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
      name: 'currentValue',
      title: 'Amount',
      type: 'currency',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12,
      readonly: true
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input'
    },
    {
      name: 'description',
      title: 'Description',
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
      name: 'dateOpened',
      title: 'Date Opened',
      type: 'date'
    },
    {
      name: 'interestRate',
      title: 'Interest rate (pa)',
      type: 'number'
    },
    {
      name: 'interestReinvested',
      title: 'Interest reinvested',
      type: 'checkbox'
    },
    {
      name: 'totalInterestIncome',
      title: 'Total interest / income',
      type: 'text'
    },
    {
      name: 'interestIncomeReceived',
      title: 'Interest/income received',
      type: 'text'
    },
    {
      name: 'averageAnnualGrowth',
      title: 'Average annual growth',
      type: 'number'
    },
    {
      name: 'regularSavingPlan',
      title: 'Regular Savings Plan applies?',
      type: 'checkbox'
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'currency',
      hideWhen: '!regularSavingPlan'
    },
    {
      name: 'frequency',
      title: 'Frequency',
      type: 'select',
      options: FrequencyOptions,
      hideWhen: '!regularSavingPlan'
    },
    {
      name: 'dateMaturity',
      title: 'Maturity date',
      type: 'date'
    },
    {
      name: 'wishToReviewAsset',
      title: 'Do you wish to review this asset?',
      type: 'checkbox'
    }
  ],
  deletable: true
};

export const ASSET_SHARESMANAGEDFUNDS_DEF = <IGroupPanelItem> {
  title: 'Shares & Managed Funds',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Asset Description',
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
      name: 'currentValue',
      title: 'Amount',
      type: 'currency',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12,
      readonly: true
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input'
    },
    {
      name: 'description',
      title: 'Description',
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
      type: 'string'
    },
    {
      name: 'optionName',
      title: 'Option Name',
      type: 'string'
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
      name: 'ppurchaseDate',
      title: 'Purchase date',
      type: 'date'
    },
    {
      name: 'purchasePrice',
      title: 'Purchase price',
      type: 'currency'
    },
    {
      name: 'numberOfUnitsShares',
      title: 'No. units/shares',
      type: 'input'
    },
    {
      name: 'incomeReinvested',
      title: 'Income reinvested',
      type: 'radio'
    },
    {
      name: 'totalInterestDollars',
      title: 'Total interest / income ($)',
      type: 'text'
    },
    {
      name: 'totalInterestPercentage',
      title: 'Total interest/income (%)',
      type: 'percentage'
    },
    {
      name: 'frankedIncome',
      title: 'Franked Income (%)',
      type: 'percentage'
    },
    {
      name: 'averageAnnualGrowth',
      title: 'Average annual growth',
      type: 'percentage'
    },
    {
      name: 'regularSavingsPlan',
      title: 'Regular Savings Plan applies?',
      type: 'radio'
    },
    {
      name: 'regularSavingsOwner',
      title: 'Owner',
      type: 'select',
      options: '$.ClientOptions',
      hideWhen: '!regularSavingsPlan'
    },
    {
      name: 'regularSavingsAmount',
      title: 'Amount',
      type: 'currency',
      hideWhen: '!regularSavingsPlan'
    },
    {
      name: 'frequency',
      title: 'Frequency',
      type: 'select',
      options: WorkingHourFrequencyOptions,
      hideWhen: '!regularSavingsPlan'
    },
    {
      name: 'geared',
      title: 'Geared',
      type: 'radio'
    },
    {
      name: 'reviewAsset',
      title: 'Do you wish to review this asset?',
      type: 'checkbox'
    }
  ],
  deletable: true
};

export const ASSET_INVESTMENTPROPERTY_DEF = <IGroupPanelItem> {
  title: 'Investment Property',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Asset Description',
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
      name: 'currentValue',
      title: 'Amount',
      type: 'currency',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12,
      readonly: true
    }
  ],
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'input'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'input'
    },
    {
      name: 'currentValue',
      title: 'Current value',
      type: 'currency'
    },
    {
      name: 'purchaseDate',
      title: 'Purchase date',
      type: 'date'
    },
    {
      name: 'purchasePrice',
      title: 'Purchase price',
      type: 'currency'
    },
    {
      name: 'rentalIncome',
      title: 'Rental income (p.a)',
      type: 'currency'
    },
    {
      name: 'averageAnnualGrowth',
      title: 'Average annual growth',
      type: 'number'
    },
    {
      name: 'expenses',
      title: 'Expenses (p.a.)',
      type: 'currency'
    },
    {
      name: 'mortgaged',
      title: 'Mortgaged',
      type: 'radio'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input',
      hideWhen: '!mortgaged'
    },
    {
      name: 'insured',
      title: 'Insured',
      type: 'radio'
    }
  ],
  deletable: true
};

export const ASSET_BUSINESS_DEF = <IGroupPanelItem> {
  title: 'Business Assets',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Asset Description',
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
      name: 'currentValue',
      title: 'Amount',
      type: 'currency',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12,
      readonly: true
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input'
    },
    {
      name: 'description',
      title: 'Asset Description',
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
      title: 'Current Value',
      type: 'currency'
    },
    {
      name: 'incomeReceived',
      title: 'Income Received',
      type: 'currency'
    },
    {
      name: 'incomeReinvested',
      title: 'Income Reinvested',
      type: 'radio'
    },
    {
      name: 'averageAnnualGrowth',
      title: 'Average Annual Growth',
      type: 'percentage'
    },
    {
      name: 'purchaseDate',
      title: 'Purchase Date',
      type: 'date'
    },
    {
      name: 'purchasePrice',
      title: 'Purchase Price',
      type: 'currency'
    },
    {
      name: 'centrelinkValue',
      title: 'Centrelink Value',
      type: 'currency'
    },
    {
      name: 'isInsured',
      title: 'Insured',
      type: 'radio'
    },
    {
      name: 'loanExists',
      title: 'Loan Exists?',
      type: 'radio'
    },
    {
      name: 'lender',
      title: 'Lender',
      type: 'input',
      hideWhen: '!loanExists'
    }
  ],
  deletable: true
};

export const ASSET_OTHER_DEF = <IGroupPanelItem> {
  title: 'Other Assets',
  subtitle: '',
  summary: [
    {
      name: 'description',
      title: 'Asset Description',
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
      name: 'currentValue',
      title: 'Amount',
      type: 'currency',
      span: 4,
      fieldSpan: 12,
      labelSpan: 12,
      readonly: true
    }
  ],
  fields: [
    {
      name: 'accountNumber',
      title: 'Account Number',
      type: 'input'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'input'
    },
    {
      name: 'owner',
      title: 'Owner',
      type: 'Owner'
    },
    {
      name: 'currentValue',
      title: 'Current Value',
      type: 'currency'
    },
    {
      name: 'incomeReceived',
      title: 'Income Received',
      type: 'currency'
    },
    {
      name: 'incomeReinvested',
      title: 'Income Reinvested',
      type: 'currency'
    },
    {
      name: 'averageAnnualGrowth',
      title: 'Average Annual Growth',
      type: 'percentage'
    },
    {
      name: 'purchaseDate',
      title: 'Purchase Date',
      type: 'date'
    },
    {
      name: 'purchaseValue',
      title: 'Purchase Value',
      type: 'currency'
    },
    {
      name: 'centrelinkValue',
      title: 'Centrelink Value',
      type: 'currency'
    },
    {
      name: 'isInsured',
      title: 'Insured',
      type: 'radio'
    },
    {
      name: 'loanExists',
      title: 'Loan Exists?',
      type: 'radio'
    }
  ],
  deletable: true
};

export const ASSETS: IAsset =
  <IAsset> {
    lifeStyles: <IAssetLifeStyle[]> [{
      id: uuid(),
      assetType: 'Holiday house',
      customAssetType: 'None',
      assetDescription: 'Beach House',
      owner: 'Joint',
      currentValue: '858556',
      purchaseDate: '2017-02-10',
      centrelinkValue: '858557',
      insured: true,
      loanExists: false
    }],
    cashAndFixedInterests: <IAssetCashAndFixedInterest[]> [{
      id: uuid(),
      accountNumber: '1111-1111111-11111',
      description: 'Added cash into account for fixed anual commision',
      owner: 'Joint',
      currentValue: '858556',
      dateOpened: '2012-02-10',
      interestRate: 10,
      interestReinvested: true,
      totalInterestIncome: '2000000',
      interestIncomeReceived: '20000',
      averageAnnualGrowth: 3,
      regularSavingPlan: true,
      amount: '858556',
      frequency: 'Weekly',
      dateMaturity: '2025-02-10',
      wishToReviewAsset: false
    }],
    sharesAndManagedFunds: <IAssetSharesAndManagedFunds[]> [{
      id: uuid(),
      accountNumber: 'Account Number',
      description: 'Description',
      owner: 'Client 2',
      currentValue: 'Current Value',
      apirTicker: 'APIR/ Ticker',
      optionName: 'Option Name',
      amount: 1556,
      purchaseDate: '2015-02-25',
      ppurchaseDate: '2015-02-25',
      purchasePrice: 'Purchase Price',
      numberOfUnitsShares: 88,
      incomeReinvested: true,
      totalInterestDollars: 5456,
      totalInterestPercentage: 498,
      frankedIncome: 156,
      averageAnnualGrowth: 48949,
      regularSavingsPlan: false,
      regularSavingsOwner: 'Client 1',
      regularSavingsAmount: 7,
      frequency: 'Weekly',
      geared: true,
      reviewAsset: 'Review Asset'
    }],
    investmentProperties: <IAssetInvestmentProperty[]> [{
      id: uuid(),
      description: 'Description',
      owner: 'Client 1',
      currentValue: 'Current Value',
      purchaseDate: '2017-02-10',
      purchasePrice: '858556',
      rentalIncome: '85000',
      averageAnnualGrowth: 5,
      expenses: 'Expenses',
      mortgaged: true,
      lender: 'Lender',
      insured: false
    }],
    business: <IAssetBusiness[]> [{
      id: uuid(),
      accountNumber: 'Account Number',
      description: 'Description',
      owner: 'Joint',
      currentValue: <Currency> { value: 50000, code: 'AUD'},
      incomeReceived: <Currency> { value: 25000, code: 'AUD'},
      incomeReinvested: true,
      averageAnnualGrowth: 20,
      purchaseDate: '2012-05-16',
      purchasePrice: <Currency> { value: 30000, code: 'AUD'},
      centrelinkValue: <Currency> { value: 60000, code: 'AUD'},
      isInsured: false,
      loanExists: true,
      lender: 'Lender'
    }],
    other: <IAssetOther[]> [{
      id: uuid(),
      // null and undefined tests for input display changes in group-panel-item
      accountNumber: null,
      description: undefined,
      owner: 'Client 1',
      centrelinkValue: 100,
      currentValue: 100,
      purchaseDate: '2017-02-10',
      purchaseValue: 858556,
      incomeRecieved: 85000,
      incomeReinvested: 5,
      averageAnnualGrowth: 5,
      // null & false radio test, 'true' tests are everywhere else
      loanExists: null,
      isInsured: false
    }]

  };
