import { Action } from '@ngrx/store';

import { IPersonalInsurance } from '@btas/models/personal-insurance';
import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_PERSONALINSURANCE: type('FETCH_PERSONALINSURANCE'),
  PERSONALINSURANCE_FETCHED: type('PERSONALINSURANCE_FETCHED'),
  ADD_PERSONALINSURANCE: type('ADD_PERSONALINSURANCE'),
  UPDATE_PERSONALINSURANCE: type('UPDATE_PERSONALINSURANCE'),
  DELETE_PERSONALINSURANCE: type('DELETE_PERSONALINSURANCE'),
  SET_PERSONALINSURANCE_EXCLUDED: type('SET_PERSONALINSURANCE_EXCLUDED'),
  SYNC_PERSONALINSURANCE: type('SYNC_PERSONALINSURANCE'),
};

export class FetchPersonalInsuranceAction implements Action {
  public type = ActionTypes.FETCH_PERSONALINSURANCE;
  constructor(public payload: any = null) {}
}

export class PersonalInsuranceFetchedAction implements Action {
  public type = ActionTypes.PERSONALINSURANCE_FETCHED;
  constructor(public payload: IPersonalInsurance) {}
}

export class AddPersonalInsuranceAction implements Action {
  public type = ActionTypes.ADD_PERSONALINSURANCE;
  constructor(public payload: string) {}
}

export class UpdatePersonalInsuranceAction implements Action {
  public type = ActionTypes.UPDATE_PERSONALINSURANCE;
  constructor(public payload: { type: string }) {}
}

export class DeletePersonalInsuranceAction implements Action {
  public type = ActionTypes.DELETE_PERSONALINSURANCE;
  constructor(public payload: { type: string, id: string }) {}
}

export class SetPersonalInsuranceExcludedAction implements Action {
  public type = ActionTypes.SET_PERSONALINSURANCE_EXCLUDED;
  constructor(public payload: { type: string, excluded: boolean }) {}
}

export class SyncPersonalInsurance implements Action {
  public type = ActionTypes.SYNC_PERSONALINSURANCE;
  constructor(public payload: any = null) { }
}

export type Actions = FetchPersonalInsuranceAction
  | PersonalInsuranceFetchedAction
  | AddPersonalInsuranceAction
  | UpdatePersonalInsuranceAction
  | DeletePersonalInsuranceAction
  | SetPersonalInsuranceExcludedAction
  | SyncPersonalInsurance
;
