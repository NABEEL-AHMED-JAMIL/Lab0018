import { IDataModel } from './base';
import { EtpType , NonEtpType } from '@data/etp.reference';
import { Currency } from '@btas/common/currency';


export interface IRedundancyETP extends IDataModel {
  appliesEtp: boolean;
  owner: string;
  employmentCommencementDate: string;
  dateWhenEmploymentToCease: string;
  paymentAmount: Currency;
  paymentForUnusedAnnualLeave: Currency;
  paymentForUnusedLongServiceLeave: Currency;
  exitSuperUponTermination: boolean;
  etpType: EtpType[];
  amountsIncludedEtp: Currency;
  nonEtpType: NonEtpType[];
  amountsExcludedFromEtp: Currency;
}

export interface IRedundancy {
  redundancies: IRedundancyETP[];
}
