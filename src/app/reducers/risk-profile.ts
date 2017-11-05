import { createSelector } from 'reselect';
import { IInvestmentRiskProfile } from '@btas/models/risk-profile';
import * as riskprofile from '@btas/actions/risk-profile';

import * as uuid from 'uuid/v4';

export interface State extends IInvestmentRiskProfile {
  riskProfileExcluded: { [key: string]: boolean };
  savedInvestmentRiskProfile: IInvestmentRiskProfile;
}

export const initialState: State = {
  riskProfileResult: null,
  riskProfileExcluded: {},
  savedInvestmentRiskProfile: null
};

export function reducer(state = initialState, action: riskprofile.Actions): State {
  let riskProfileType;
  let riskProfileId;

  switch (action.type) {
  case riskprofile.ActionTypes.RISKPROFILE_FETCHED:
    return {
      ...state,
      ...action.payload,
      savedInvestmentRiskProfile: action.payload,
    };

  case riskprofile.ActionTypes.ADD_RISKPROFILE:
    riskProfileType = action.payload;
    return {
      ...state,
      [riskProfileType]: [
        ...state[riskProfileType] || [],
        { id: uuid() }
      ]
    };

    case riskprofile.ActionTypes.UPDATE_RISKPROFILE:
      const { type, newValue } = action.payload;
      riskProfileType = 'riskProfileResult';
      return {
        ...state,
        [riskProfileType]: {
          ...state[riskProfileType],
          [type]: newValue
        }
      };

  case riskprofile.ActionTypes.DELETE_RISKPROFILE:
    riskProfileType = action.payload.type;
    riskProfileId = action.payload.id;

    return {
      ...state,
      [riskProfileType]: state[riskProfileType].filter(
        a => a['id'] !== riskProfileId
      )
    };


  case riskprofile.ActionTypes.SET_RISKPROFILE_TYPE_EXCLUDED:
    riskProfileType = action.payload.type;
    const { excluded } = action.payload;
    const riskProfileExcluded = {
      ...state.riskProfileExcluded,
      ...{
        [riskProfileType]: excluded
      }
    };

    return {
      ...state,
      riskProfileExcluded
    };

  default:
    return state;
  }
}


export const getMainInvestmentRiskProfile = (state: State) => state;
export const getInvestmentRiskProfileExcludedMap = (state: State) => state.riskProfileExcluded;

export const getInvestmentRiskProfile = createSelector(
  getMainInvestmentRiskProfile,
  (main) => main || null
);

const pivotInvestmentRiskProfileList = (riskProfile, riskProfileType: string) => {
  if (!riskProfile) {
    return;
  }

  return riskProfile[riskProfileType] || [];
};

export const getRiskProfileResult = createSelector(
  getInvestmentRiskProfile,
  riskProfile => pivotInvestmentRiskProfileList(riskProfile, 'riskProfileResult')
);
