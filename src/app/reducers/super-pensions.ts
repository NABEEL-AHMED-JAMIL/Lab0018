import { createSelector } from 'reselect';
import { ISuperPensions } from '@btas/models/super-pensions';
import * as superpensions from '@btas/actions/super-pensions';

import * as uuid from 'uuid/v4';

export interface State extends ISuperPensions {
  superPensionsExcluded: { [key: string]: boolean };
  savedSuperPensions: ISuperPensions;
}

export const initialState: State = {
  superannuations: null,
  contributionHistories: null,
  pensions: null,
  annuities: null,
  superPensionsExcluded: {},
  savedSuperPensions: null
};

export function reducer(state = initialState, action: superpensions.Actions): State {
  let superType;
  let superId;

  switch (action.type) {
  case superpensions.ActionTypes.SUPERPENSIONS_FETCHED:
    return {
      ...state,
      ...action.payload,
      savedSuperPensions: action.payload,
    };

  case superpensions.ActionTypes.ADD_SUPERPENSION:
    superType = action.payload;
    return {
      ...state,
      [superType]: [
        ...state[superType] || [],
        { id: uuid() }
      ]
    };

  case superpensions.ActionTypes.UPDATE_SUPERPENSION:
    return {
      ...state,
      ...action.payload,
      savedSuperPensions: {
        ...state.savedSuperPensions,
        ...action.payload
      }
    };

  case superpensions.ActionTypes.DELETE_SUPERPENSION:
    superType = action.payload.type;
    superId = action.payload.id;

    return {
      ...state,
      [superType]: state[superType].filter(
        a => a['id'] !== superId
      )
    };

  case superpensions.ActionTypes.SET_SUPER_TYPE_EXCLUDED:
    superType = action.payload.type;
    const { excluded } = action.payload;
    const superPensionsExcluded = {
      ...state.superPensionsExcluded,
      ...{
        [superType]: excluded
      }
    };

    return {
      ...state,
      superPensionsExcluded
    };

  default:
    return state;
  }
}


export const getMainSuperPensions = (state: State) => state;
export const getSuperPensionsExcludedMap = (state: State) => state.superPensionsExcluded;

export const getSuperPensions = createSelector(
  getMainSuperPensions,
  (main) => main || null
);

const pivotSuperPensionsList = (superPensions, superType: string) => {
  if (!superPensions) {
    return;
  }

  return [].concat.apply(
    [],
    superPensions[superType] || []
  );
};

export const getSuperannuations = createSelector(
  getSuperPensions,
  superPensions => pivotSuperPensionsList(superPensions, 'superannuations')
);

export const getPensions = createSelector(
  getSuperPensions,
  superPensions => pivotSuperPensionsList(superPensions, 'pensions')
);

export const getAnnuities = createSelector(
  getSuperPensions,
  superPensions => pivotSuperPensionsList(superPensions, 'annuities')
);

export const getContributionHistories = createSelector(
  getSuperPensions,
  superPensions => pivotSuperPensionsList(superPensions, 'contributionHistories')
);
