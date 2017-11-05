import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { combineReducers, Action } from '@ngrx/store';

import * as fromClient from './client';
import * as fromPlayground from './playground';
import * as fromAsset from './asset';
import * as fromEstatePlanning from './estate-planning';
import * as fromSuperPensions from './super-pensions';
import * as fromLiabilities from './liabilities';
import * as fromSocialSecurity from './social-security';
import * as fromRiskProfile from './risk-profile';
import * as fromLoading from './loading';
import * as fromRedundancy from './redundancy';
import * as fromPersonalInsurance from './personal-insurance';


export interface State {
  client: fromClient.State;
  asset: fromAsset.State;
  estateplanning: fromEstatePlanning.State;
  superPensions: fromSuperPensions.State;
  liabilities: fromLiabilities.State;
  socialSecurity: fromSocialSecurity.State;
  redundancy: fromRedundancy.State;
  loading: fromLoading.State;
  playground: fromPlayground.State;
  riskProfile: fromRiskProfile.State;
  personalInsurance: fromPersonalInsurance.State;
}


const reducers = {
  client: fromClient.reducer,
  playground: fromPlayground.reducer,
  asset: fromAsset.reducer,
  estateplanning: fromEstatePlanning.reducer,
  superPensions: fromSuperPensions.reducer,
  liabilities: fromLiabilities.reducer,
  socialSecurity: fromSocialSecurity.reducer,
  redundancy: fromRedundancy.reducer,
  loading: fromLoading.reducer,
  riskProfile: fromRiskProfile.reducer,
  personalInsurance: fromPersonalInsurance.reducer

};

function createReducer() {
  return compose(combineReducers)(reducers);
}

export function reducer(state: State, action: any) {
  return createReducer()(state, action);
}

export const getClientState = (state: State) => state.client;
export const getPlaygroundState = (state: State) => state.playground;

// client selectors
export const getProfile = createSelector(getClientState, fromClient.getProfile);
export const getClients = createSelector(getClientState, fromClient.getClients);
export const getKeyInfos = createSelector(getClientState, fromClient.getKeyInfos);
export const getContactInfos = createSelector(getClientState, fromClient.getContactInfos);
export const getOtherInfos = createSelector(getClientState, fromClient.getOtherInfos);
export const getDependents = createSelector(getClientState, fromClient.getDependents);
export const getEmployments = createSelector(getClientState, fromClient.getEmployments);
export const getIdentifications = createSelector(getClientState, fromClient.getIdentifications);
export const getThirdParties = createSelector(getClientState, fromClient.getThirdParties);
export const getReferrals = createSelector(getClientState, fromClient.getReferrals);


// playground selectors
export const getHeroes = createSelector(getPlaygroundState, fromPlayground.getHeroes);

// asset selectors
export const getAssetState = (state: State) => state.asset;
export const getAssets = createSelector(getAssetState, fromAsset.getAssets);
export const getAssetTypesExcludedMap = createSelector(
  getAssetState, fromAsset.getAssetTypesExcludedMap);

// estate Planning selectors
export const getEstatePlanningState = (state: State) => state.estateplanning;
export const getEstatePlannings = createSelector(getEstatePlanningState,
  fromEstatePlanning.getEstatePlannings);
export const getEstatePlanningExcludedMap = createSelector(getEstatePlanningState,
  fromEstatePlanning.getEstatePlanningExcludedMap);
export const getWill = createSelector(getEstatePlanningState, fromEstatePlanning.getWill);
export const getPowerOfAttorney = createSelector(getEstatePlanningState,
  fromEstatePlanning.getPowerOfAttorney);
export const getDeathNomination = createSelector(getEstatePlanningState,
  fromEstatePlanning.getDeathNomination);

// super & pensions selectors
export const getSuperPensionsState = (state: State) => state.superPensions;
export const getSuperPensions = createSelector(getSuperPensionsState,
  fromSuperPensions.getSuperPensions);
export const getSuperPensionsExcludedMap = createSelector(
  getSuperPensionsState, fromSuperPensions.getSuperPensionsExcludedMap);
export const getSuperannuations = createSelector(getSuperPensionsState,
  fromSuperPensions.getSuperannuations);
export const getPensions = createSelector(getSuperPensionsState,
  fromSuperPensions.getPensions);
export const getAnnuities = createSelector(getSuperPensionsState,
  fromSuperPensions.getAnnuities);
export const getContributionHistories = createSelector(getSuperPensionsState,
  fromSuperPensions.getContributionHistories);

// liabilities selectors
export const getLiabilitiesState = (state: State) => state.liabilities;
export const getLiabilities = createSelector(getLiabilitiesState,
  fromLiabilities.getLiabilities);
export const getLiabilitiesExcludedMap = createSelector(getLiabilitiesState,
  fromLiabilities.getLiabilitiesExcludedMap);
export const getHomeMortgages = createSelector(getLiabilitiesState,
  fromLiabilities.getHomeMortgages);
export const getPersonalLoans = createSelector(getLiabilitiesState,
  fromLiabilities.getPersonalLoans);
export const getCreditCards = createSelector(getLiabilitiesState,
  fromLiabilities.getCreditCards);
export const getInvestmentLoans = createSelector(getLiabilitiesState,
  fromLiabilities.getInvestmentLoans);
export const getBusinessLoans = createSelector(getLiabilitiesState,
  fromLiabilities.getBusinessLoans);
export const getOtherLoans = createSelector(getLiabilitiesState,
  fromLiabilities.getOtherLoans);

// social security state selectors
export const getSocialSecurityState = (state: State) => state.socialSecurity;
export const getSocialSecurity = createSelector(getSocialSecurityState,
  fromSocialSecurity.getSocialSecurity);

// redundancy state selectors
export const getRedundancyState = (state: State) => state.redundancy;
export const getRedundancies = createSelector(getRedundancyState,
  fromRedundancy.getRedundancies);
export const getRedundanciesEtp = createSelector(getRedundancyState,
  fromRedundancy.getRedundanciesEtp);
export const getRedundanciesExcludedMap = createSelector(
  getRedundancyState, fromRedundancy.getRedundanciesExcludedMap);

// riskprofile state selectors
export const getInvestmentRiskProfileState = (state: State) => state.riskProfile;
export const getInvestmentRiskProfile = createSelector(getInvestmentRiskProfileState,
  fromRiskProfile.getInvestmentRiskProfile);
export const getInvestmentRiskProfileExcludedMap = createSelector(
  getInvestmentRiskProfileState, fromRiskProfile.getInvestmentRiskProfileExcludedMap);
export const getRiskProfileResult = createSelector(getInvestmentRiskProfileState,
  fromRiskProfile.getRiskProfileResult);

// personal-insuranc selectors
export const getPersonalInsuranceState = (state: State) => state.personalInsurance;
export const getPersonalInsurance = createSelector(getPersonalInsuranceState,
  fromPersonalInsurance.getPersonalInsurance);
export const getPersonalInsuranceExcludedMap = createSelector(getPersonalInsuranceState,
  fromPersonalInsurance.getPersonalInsuranceExcludedMap);
export const getLifeCoverType = createSelector(getPersonalInsuranceState,
  fromPersonalInsurance.getLifeCoverType);
export const getTpdCoverType = createSelector(getPersonalInsuranceState,
  fromPersonalInsurance.getTpdCoverType);
export const getTraumaCoverType = createSelector(getPersonalInsuranceState,
  fromPersonalInsurance.getTraumaCoverType);
export const getIncomeProtectionCoverType = createSelector(getPersonalInsuranceState,
  fromPersonalInsurance.getIncomeProtectionCoverType);

// loading state selectors
export const getLoadingState = (state: State) => state.loading;

export const getClientsLoadingFlag
  = createSelector(getLoadingState, fromLoading.getClientsLoadingFlag);
export const getDependentsLoadingFlag
  = createSelector(getLoadingState, fromLoading.getDependentsLoadingFlag);
export const getReferralLoadingFlag
  = createSelector(getLoadingState, fromLoading.getReferralLoadingFlag);
export const getProfileLoadingFlag
  = createSelector(getLoadingState, fromLoading.getProfileLoadingFlag);
export const getAssetsLoadingFlag
  = createSelector(getLoadingState, fromLoading.getAssetsLoadingFlag);
export const getSuperPensionsLoadingFlag
  = createSelector(getLoadingState, fromLoading.getSuperPensionsLoadingFlag);
export const getLiabilitiesLoadingFlag
  = createSelector(getLoadingState, fromLoading.getLiabilitiesLoadingFlag);
export const getEstatePlanningsLoadingFlag
  = createSelector(getLoadingState, fromLoading.getEstatePlanningsLoadingFlag);
export const getRedundanciesLoadingFlag = createSelector(getLoadingState,
  fromLoading.getRedundanciesLoadingFlag);
export const getInvestmentRiskProfileLoadingFlag = createSelector(getLoadingState,
  fromLoading.getInvestmentRiskProfileLoadingFlag);
export const getPersonalInsuranceLoadingFlag = createSelector(getLoadingState,
  fromLoading.getPersonalInsuranceLoadingLoadingFlag);

export function getLoaderState(action: Action) {
  return createSelector(getLoadingState, fromLoading.getLoaderState(action));
}
