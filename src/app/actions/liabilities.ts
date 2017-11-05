import { Action } from '@ngrx/store';

import { IDataModel } from '@btas/models/base';
import { ILiabilities } from '@btas/models/liabilities';
import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_LIABILITIES: type('FETCH_LIABILITIES'),
  LIABILITIES_FETCHED: type('LIABILITIES_FETCHED'),
  ADD_LIABILITIES: type('ADD_LIABILITIES'),
  UPDATE_LIABILITIES: type('UPDATE_LIABILITIES'),
  DELETE_LIABILITIES: type('DELETE_LIABILITIES'),
  SET_LIABILITIES_EXCLUDED: type('SET_LIABILITIES_EXCLUDED'),
  SYNC_LIABILITIES: type('SYNC_LIABILITIES'),
};


export class FetchLiabilitiesAction implements Action {
  public type = ActionTypes.FETCH_LIABILITIES;
  constructor(public payload: any = null) {}
}


export class LiabilitiesFetchedAction implements Action {
  public type = ActionTypes.LIABILITIES_FETCHED;
  constructor(public payload: ILiabilities) {}
}


export class AddLiabilitiesAction implements Action {
  public type = ActionTypes.ADD_LIABILITIES;
  constructor(public payload: string) {}
}

export class UpdateLiabilitiesAction implements Action {
  public type = ActionTypes.UPDATE_LIABILITIES;
  constructor(public payload: { type: string, newValue: IDataModel }) {}
}


export class DeleteLiabilitiesAction implements Action {
  public type = ActionTypes.DELETE_LIABILITIES;
  constructor(public payload: { type: string, id: string }) {}
}


export class SetLiabilitiesExcludedAction implements Action {
  public type = ActionTypes.SET_LIABILITIES_EXCLUDED;
  constructor(public payload: { type: string, excluded: boolean }) {}
}


export class SyncLiabilities implements Action {
  public type = ActionTypes.SYNC_LIABILITIES;
  constructor(public payload: any = null) { }
}

export type Actions = FetchLiabilitiesAction
  | LiabilitiesFetchedAction
  | AddLiabilitiesAction
  | UpdateLiabilitiesAction
  | DeleteLiabilitiesAction
  | SetLiabilitiesExcludedAction
  | SyncLiabilities
;
