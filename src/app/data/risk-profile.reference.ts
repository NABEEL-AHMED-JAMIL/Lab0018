import { IGroupPanelItem } from '@btas/components/group-panel/group-panel-item';
import { PreferredRiskProfileTypeOptions } from '@data/preferred-risk-profile.reference';
import {
  IRiskProfileResult,
  IInvestmentRiskProfile
} from '@btas/models/risk-profile';
import * as uuid from 'uuid/v4';


export const INVESTMENT_RISK_PROFILE_DEF = <IGroupPanelItem> {
  title: 'Risk Profile Result',
  subtitle: '',
  summary: [],
  fields: [
    {
      name: 'preferredRiskProfile',
      title: 'Preferred risk profile',
      type: 'select',
      options: PreferredRiskProfileTypeOptions
    },
    {
      name: 'riskDiscussionPoints',
      title: 'Risk discussion points',
      type: 'textarea'
    }
  ],
  deletable: true
};

export const INVESTMENT_RISKPROFILE: IInvestmentRiskProfile =
  <IInvestmentRiskProfile> {
    riskProfileResult: <IRiskProfileResult[]> [{
      id: uuid(),
      preferredRiskProfile: 'Growth',
      riskDiscussionPoints: 'it is going very fast'
    },
    {
      id: uuid(),
      preferredRiskProfile: 'Growth',
      riskDiscussionPoints: 'It has been updated in last year'
    },
    {
      id: uuid(),
      preferredRiskProfile: 'Growth',
      riskDiscussionPoints: 'it needed concentration'
    },
    ]
  };
