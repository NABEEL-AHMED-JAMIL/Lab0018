import { createSelector } from 'reselect';
import { IEstatePlanning } from '@btas/models/estate-planning';
import * as estateplanning from '@btas/actions/estate-planning';

import * as uuid from 'uuid/v4';

export interface State extends IEstatePlanning {
  estatePlanningExcluded: { [key: string]: boolean };
  savedEstatePlanning: IEstatePlanning;
}

export const initialState: State = {
  will: null,
  deathNomination: null,
  powerOfAttorney: null,
  estatePlanningExcluded: {},
  savedEstatePlanning: null
};

export function reducer(state = initialState, action: estateplanning.Actions): State {
  let estatePlanningType;
  let estatePlanningId;

  switch (action.type) {
  case estateplanning.ActionTypes.ESTATEPLANNING_FETCHED:
    return {
      ...state,
      ...action.payload,
      savedEstatePlanning: action.payload
    };

  case estateplanning.ActionTypes.ADD_ESTATEPLANNING:
    estatePlanningType = action.payload;
    return {
      ...state,
      [estatePlanningType]: [
        ...state[estatePlanningType] || [],
        { id: uuid() }
      ]
    };

  case estateplanning.ActionTypes.UPDATE_ESTATEPLANNING:
    const { type, newValue } = action.payload;

    return {
      ...state,
      [type]: {
        ...state[type],
        [type]: newValue
      }
    };

  case estateplanning.ActionTypes.DELETE_ESTATEPLANNING:
    estatePlanningType = action.payload.type;
    estatePlanningId = action.payload.id;

    return {
      ...state,
      [estatePlanningType]: state[estatePlanningType].filter(
        a => a['id'] !== estatePlanningId
      )
    };



  case estateplanning.ActionTypes.SET_ESTATEPLANNING_EXCLUDED:
    estatePlanningType = action.payload.type;
    const { excluded } = action.payload;
    const estatePlanningExcluded = {
      ...state.estatePlanningExcluded,
      [estatePlanningType]: excluded
    };

    return {
      ...state,
      estatePlanningExcluded
    };

  default:
    return state;
  }
}


export const getMainEstatePlanning = (state: State) => state;
export const getEstatePlanningExcludedMap = (state: State) => state.estatePlanningExcluded;

export const getEstatePlannings = createSelector(
  getMainEstatePlanning,
  (main) => main || null
);

const pivotEstatePlannings = (estateplannings, estatePlanningType: string) => {
  if (!estateplanning) {
    return;
  }

  return [].concat.apply(
    [],
    estateplannings[estatePlanningType] || []
  );
};

export const getWill = createSelector(
  getEstatePlannings,
  estateplannings => pivotEstatePlannings(estateplannings, 'will')
);

export const getPowerOfAttorney = createSelector(
  getEstatePlannings,
  estateplannings => pivotEstatePlannings(estateplannings, 'powerOfAttorney')
);

export const getDeathNomination = createSelector(
  getEstatePlannings,
  estateplannings => pivotEstatePlannings(estateplannings, 'deathNomination')
);
