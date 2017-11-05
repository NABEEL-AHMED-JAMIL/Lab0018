import { IDataModel } from './base';
import { PreferredRiskProfileType } from '@data/preferred-risk-profile.reference';

export interface IRiskProfileResult extends IDataModel {
  preferredRiskProfile: PreferredRiskProfileType;
  riskDiscussionPoints: string;
}

export interface IInvestmentRiskProfile {
  riskProfileResult: IRiskProfileResult[];
}
