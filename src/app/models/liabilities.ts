import { IDataModel } from './base';

import { Frequency } from '@data/base.reference';
import { Currency } from '@btas/common/currency';


export interface ILiabilitiesHomeMortgage extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  balanceOwing: Currency;
  startDate: string;
  availableLimit: Currency;
  interestRate: number;
  pAndIOrInterestOnly: string;
  termRemaining: number;
  repayment: Currency;
  repaymentFrequency: Frequency;
  taxDeductable: boolean;
  associatedOffsetAccount: boolean;
  accountName: string;
  totalInterestAmount: Currency;
  interestAmountDeductable: Currency;
  interestAmountNonDeductable: Currency;
  lender: string;
  loanGuarantor: boolean;
  nameOfGuarantor: string;
}


export interface ILiabilitiesPersonalLoan extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  balanceOwing: Currency;
  startDate: string;
  availableLimit: Currency;
  interestRate: number;
  pAndIOrInterestOnly: string;
  termRemaining: number;
  repayment: Currency;
  repaymentFrequency: Frequency;
  taxDeductable: boolean;
  totalInterestAmount: Currency;
  interestAmountDeductable: Currency;
  interestAmountNonDeductable: Currency;
  lender: string;
  linkToAsset: boolean;
  nameOfAsset: string;
}

export interface ILiabilitiesCreditCard extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  balanceOwing: Currency;
  availableLimit: Currency;
  interestRate: number;
  repayMonthlyBalance: boolean;
  repayment: Currency;
  repaymentFrequency: Frequency;
  taxDeductable: boolean;
  totalInterestAmount: Currency;
  lender: string;
}

export interface ILiabilitiesInvestmentLoan extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  balanceOwing: Currency;
  startDate: string;
  availableLimit: Currency;
  interestRate: number;
  pAndIOrInterestOnly: string;
  termRemaining: number;
  repayment: Currency;
  repaymentFrequency: Frequency;
  taxDeductable: boolean;
  associatedOffsetAccount: boolean;
  accountName: string;
  totalInterestAmount: Currency;
  interestAmountDeductable: Currency;
  interestAmountNonDeductable: Currency;
  lender: string;
  loanGuarantor: boolean;
  nameOfGuarantor: string;
}

export interface ILiabilitiesBusinessLoan extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  balanceOwing: Currency;
  startDate: string;
  availableLimit: Currency;
  interestRate: number;
  pAndIOrInterestOnly: string;
  termRemaining: number;
  repayment: Currency;
  repaymentFrequency: Frequency;
  taxDeductable: boolean;
  totalInterestAmount: Currency;
  interestAmountDeductable: Currency;
  interestAmountNonDeductable: Currency;
  lender: string;
  loanGuarantor: boolean;
  nameOfGuarantor: string;
}

export interface ILiabilitiesOtherLoan extends IDataModel {
  accountNumber: string;
  description: string;
  owner: string;
  balanceOwing: Currency;
  startDate: string;
  availableLimit: Currency;
  interestRate: number;
  pAndIOrInterestOnly: string;
  termRemaining: number;
  repayment: Currency;
  repaymentFrequency: Frequency;
  taxDeductable: boolean;
  totalInterestAmount: Currency;
  interestAmountDeductable: Currency;
  interestAmountNonDeductable: Currency;
  lender: string;
  loanGuarantor: boolean;
  nameOfGuarantor: string;
}


export interface ILiabilities {
  homeMortgages: ILiabilitiesHomeMortgage[];
  personalLoans: ILiabilitiesPersonalLoan[];
  creditCards: ILiabilitiesCreditCard[];
  investmentLoans: ILiabilitiesInvestmentLoan[];
  businessLoans: ILiabilitiesBusinessLoan[];
  otherLoans: ILiabilitiesOtherLoan[];
}
