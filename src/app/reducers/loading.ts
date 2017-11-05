import { Action } from '@ngrx/store';

import * as client from '@btas/actions/client';
import * as asset from '@btas/actions/asset';
import * as superPensions from '@btas/actions/super-pensions';
import * as liabilities from '@btas/actions/liabilities';
import * as estateplanning from '@btas/actions/estate-planning';
import * as redundancies from '@btas/actions/redundancy';
import * as riskProfile from '@btas/actions/risk-profile';
import * as personalInsurance from '@btas/actions/personal-insurance';
import { getBlockingKey, getUnblockKey } from '@btas/actions/common';

export interface State {
  clientsLoading: boolean;
  dependentsLoading: boolean;
  referralLoading: boolean;
  profileLoading: boolean;
  assetsLoading: boolean;
  superPensionsLoading: boolean;
  liabilitiesLoading: boolean;
  estateplanningsLoading: boolean;
  redundanciesLoading: boolean;
  riskProfileLoading: boolean;
  personalInsuranceLoading: boolean;
}


export const initialState: State = {
  clientsLoading: null,
  dependentsLoading: false,
  referralLoading: false,
  profileLoading: false,
  assetsLoading: false,
  superPensionsLoading: false,
  liabilitiesLoading: false,
  estateplanningsLoading: false,
  redundanciesLoading: false,
  riskProfileLoading: false,
  personalInsuranceLoading: false
};


const startLoadingSet = new Map([

  [
    client.ActionTypes.FETCH_CLIENTS,
    'clientsLoading'
  ],

  [
    client.ActionTypes.FETCH_DEPENDENTS,
    'dependentsLoading'
  ],

  [
    client.ActionTypes.FETCH_REFERRAL,
    'referralLoading'
  ],

  [
    client.ActionTypes.FETCH_PROFILE,
    'profileLoading'
  ],

  [
    asset.ActionTypes.FETCH_ASSETS,
    'assetsLoading'
  ],

  [
    superPensions.ActionTypes.FETCH_SUPERPENSIONS,
    'superPensionsLoading'
  ],

  [
    liabilities.ActionTypes.FETCH_LIABILITIES,
    'liabilitiesLoading'
  ],

  [
    estateplanning.ActionTypes.FETCH_ESTATEPLANNING,
    'estateplanningsLoading'
  ],

  [
    redundancies.ActionTypes.FETCH_REDUNDANCY,
    'redundanciesLoading'
  ],

  [
    riskProfile.ActionTypes.FETCH_RISKPROFILE,
    'riskProfileLoading'
  ],

  [
    personalInsurance.ActionTypes.FETCH_PERSONALINSURANCE,
    'personalInsuranceLoading'
  ]

]);


const stopLoadingSet = new Map([

  [
    client.ActionTypes.CLIENTS_FETCHED,
    'clientsLoading'
  ],

  [
    client.ActionTypes.CLIENTS_FETCH_ERROR,
    'clientsLoading'
  ],

  [
    client.ActionTypes.DEPENDENTS_FETCHED,
    'dependentsLoading'
  ],

  [
    client.ActionTypes.REFERRAL_FETCHED,
    'referralLoading'
  ],

  [
    client.ActionTypes.PROFILE_FETCHED,
    'profileLoading'
  ],

  [
    asset.ActionTypes.ASSETS_FETCHED,
    'assetsLoading'
  ],

  [
    asset.ActionTypes.ASSETS_FETCH_ERROR,
    'assetsLoading'
  ],

  [
    superPensions.ActionTypes.SUPERPENSIONS_FETCHED,
    'superPensionsLoading'
  ],

  [
    liabilities.ActionTypes.LIABILITIES_FETCHED,
    'liabilitiesLoading'
  ],

  [
    estateplanning.ActionTypes.ESTATEPLANNING_FETCHED,
    'estateplanningsLoading'
  ],

  [
    redundancies.ActionTypes.REDUNDANCY_FETCHED,
    'redundanciesLoading'
  ],

  [
    riskProfile.ActionTypes.RISKPROFILE_FETCHED,
    'riskProfileLoading'
  ],
  [
    personalInsurance.ActionTypes.PERSONALINSURANCE_FETCHED,
    'personalInsuranceLoading'
  ]

]);


export function reducer(state = initialState, action: Action): State {

  if (startLoadingSet.has(action.type)) {
    return {
      ...state,
      [startLoadingSet.get(action.type)]: true
    };
  }

  if (stopLoadingSet.has(action.type)) {
    return {
      ...state,
      [stopLoadingSet.get(action.type)]: false
    };
  }

  const blockKey = getBlockingKey(action);
  if (blockKey) {
    return {
      ...state,
      [blockKey]: true
    };
  }

  const unblockKey = getUnblockKey(action);
  if (unblockKey) {
    return {
      ...state,
      [unblockKey]: false
    };
  }

  return state;
}


export const getClientsLoadingFlag = (state: State) => state.clientsLoading;
export const getDependentsLoadingFlag = (state: State) => state.dependentsLoading;
export const getReferralLoadingFlag = (state: State) => state.referralLoading;
export const getProfileLoadingFlag = (state: State) => state.profileLoading;
export const getAssetsLoadingFlag = (state: State) => state.assetsLoading;
export const getSuperPensionsLoadingFlag = (state: State) => state.superPensionsLoading;
export const getLiabilitiesLoadingFlag = (state: State) => state.liabilitiesLoading;
export const getEstatePlanningsLoadingFlag = (state: State) => state.estateplanningsLoading;
export const getRedundanciesLoadingFlag = (state: State) =>  state.redundanciesLoading;
export const getInvestmentRiskProfileLoadingFlag =  (state: State) =>  state.riskProfileLoading;
export const getPersonalInsuranceLoadingLoadingFlag =
  (state: State) =>  state.personalInsuranceLoading;

export const getLoaderState = (action: Action) => {
  const key = getBlockingKey(action);
  return (state: State) => state[key];
};
