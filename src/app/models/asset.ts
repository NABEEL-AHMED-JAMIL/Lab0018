import { IDataModel } from './base';
import { AssetType } from '@data/asset-type.reference';
import { Frequency } from '@data/base.reference';
import { Currency } from '@btas/common/currency';


export interface IAsset {
  lifeStyles: IAssetLifeStyle[];
  cashAndFixedInterests: IAssetCashAndFixedInterest[];
  sharesAndManagedFunds: IAssetSharesAndManagedFunds[];
  investmentProperties: IAssetInvestmentProperty[];
  business: IAssetBusiness[];
  other: IAssetOther[];
}


export interface IAssetLifeStyle extends IDataModel {
  assetType: AssetType;
  customAssetType: string;
  assetDescription: string;
  owner: string;
  currentValue: string;
  purchaseDate: string;
  centrelinkValue: string;
  insured: boolean;
  loanExists: boolean;
}


export interface IAssetCashAndFixedInterest extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  currentValue: string;
  dateOpened: string;
  interestRate: number;
  interestReinvested: boolean;
  totalInterestIncome: string;
  interestIncomeReceived: string;
  averageAnnualGrowth: number;
  regularSavingPlan: boolean;
  amount: string;
  frequency: Frequency;
  dateMaturity: string;
  wishToReviewAsset: boolean;
}


export interface IAssetSharesAndManagedFunds extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  currentValue: string;
  apirTicker: string;
  optionName: string;
  amount: number;
  purchaseDate: string;
  ppurchaseDate: string;
  purchasePrice: string;
  numberOfUnitsShares: number;
  incomeReinvested: boolean;
  totalInterestDollars: number;
  totalInterestPercentage: number;
  frankedIncome: number;
  averageAnnualGrowth: number;
  regularSavingsPlan: boolean;
  regularSavingsOwner: string;
  regularSavingsAmount: number;
  frequency: string;
  geared: boolean;
  reviewAsset: string;
}


export interface IAssetInvestmentProperty extends IDataModel {
  description: string;
  owner: string;
  currentValue: string;
  purchaseDate: string;
  purchasePrice: string;
  rentalIncome: string;
  averageAnnualGrowth: number;
  expenses: string;
  mortgaged: boolean;
  lender: string;
  insured: boolean;
}

export interface IAssetBusiness extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  currentValue: Currency;
  incomeReceived: Currency;
  incomeReinvested: boolean;
  averageAnnualGrowth: number;
  purchaseDate: string;
  purchasePrice: Currency;
  centrelinkValue: Currency;
  isInsured: boolean;
  loanExists: boolean;
  lender: string;
}

export interface IAssetOther extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  currentValue: number;
  incomeRecieved: number;
  incomeReinvested: number;
  averageAnnualGrowth: number;
  purchaseDate: string;
  purchaseValue: number;
  centrelinkValue: number;
  isInsured: boolean;
  loanExists: boolean;
}
