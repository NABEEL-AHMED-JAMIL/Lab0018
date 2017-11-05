import { Action } from '@ngrx/store';

import { IDataModel } from '@btas/models/base';
import { IInvestmentRiskProfile } from '@btas/models/risk-profile';
import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_RISKPROFILE: type('FETCH_RISKPROFILE'),
  RISKPROFILE_FETCHED: type('RISKPROFILE_FETCHED'),
  ADD_RISKPROFILE: type('ADD_RISKPROFILE'),
  UPDATE_RISKPROFILE: type('UPDATE_RISKPROFILE'),
  DELETE_RISKPROFILE: type('DELETE_RISKPROFILE'),
  SET_RISKPROFILE_TYPE_EXCLUDED: type('SET_RISKPROFILE_TYPE_EXCLUDED'),
  SYNC_RISKPROFILE: type('SYNC_RISKPROFILE'),
};

export class FetchRiskProfileAction implements Action {
  public type = ActionTypes.FETCH_RISKPROFILE;
  constructor(public payload: any = null) {}
}


export class RiskProfileFetchedAction implements Action {
  public type = ActionTypes.RISKPROFILE_FETCHED;
  constructor(public payload: IInvestmentRiskProfile) {}
}


export class AddRiskProfileAction implements Action {
  public type = ActionTypes.ADD_RISKPROFILE;
  constructor(public payload: string) {}
}


export class UpdateRiskProfileAction implements Action {
  public type = ActionTypes.UPDATE_RISKPROFILE;
  constructor(public payload: { type: string, newValue: IDataModel }) { }
}


export class DeleteRiskProfileAction implements Action {
  public type = ActionTypes.DELETE_RISKPROFILE;
  constructor(public payload: { type: string, id: string }) {}
}


export class SetRiskProfileTypeExcludedAction implements Action {
  public type = ActionTypes.SET_RISKPROFILE_TYPE_EXCLUDED;
  constructor(public payload: { type: string, excluded: boolean }) {}
}


export class SyncRiskProfile implements Action {
  public type = ActionTypes.SYNC_RISKPROFILE;
  constructor(public payload: any = null) { }
}

export type Actions =
  FetchRiskProfileAction
  | RiskProfileFetchedAction
  | AddRiskProfileAction
  | UpdateRiskProfileAction
  | DeleteRiskProfileAction
  | SetRiskProfileTypeExcludedAction
  | SyncRiskProfile
;
