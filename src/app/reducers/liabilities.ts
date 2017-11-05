import { createSelector } from 'reselect';
import { ILiabilities } from '@btas/models/liabilities';
import * as liabilities from '@btas/actions/liabilities';

import * as uuid from 'uuid/v4';

export interface State extends ILiabilities {
  liabilitiesExcluded: { [key: string]: boolean };
  savedLiabilities: ILiabilities;
}

export const initialState: State = {
  homeMortgages: null,
  personalLoans: null,
  creditCards: null,
  investmentLoans: null,
  businessLoans: null,
  otherLoans: null,
  liabilitiesExcluded: {},
  savedLiabilities: null
};

export function reducer(state = initialState, action: liabilities.Actions): State {
  let liabilityType;
  let liabilityId;

  switch (action.type) {
  case liabilities.ActionTypes.LIABILITIES_FETCHED:
    return {
      ...state,
      ...action.payload,
      savedLiabilities: action.payload,
    };

  case liabilities.ActionTypes.ADD_LIABILITIES:
    liabilityType = action.payload;
    return {
      ...state,
      [liabilityType]: [
        ...state[liabilityType] || [],
        { id: uuid() }
      ]
    };

  case liabilities.ActionTypes.UPDATE_LIABILITIES:
    const { type, newValue } = action.payload;

    return {
      ...state,
      [type]: {
        ...state[type],
        [type]: newValue
      }
    };

  case liabilities.ActionTypes.DELETE_LIABILITIES:
    liabilityType = action.payload.type;
    liabilityId = action.payload.id;

    return {
      ...state,
      [liabilityType]: state[liabilityType].filter(
        a => a['id'] !== liabilityId
      )
    };



  case liabilities.ActionTypes.SET_LIABILITIES_EXCLUDED:
    liabilityType = action.payload.type;
    const { excluded } = action.payload;
    const liabilitiesExcluded = {
      ...state.liabilitiesExcluded,
      [liabilityType]: excluded
    };

    return {
      ...state,
      liabilitiesExcluded
    };

  default:
    return state;
  }
}


export const getMainLiabilities = (state: State) => state;
export const getLiabilitiesExcludedMap = (state: State) => state.liabilitiesExcluded;

export const getLiabilities = createSelector(
  getMainLiabilities,
  (main) => main || null
);

const pivotLiabilitiesList = (liabilities, liabilityType: string) => {
  if (!liabilities) {
    return;
  }

  return [].concat.apply(
    [],
    liabilities[liabilityType] || []
  );
};

export const getHomeMortgages = createSelector(
  getLiabilities,
  liabilities => pivotLiabilitiesList(liabilities, 'homeMortgages')
);

export const getPersonalLoans = createSelector(
  getLiabilities,
  liabilities => pivotLiabilitiesList(liabilities, 'personalLoans')
);

export const getCreditCards = createSelector(
  getLiabilities,
  liabilities => pivotLiabilitiesList(liabilities, 'creditCards')
);

export const getInvestmentLoans = createSelector(
  getLiabilities,
  liabilities => pivotLiabilitiesList(liabilities, 'investmentLoans')
);

export const getBusinessLoans = createSelector(
  getLiabilities,
  liabilities => pivotLiabilitiesList(liabilities, 'businessLoans')
);

export const getOtherLoans = createSelector(
  getLiabilities,
  liabilities => pivotLiabilitiesList(liabilities, 'otherLoans')
);
