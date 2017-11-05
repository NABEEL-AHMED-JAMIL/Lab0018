import { IDataModel } from './base';
import { SuperBeneficiary } from '@data/super-beneficiary.reference';
import { NominationPermission } from '@data/death-nomination.reference';


export interface IEstatePlanningWill extends IDataModel {
  hasWill: boolean;
  willDetails?: string;
  intendedBeneficiary?: string;
  lastUpdated?: string;
  willWishesCurrent?: boolean;
  whereIsWillKept?: string;
  executorDetails?: string;
}


export interface IEstatePlanningDeathNomination extends IDataModel {
  superBeneficiary: SuperBeneficiary;
  deathNominationPrepared?: NominationPermission;
  deathNominationCurrent?: NominationPermission;
  partnerPercentage?: string;
  childrenPercentage?: string;
  otherPercentage?: string;
  intendedBeneficiary?: string;
}


export interface IEstatePlanningPowerOfAttorney extends IDataModel {
  hasPowerOfAttorney: boolean;
  powerOfAttorneyType?: string;
  otherAttorneyType: string;
  details: string;
}


export interface IEstatePlanning {
  will?: IEstatePlanningWill[];
  deathNomination?: IEstatePlanningDeathNomination[];
  powerOfAttorney: IEstatePlanningPowerOfAttorney[];
}
