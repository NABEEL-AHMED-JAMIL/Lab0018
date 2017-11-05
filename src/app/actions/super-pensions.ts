import { Action } from '@ngrx/store';

import { ISuperPensions } from '@btas/models/super-pensions';
import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_SUPERPENSIONS: type('FETCH_SUPERPENSIONS'),
  SUPERPENSIONS_FETCHED: type('SUPERPENSIONS_FETCHED'),
  ADD_SUPERPENSION: type('ADD_SUPERPENSION'),
  UPDATE_SUPERPENSION: type('UPDATE_SUPERPENSION'),
  DELETE_SUPERPENSION: type('DELETE_SUPERPENSION'),
  SET_SUPER_TYPE_EXCLUDED: type('SET_SUPER_TYPE_EXCLUDED'),
  SYNC_SUPERPENSIONS: type('SYNC_SUPERPENSIONS'),
};


export class FetchSuperPensionsAction implements Action {
  public type = ActionTypes.FETCH_SUPERPENSIONS;
  constructor(public payload: any = null) {}
}


export class SuperPensionsFetchedAction implements Action {
  public type = ActionTypes.SUPERPENSIONS_FETCHED;
  constructor(public payload: ISuperPensions) {}
}


export class AddSuperPensionAction implements Action {
  public type = ActionTypes.ADD_SUPERPENSION;
  constructor(public payload: string) {}
}


export class UpdateSuperPensionAction implements Action {
  public type = ActionTypes.UPDATE_SUPERPENSION;
  constructor(public payload: any) { }
}


export class DeleteSuperPensionAction implements Action {
  public type = ActionTypes.DELETE_SUPERPENSION;
  constructor(public payload: { type: string, id: string }) {}
}


export class SetSuperTypeExcludedAction implements Action {
  public type = ActionTypes.SET_SUPER_TYPE_EXCLUDED;
  constructor(public payload: { type: string, excluded: boolean }) {}
}


export class SyncSuperPensions implements Action {
  public type = ActionTypes.SYNC_SUPERPENSIONS;
  constructor(public payload: any = null) { }
}

export type Actions =
  FetchSuperPensionsAction
  | SuperPensionsFetchedAction
  | AddSuperPensionAction
  | UpdateSuperPensionAction
  | DeleteSuperPensionAction
  | SetSuperTypeExcludedAction
  | SyncSuperPensions
;
