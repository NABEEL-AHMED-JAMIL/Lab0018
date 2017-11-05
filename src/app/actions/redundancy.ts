import { Action } from '@ngrx/store';

import { IRedundancy } from '@btas/models/redundancy';
import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_REDUNDANCY: type('FETCH_REDUNDANCY'),
  REDUNDANCY_FETCHED: type('REDUNDANCY_FETCHED'),
  ADD_REDUNDANCY: type('ADD_REDUNDANCY'),
  UPDATE_REDUNDANCY: type('UPDATE_REDUNDANCY'),
  DELETE_REDUNDANCY: type('DELETE_REDUNDANCY'),
  SET_REDUNDANCY_TYPE_EXCLUDED: type('SET_REDUNDANCY_TYPE_EXCLUDED'),
  SYNC_REDUNDANCIES: type('SYNC_REDUNDANCIES'),
};


export class FetchRedundancyAction implements Action {
  public type = ActionTypes.FETCH_REDUNDANCY;
  constructor(public payload: any = null) {}
}


export class RedundancyFetchedAction implements Action {
  public type = ActionTypes.REDUNDANCY_FETCHED;
  constructor(public payload: IRedundancy) {}
}

export class AddRedundancyAction implements Action {
  public type = ActionTypes.ADD_REDUNDANCY;
  constructor(public payload: string) {}
}

export class UpdateRedundancyAction implements Action {
  public type = ActionTypes.UPDATE_REDUNDANCY;
  constructor(public payload: { type: string }) {}
}


export class DeleteRedundancyAction implements Action {
  public type = ActionTypes.DELETE_REDUNDANCY;
  constructor(public payload: { type: string, id: string }) {}
}


export class SetRedundancyTypeExcludedAction implements Action {
  public type = ActionTypes.SET_REDUNDANCY_TYPE_EXCLUDED;
  constructor(public payload: { type: string, excluded: boolean }) {}
}


export class SyncRedundancies implements Action {
  public type = ActionTypes.SYNC_REDUNDANCIES;
  constructor(public payload: any = null) { }
}

export type Actions =
  FetchRedundancyAction
  | RedundancyFetchedAction
  | AddRedundancyAction
  | UpdateRedundancyAction
  | DeleteRedundancyAction
  | SetRedundancyTypeExcludedAction
  | SyncRedundancies;
