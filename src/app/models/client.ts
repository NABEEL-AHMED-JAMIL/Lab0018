import { IDataModel } from './base';
import { IAddress } from '@btas/common/address';
import { Occupation } from '@data/occupation.reference';
import { HealthStatus, PrivateHealthCover } from '@data/health-status.reference';
import {
  EmploymentStatus, SelfEmployedBusinessStructure,
  SalaryPackagingPermission
} from '@data/employment.reference';
import {
  Gender, Frequency, Relationship,
  AMLIdentification,
  BeforeAfterTax,
  ContactMethod
} from '@data/base.reference';

import * as uuid from 'uuid/v4';


export type ClientType = 'Primary' | 'Partner';
export type Clients = { main: IClient, secondary?: IClient };


export interface IClientKeyInfo extends IDataModel {
  customerKey: number;
  title: string;
  surname: string;
  givenName: string;
  fullName?: string;
  preferredName: string;
  gender: Gender;
  maritalStatus: string;
  dateOfBirth: string;
  age: number;
  relationship: string;
  type: ClientType;
}


export interface IClientOtherInfo extends IDataModel {
  healthStatus: HealthStatus;
  poorDetails: string;
  pursuit: boolean;
  pursuitDetails: string;
  smoker: boolean;
  healthCover: boolean;
  healthCoverType: PrivateHealthCover;
  consideration: boolean;
  considerationDetails: string;
  healthIssue: boolean;
  healthIssueDetails: string;
}


export interface IClientContactInfo extends IDataModel {
  residentialAddress: IAddress;
  postalAddressSameAsResidential: boolean;
  postalAddress: IAddress;
  postalAddressPO: boolean;
  homePhone: string;
  businessPhone: string;
  mobile: string;
  email: string;
  preferredContactMethod: ContactMethod;
}


export interface IClientEmployment extends IDataModel {
  employmentStatus: EmploymentStatus;
  preservationAge: number;
  retirementAge: number;
  yearsToRetirement: number;
  occupation: Occupation;
  salary: string;
  frequency: Frequency;
  beforeOrAfterTax: BeforeAfterTax;
  annualIncomeBeforeTax: string;
  workingHours: number;
  workingHoursFrequency: Frequency;
  plannedChanges: boolean;
  occupationChangesDetails: string;
  employerName: string;
  employerPhone: string;
  employerAddress: IAddress;
  startDate: string;
  employerSuperGuarantee: number;
  participateSalaryPackaging: boolean;
  salaryPackagingAvailable: SalaryPackagingPermission;
  salaryPackagingDetails: string;
  accruedAnnualLeave: boolean;
  accruedAnnualLeaveHours: number;
  accruedSickLeave: boolean;
  accruedSickLeaveHours: number;
  accruedLongServiceLeave: boolean;
  accruedLongServiceLeaveHours: number;
  selfEmployedBusinessStructure: SelfEmployedBusinessStructure;
  ownership: number;
  discussBusinessNeedsOrGoals: boolean;
}


export interface IClientIdentification extends IDataModel {
  employedByWestpacGroup: boolean;
  australianForTaxPurposes: boolean;
  countryOfResidence: string;
  visa188Applicant: boolean;
  fluentEnglish: boolean;
  interpreterRequired: boolean;
  hazardousPursuits: string;
  amlIdentification: AMLIdentification;
}


export interface IClientThirdParty extends IDataModel {
  thirdPartyName: string;
  phone: string;
  email: string;
  relationship: Relationship;
  other: string;
  thirdPartyConsultation: boolean;
  otherBackgroundDetail: string;
}


export interface IClient extends IDataModel {
  keyInfo: IClientKeyInfo;
  otherInfo: IClientOtherInfo;
  contactInfo: IClientContactInfo;
  employmentInfo: IClientEmployment;
  identification: IClientIdentification;
  thirdParty?: IClientThirdParty;
}


export function newClient() {
  return <IClient> {
    id: uuid(),
    keyInfo: { id: uuid() },
    otherInfo: { id: uuid() },
    contactInfo: { id: uuid() },
    employmentInfo: { id: uuid() },
    identification: { id: uuid() },
    thirdParty: { id: uuid() }
  };
}
