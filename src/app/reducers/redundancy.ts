import { createSelector } from 'reselect';
import { IRedundancy } from '@btas/models/redundancy';
import * as redundancy from '@btas/actions/redundancy';

import * as uuid from 'uuid/v4';

export interface State extends IRedundancy {
  redundanciesExcluded: { [key: string]: boolean };
  savedRedundancies: IRedundancy;
}

export const initialState: State = {
  redundancies: null,
  redundanciesExcluded: {},
  savedRedundancies: null
};


export function reducer(state = initialState, action: redundancy.Actions): State {
  let redundancyType;
  let redundancyId;

  switch (action.type) {
  case redundancy.ActionTypes.REDUNDANCY_FETCHED:
    return {
      ...state,
      ...action.payload,
      savedRedundancies: action.payload,
    };

  case redundancy.ActionTypes.ADD_REDUNDANCY:
    redundancyType = action.payload;
    return {
      ...state,
      [redundancyType]: [
        ...state[redundancyType] || [],
        { id: uuid() }
      ]
    };

  case redundancy.ActionTypes.UPDATE_REDUNDANCY:
    const { type, newValue } = action.payload;
    redundancyType = 'redundancies';

    return {
      ...state,
      [redundancyType]: {
        ...state[redundancyType],
        [type]: newValue
      }
    };

  case redundancy.ActionTypes.DELETE_REDUNDANCY:
    redundancyType = action.payload.type;
    redundancyId = action.payload.id;

    return {
      ...state,
      [redundancyType]: state[redundancyType].filter(
        a => a['id'] !== redundancyId
      )
    };

  case redundancy.ActionTypes.SET_REDUNDANCY_TYPE_EXCLUDED:
    redundancyType = action.payload.type;
    const { excluded } = action.payload;
    const redundanciesExcluded = {
      ...state.redundanciesExcluded,
      [redundancyType]: excluded
    };

    return {
      ...state,
      redundanciesExcluded
    };
  default:
    return state;
  }
}


export const getMainRedundancies = (state: State) => state;
export const getRedundanciesExcludedMap = (state: State) => state.redundanciesExcluded;

export const getRedundancies = createSelector(
  getMainRedundancies,
  (main) => main || null
);

const pivotRedundancyList = (redundancies, redundancyType: string) => {
  if (!redundancies) {
    return;
  }
  return [].concat.apply(
    [],
    redundancies[redundancyType] || []
  );
};

export const getRedundanciesEtp = createSelector(
  getRedundancies,
  redundancy => pivotRedundancyList(redundancy, 'redundancies')
);
