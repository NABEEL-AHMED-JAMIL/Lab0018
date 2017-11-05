import { IDataModel } from './base';
import { Currency } from '@btas/common/currency';
import {
  PremiumStructureType,
  OccupationDefinitionType,
  LinkedStandaloneType,
  MemberEmployerFundedType,
  BenefitType,
  UnitisedFixedType
} from '@data/personal-insurance.reference';
import { Frequency } from '@data/base.reference';


export interface ILifeCoverType extends IDataModel {
  productName: string;
  insuranceProvider: string;
  policyOwner: string;
  // still under work
  amount: Currency;
  policyNo: string;
  productCode: string;
  commencementDate: string;
  lifeInsured: string;
  premium: Currency;
  premiumFrequency: Frequency;
  premiumStructure: PremiumStructureType;
  hybridPremiumDetails: string;
  features: string;
  isPolicyUnderwritten: boolean;
  underwriter: string;
  underwritingDetails: string;
  loadingExclusionsExist: boolean;
  details: string;
  reviewPolicy: boolean;
  indexationlinked: boolean;
  childInsuranceAttached: boolean;
  childInsuranceDetail: string;
  needlestickAttached: boolean;
  premiumSplit: boolean;
  customerOnePremiumSplit: Currency;
  customerTwoPremiumSplit: Currency;
  coverDefault: boolean;
  unitisedFixed: UnitisedFixedType;
  masterTrustPay: boolean;
  masterTrustFund: string;
  coverMember: MemberEmployerFundedType;
  splitDetail: string;
  coversAccidentalDeath: false;
  occupationTPDFund: boolean;
  medicalEvents: string;
  coverAccidentalDeath: boolean;
  productFlexi: boolean;
  premiumByClient: Currency;
  canPolicyBeSwitched: boolean;
  policySwitchProcedure: string;
  benefitAmount: boolean;
  additionalCoverTypes: boolean;
  requireUnderwriting: boolean;
  decreaseIncreaseAge: boolean;
  age: number;
  coverExpiration: string;
  cancellationProcedure: string;
}

export interface ITPDCoverType extends IDataModel {
  productName: string;
  insuranceProvider: string;
  policyOwner: string;
  // still under work
  amount: Currency;
  policyNo: string;
  productCode: string;
  commencementDate: string;
  lifeInsured: string;
  premium: Currency;
  premiumFrequency: Frequency;
  premiumStructure: PremiumStructureType;
  hybridPremiumDetails: string;
  features: string;
  isPolicyUnderwritten: boolean;
  underwriter: string;
  underwritingDetails: string;
  loadingExclusionsExist: boolean;
  details: string;
  reviewPolicy: boolean;
  occupationDefinition: OccupationDefinitionType;
  indexationlinked: boolean;
  linkedStandalone: LinkedStandaloneType;
  buyBackReinstatement: boolean;
  childInsuranceAttached: boolean;
  childInsuranceDetail: string;
  needlestickAttached: boolean;
  premiumSplit: boolean;
  customerOnePremiumSplit: Currency;
  customerTwoPremiumSplit: Currency;
  coverDefault: boolean;
  unitisedFixed: UnitisedFixedType;
  masterTrustPay: boolean;
  masterTrustFund: string;
  coverMember: MemberEmployerFundedType;
  splitDetail: string;
  occupationTPDFund: boolean;
  medicalEvents: string;
  productFlexi: boolean;
  premiumByClient: Currency;
  canPolicyBeSwitched: boolean;
  policySwitchProcedure: string;
  benefitAmount: boolean;
  additionalCoverTypes: boolean;
  requireUnderwriting: boolean;
  decreaseIncreaseAge: boolean;
  age: number;
  coverExpiration: string;
  cancellationProcedure: string;
}

export interface ITraumaCoverType extends IDataModel {
  productName: string;
  insuranceProvider: string;
  policyOwner: string;
  // still under work
  amount: Currency;
  policyNo: string;
  productCode: string;
  commencementDate: string;
  lifeInsured: string;
  premium: Currency;
  premiumFrequency: Frequency;
  premiumStructure: PremiumStructureType;
  hybridPremiumDetails: string;
  features: string;
  isPolicyUnderwritten: boolean;
  underwriter: string;
  underwritingDetails: string;
  loadingExclusionsExist: boolean;
  details: string;
  reviewPolicy: boolean;
  indexationlinked: boolean;
  linkedStandalone: LinkedStandaloneType;
  buyBackReinstatement: boolean;
  childInsuranceAttached: boolean;
  childInsuranceDetail: string;
  needlestickAttached: boolean;
  premiumSplit: boolean;
  customerOnePremiumSplit: Currency;
  customerTwoPremiumSplit: Currency;
  coverDefault: boolean;
  unitisedFixed: UnitisedFixedType;
  masterTrustPay: boolean;
  masterTrustFund: string;
  coverMember: MemberEmployerFundedType;
  splitDetail: string;
  occupationTPDFund: boolean;
  medicalEvents: string;
  canPolicyBeSwitched: boolean;
  policySwitchProcedure: string;
  benefitAmount: boolean;
  additionalCoverTypes: boolean;
  requireUnderwriting: boolean;
  decreaseIncreaseAge: boolean;
  age: number;
  coverExpiration: string;
  cancellationProcedure: string;
  premiumByClient: Currency;
}

export interface IIncomeProtectionCoverType extends IDataModel {
  productName: string;
  insuranceProvider: string;
  policyOwner: string;
  // still under work
  amount: Currency;
  policyNo: string;
  productCode: string;
  commencementDate: string;
  lifeInsured: string;
  premium: Currency;
  premiumFrequency: Frequency;
  premiumStructure: PremiumStructureType;
  hybridPremiumDetails: string;
  features: string;
  isPolicyUnderwritten: boolean;
  underwriter: string;
  underwritingDetails: string;
  loadingExclusionsExist: boolean;
  details: string;
  reviewPolicy: boolean;
  occupationDefinition: OccupationDefinitionType;
  benefitType: BenefitType;
  indexationlinked: boolean;
  childInsuranceAttached: boolean;
  childInsuranceDetail: string;
  needlestickAttached: boolean;
  premiumSplit: boolean;
  customerOnePremiumSplit: Currency;
  customerTwoPremiumSplit: Currency;
  coverDefault: boolean;
  unitisedFixed: UnitisedFixedType;
  masterTrustPay: boolean;
  masterTrustFund: string;
  coverMember: MemberEmployerFundedType;
  splitDetail: string;
  occupationTPDFund: boolean;
  medicalEvents: string;
  containsTPDoption: boolean;
  allBenefitPeriodsOffered: string;
  waitingPeriodsOffered: string;
  occupationCategory: string;
  canPolicyBeSwitched: boolean;
  policySwitchProcedure: string;
  benefitAmount: boolean;
  additionalCoverTypes: boolean;
  requireUnderwriting: boolean;
  decreaseIncreaseAge: boolean;
  age: number;
  coverExpiration: string;
  cancellationProcedure: string;
  premiumByClient: Currency;
}

export interface IPersonalInsurance {
  lifeCoverType: ILifeCoverType[];
  tpdCoverType: ITPDCoverType[];
  traumaCoverType: ITraumaCoverType[];
  incomeProtectionCoverType: IIncomeProtectionCoverType[];
}
