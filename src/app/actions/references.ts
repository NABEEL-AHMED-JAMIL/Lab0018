import { Action } from '@ngrx/store';

import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_REFERENCE: type('FETCH_REFERENCE'),
  REFERENCE_FETCHED: type('REFERENCE_FETCHED')
};


export class FetchAction implements Action {
  public type = ActionTypes.FETCH_REFERENCE;
}


export class FetchedAction implements Action {
  public type = ActionTypes.REFERENCE_FETCHED;
  constructor(public payload: Map<string, string>) {}
}


export type Actions = FetchAction | FetchedAction;
