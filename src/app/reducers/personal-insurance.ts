import { createSelector } from 'reselect';
import { IPersonalInsurance } from '@btas/models/personal-insurance';
import * as personalInsurance from '@btas/actions/personal-insurance';

import * as uuid from 'uuid/v4';

export interface State extends IPersonalInsurance {
  personalInsuranceExcluded: { [key: string]: boolean };
  savedPersonalInsurance: IPersonalInsurance;
}

export const initialState: State = {
  lifeCoverType: null,
  tpdCoverType: null,
  traumaCoverType: null,
  incomeProtectionCoverType: null,
  personalInsuranceExcluded: {},
  savedPersonalInsurance: null
};


export function reducer(state = initialState, action: personalInsurance.Actions): State {
  let personalInsurancType;
  let personalInsurancId;

  switch (action.type) {
  case personalInsurance.ActionTypes.PERSONALINSURANCE_FETCHED:
    return {
      ...state,
      ...action.payload,
      savedPersonalInsuranc: action.payload,
    };

  case personalInsurance.ActionTypes.ADD_PERSONALINSURANCE:
    personalInsurancType = action.payload;
    return {
      ...state,
      [personalInsurancType]: [
        ...state[personalInsurancType] || [],
        { id: uuid() }
      ]
    };

  case personalInsurance.ActionTypes.UPDATE_PERSONALINSURANCE:
    const { type, newValue } = action.payload;

    return {
      ...state,
      [type]: {
        ...state[type],
        [type]: newValue
      }
    };

  case personalInsurance.ActionTypes.DELETE_PERSONALINSURANCE:
    personalInsurancType = action.payload.type;
    personalInsurancId = action.payload.id;

    return {
      ...state,
      [personalInsurancType]: state[personalInsurancType].filter(
        a => a['id'] !== personalInsurancId
      )
    };


  case personalInsurance.ActionTypes.SET_PERSONALINSURANCE_EXCLUDED:
    personalInsurancType = action.payload.type;
    const { excluded } = action.payload;
    const personalInsuranceExcluded = {
      ...state.personalInsuranceExcluded,
      ...{
        [personalInsurancType]: excluded
      }
    };

    return {
      ...state,
      personalInsuranceExcluded
    };

  default:
    return state;
  }
}



export const getMainPersonalInsurance = (state: State) => state;
export const getPersonalInsuranceExcludedMap = (state: State) => state.personalInsuranceExcluded;

export const getPersonalInsurance = createSelector(
  getMainPersonalInsurance,
  (main) => main || null
);

const pivotPersonalInsuranceList = (personalInsurance, personalInsurancType: string) => {
  if (!personalInsurance) {
    return;
  }

  return [].concat.apply(
    [],
    personalInsurance[personalInsurancType] || []
  );
};


export const getLifeCoverType = createSelector(
  getPersonalInsurance,
  liabilities => pivotPersonalInsuranceList(personalInsurance, 'lifeCoverType')
);

export const getTpdCoverType = createSelector(
  getPersonalInsurance,
  liabilities => pivotPersonalInsuranceList(personalInsurance, 'tpdCoverType')
);

export const getTraumaCoverType = createSelector(
  getPersonalInsurance,
  liabilities => pivotPersonalInsuranceList(personalInsurance, 'traumaCoverType')
);

export const getIncomeProtectionCoverType = createSelector(
  getPersonalInsurance,
  liabilities => pivotPersonalInsuranceList(personalInsurance, 'incomeProtectionCoverType')
);
