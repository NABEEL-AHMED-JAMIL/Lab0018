import { IDataModel } from './base';
import { ReferralType } from '@data/referral.reference';


export interface IReferral extends IDataModel {
  referralName: string;
  type: ReferralType;
  furtherDetails: string;
}
