import { createSelector } from 'reselect';
import { IClient } from '@btas/models/client';
import { IReferral } from '@btas/models/referral';
import { IDependent } from '@btas/models/dependent';
import * as client from '@btas/actions/client';

import * as uuid from 'uuid/v4';
import * as _ from 'lodash';


export interface State {
  main: IClient | null;
  secondary: IClient | null;
  savedClients: any;

  referral: IReferral | null;
  savedReferral: IReferral | null;

  dependents: IDependent[] | null;
  savedDependents: IDependent[] | null;

  profile: string | null;
}


export const initialState: State = {
  main: null,
  secondary: null,
  savedClients: {},

  referral: null,
  savedReferral: null,

  dependents: null,
  savedDependents: null,

  profile: null
};


export function reducer(state = initialState, action: client.Actions): State {
  let index;

  switch (action.type) {

    case client.ActionTypes.CLIENTS_FETCHED:
      const { main, secondary } = action.payload;

      return {
        ...state,
        main,
        secondary,
        savedClients: {
          main,
          secondary
        }
      };

    case client.ActionTypes.UPDATE_CLIENT_DETAIL:
      const { type, newValue } = action.payload;
      let clientType = 'main';

      if (state.secondary[type].id === newValue.id) {
        clientType = 'secondary';
      }

      return {
        ...state,
        [clientType]: {
          ...state[clientType],
          [type]: newValue
        }
      };

    case client.ActionTypes.REFERRAL_FETCHED:
      return {
        ...state,
        referral: action.payload,
        savedReferral: action.payload
      };

    case client.ActionTypes.DEPENDENTS_FETCHED:
      return {
        ...state,
        dependents: action.payload,
        savedDependents: action.payload
      };

    case client.ActionTypes.PROFILE_FETCHED:
      return {
        ...state,
        profile: action.payload
      };

    case client.ActionTypes.ADD_DEPENDENT:
      return {
        ...state,
        dependents: [
          ...state.dependents,
          { id: uuid() } as IDependent
        ]
      };

    case client.ActionTypes.DELETE_DEPENDENT:
      return {
        ...state,
        dependents: state.dependents.filter(d => d.id !== action.payload)
      };

    case client.ActionTypes.UPDATE_DEPENDENT:
      const dependents = state.dependents || [];
      const dependent = action.payload;

      index = dependents.findIndex(d => d.id === dependent.id);

      return {
        ...state,
        dependents: [
          ...dependents.slice(0, index),
          dependent,
          ...dependents.slice(index + 1)
        ]
      };

    case client.ActionTypes.UPDATE_REFERRAL:
      return {
        ...state,
        referral: action.payload
      };

    case client.ActionTypes.CLIENTS_SYNCED:
      return {
        ...state,
        savedClients: _.pick(state, ['main', 'secondary'])
      };

    default:
      return state;
  }
}


export const getMainClient = (state: State) => state.main;
export const getSecondaryClient = (state: State) => state.secondary;
export const getProfile = (state: State) => state.profile;

export const getClients = createSelector(
  getMainClient,
  getSecondaryClient,
  (main, second) => [main, second]
);


const pivotClientInfo = (clients, infoType: string) => {
  return clients.map((client) => {
    if (!client) {
      return;
    }
    const keyInfo = client.keyInfo || {};

    return 'keyInfo' === infoType ? keyInfo : {
      ...client[infoType],
      fullName: keyInfo.fullName
    };
  }).filter(c => c);
};


export const getKeyInfos = createSelector(
  getClients,
  clients => pivotClientInfo(clients, 'keyInfo')
);

export const getContactInfos = createSelector(
  getClients,
  clients => pivotClientInfo(clients, 'contactInfo')
);

export const getOtherInfos = createSelector(
  getClients,
  clients => pivotClientInfo(clients, 'otherInfo')
);

export const getEmployments = createSelector(
  getClients,
  clients => pivotClientInfo(clients, 'employmentInfo')
);

export const getIdentifications = createSelector(
  getClients,
  clients => pivotClientInfo(clients, 'identification')
);

export const getThirdParties = createSelector(
  getClients,
  clients => pivotClientInfo(clients, 'thirdParty')
);

const getReferral = (state: State) => state.referral;
export const getReferrals = createSelector(
  getReferral,
  referral => referral ? [referral] : null
);

export const getDependents = (state: State) => {
  return state.dependents;
};
