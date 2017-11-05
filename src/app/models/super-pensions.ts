import { IDataModel } from './base';
import {
  Frequency
} from '@data/base.reference';
import {
  AnnuitiesTerm,
  FinancialYearEnding
} from '@data/super-pensions.reference';
import { NominationType } from '@data/nomination.reference';
import { IncomeDrawn } from '@data/income.reference';
import { ContributionType } from '@data/contribution-type.reference';
import { Currency } from '@btas/common/currency';


export interface ISuperPensionsSuperannuation extends IDataModel {
  fundName: string;
  fundMembership: string;
  spin: string;
  owner: string;
  currentValue: Currency;
  apirTicker: string;
  optionName: string;
  amount: Currency;
  purchaseDate: string;
  regularContribution: Currency;
  superGuranteeContributions: Currency;
  regularConcessional: Currency;
  regularNonConcessional: Currency;
  regularOtherContributions: Currency;
  superChoice: boolean;
  currentDeathNomination: boolean;
  smsf: boolean;
  smsfGoals: boolean;
  containsInsurance: boolean;
  exitFundOnEmploymentTermination: boolean;
  reviewProduct: string;
  dateJoinedFund: string;
  joinedFundDetails: string;
  surrenderValue: Currency;
  taxFree: Currency;
  taxableTaxed: Currency;
  taxableUntaxed: Currency;
  preserved: Currency;
  restrictedNonPreserved: Currency;
  unrestrictedNonPreserved: Currency;
  nominationType: NominationType;
  beneficiaryName: string;
  beneficiaryPercentage: string;
}

export interface ISuperPensionsContributionsHistory extends IDataModel {
  contributionType: ContributionType;
  owner: string;
  financialYearEnding: FinancialYearEnding;
  amount: Currency;
}

export interface ISuperPensionsPension extends IDataModel {
  fundName: string;
  fundMembership: string;
  spin: string;
  owner: string;
  currentValue: Currency;
  apirTicker: string;
  optionName: string;
  amount: Currency;
  purchaseDate: string;
  complyingCentrelinkPurposes: boolean;
  incomeDrawn: IncomeDrawn;
  incomeAmount: Currency;
  paymentFrequency: Frequency;
  currentDeathNomination: boolean;
  smsf: boolean;
  smsfGoals: boolean;
  reviewProduct: string;
  dateJoinedFund: string;
  joinedFundDetails: string;
  surrenderValue: Currency;
  taxFree: Currency;
  taxableTaxed: Currency;
  taxableUntaxed: Currency;
  preserved: Currency;
  restrictedNonPreserved: Currency;
  unrestrictedNonPreserved: Currency;
  nominationType: NominationType;
  beneficiaryName: string;
  beneficiaryDetails: string;
}

export interface ISuperPensionsAnnuities extends IDataModel {
  fundName: string;
  owner: string;
  isSuperannuationAnnuity: boolean;
  centrelinkPurposes: boolean;
  dateOfPurchase: string;
  isTermAllocatedPension: boolean;
  initialInvestmentAmount: Currency;
  currentValue: Currency;
  centrelinkDeductibleAmount: Currency;
  taxFreeComponent: Currency;
  taxableComponent: Currency;
  incomeDrawn: IncomeDrawn;
  otherIncomeAmount: Currency;
  paymentFrequency: Frequency;
  term: AnnuitiesTerm;
  years: number;
  indexed: boolean;
  indexationRate: number;
  residualCapitalValue: Currency;
  reversionary: boolean;
  currentDeathNomination: boolean;
  details: string;
}

export interface ISuperPensions {
  superannuations: ISuperPensionsSuperannuation[];
  contributionHistories: ISuperPensionsContributionsHistory[];
  pensions: ISuperPensionsPension[];
  annuities: ISuperPensionsAnnuities[];
}

