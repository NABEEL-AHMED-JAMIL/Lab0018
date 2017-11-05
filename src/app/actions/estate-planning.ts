import { Action } from '@ngrx/store';

import { IDataModel } from '@btas/models/base';
import { IEstatePlanning } from '@btas/models/estate-planning';
import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_ESTATEPLANNING: type('FETCH_ESTATEPLANNING'),
  ESTATEPLANNING_FETCHED: type('ESTATEPLANNING_FETCHED'),
  ADD_ESTATEPLANNING: type('ADD_ESTATEPLANNING'),
  UPDATE_ESTATEPLANNING: type('UPDATE_ESTATEPLANNING'),
  DELETE_ESTATEPLANNING: type('DELETE_ESTATEPLANNING'),
  SET_ESTATEPLANNING_EXCLUDED: type('SET_ESTATEPLANNING_EXCLUDED'),
  SYNC_ESTATEPLANNING: type('SYNC_ESTATEPLANNING'),
};


export class FetchEstatePlanningsAction implements Action {
  public type = ActionTypes.FETCH_ESTATEPLANNING;
  constructor(public payload: any = null) {}
}


export class EstatePlanningsFetchedAction implements Action {
  public type = ActionTypes.ESTATEPLANNING_FETCHED;
  constructor(public payload: IEstatePlanning) {}
}


export class AddEstatePlanningsAction implements Action {
  public type = ActionTypes.ADD_ESTATEPLANNING;
  constructor(public payload: string) {}
}


export class UpdateEstatePlanningsAction implements Action {
  public type = ActionTypes.UPDATE_ESTATEPLANNING;
  constructor(public payload: { type: string, newValue: IDataModel }) {}
}


export class DeleteEstatePlanningsAction implements Action {
  public type = ActionTypes.DELETE_ESTATEPLANNING;
  constructor(public payload: { type: string, id: string }) {}
}


export class SetEstatePlanningsExcludedAction implements Action {
  public type = ActionTypes.SET_ESTATEPLANNING_EXCLUDED;
  constructor(public payload: { type: string, excluded: boolean }) {}
}


export class SyncEstatePlannings implements Action {
  public type = ActionTypes.SYNC_ESTATEPLANNING;
  constructor(public payload: any = null) { }
}

export type Actions = FetchEstatePlanningsAction
  | EstatePlanningsFetchedAction
  | AddEstatePlanningsAction
  | UpdateEstatePlanningsAction
  | DeleteEstatePlanningsAction
  | SetEstatePlanningsExcludedAction
  | SyncEstatePlannings
;
