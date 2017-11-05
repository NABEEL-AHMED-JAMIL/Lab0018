import { Action } from '@ngrx/store';

import { IDataModel } from '@btas/models/base';
import { IClient } from '@btas/models/client';
import { IReferral } from '@btas/models/referral';
import { IDependent } from '@btas/models/dependent';
import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_CLIENTS: type('FETCH_CLIENTS'),
  CLIENTS_FETCHED: type('CLIENTS_FETCHED'),
  CLIENTS_FETCH_ERROR: type('CLIENTS_FETCH_ERROR'),
  UPDATE_CLIENT_DETAIL: type('UPDATE_CLIENT_DETAIL'),
  FETCH_REFERRAL: type('FETCH_REFERRAL'),
  REFERRAL_FETCHED: type('REFERRAL_FETCHED'),
  FETCH_DEPENDENTS: type('FETCH_DEPENDENTS'),
  DEPENDENTS_FETCHED: type('DEPENDENTS_FETCHED'),
  FETCH_PROFILE: type('FETCH_PROFILE'),
  PROFILE_FETCHED: type('PROFILE_FETCHED'),
  ADD_DEPENDENT: type('ADD_DEPENDENT'),
  DELETE_DEPENDENT: type('DELETE_DEPENDENT'),
  UPDATE_DEPENDENT: type('UPDATE_DEPENDENT'),
  UPDATE_REFERRAL: type('UPDATE_REFERRAL'),
  SYNC_CLIENTS: type('SYNC_CLIENTS'),
  CLIENTS_SYNCED: type('CLIENTS_SYNCED')
};


export class FetchClientsAction implements Action {
  public type = ActionTypes.FETCH_CLIENTS;
  constructor(public payload: any = null) {}
}


export class ClientsFetchedAction implements Action {
  public type = ActionTypes.CLIENTS_FETCHED;
  constructor(public payload: {main: IClient, secondary?: IClient}) {}
}


export class ClientsFetchErrorAction implements Action {
  public type = ActionTypes.CLIENTS_FETCH_ERROR;
  constructor(public payload: any) {}
}


export class UpdateClientDetailAction implements Action {
  public type = ActionTypes.UPDATE_CLIENT_DETAIL;
  constructor(public payload: { type: string, newValue: IDataModel }) {}
}


export class FetchDependentsAction implements Action {
  public type = ActionTypes.FETCH_DEPENDENTS;
  constructor(public payload: any = null) { }
}


export class DependentsFetchedAction implements Action {
  public type = ActionTypes.DEPENDENTS_FETCHED;
  constructor(public payload: IDependent[]) {}
}


export class FetchReferralAction implements Action {
  public type = ActionTypes.FETCH_REFERRAL;
  constructor(public payload: any = null) { }
}


export class ReferralFetchedAction implements Action {
  public type = ActionTypes.REFERRAL_FETCHED;
  constructor(public payload: IReferral) {}
}


export class FetchProfileAction implements Action {
  public type = ActionTypes.FETCH_PROFILE;
  constructor(public payload: string[]) {}
}


export class ProfileFetchedAction implements Action {
  public type = ActionTypes.PROFILE_FETCHED;
  constructor(public payload: string) {}
}


export class AddDependentAction implements Action {
  public type = ActionTypes.ADD_DEPENDENT;
  constructor(public payload: any = null) {}
}


export class DeleteDependentAction implements Action {
  public type = ActionTypes.DELETE_DEPENDENT;
  constructor(public payload: string) {}
}


export class UpdateDependentAction implements Action {
  public type = ActionTypes.UPDATE_DEPENDENT;
  constructor(public payload: IDependent) {}
}


export class UpdateReferralAction implements Action {
  public type = ActionTypes.UPDATE_REFERRAL;
  constructor(public payload: IReferral) {}
}


export class SyncClients implements Action {
  public type = ActionTypes.SYNC_CLIENTS;
  constructor(public payload: any = null) {}
}


export class ClientsSynced implements Action {
  public type = ActionTypes.CLIENTS_SYNCED;
  constructor(public payload: any = null) {}
}


export type Actions =
  FetchClientsAction
  | ClientsFetchedAction
  | ClientsFetchErrorAction
  | UpdateClientDetailAction
  | FetchReferralAction
  | ReferralFetchedAction
  | FetchDependentsAction
  | DependentsFetchedAction
  | FetchProfileAction
  | ProfileFetchedAction
  | AddDependentAction
  | DeleteDependentAction
  | UpdateDependentAction
  | UpdateReferralAction
  | SyncClients
  | ClientsSynced
;
