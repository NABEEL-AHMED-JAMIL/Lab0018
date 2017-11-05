import { Action } from '@ngrx/store';

import { type } from '@btas/utils';


export const ActionTypes = {
  FETCH_HERO: type('FETCH_HERO'),
  UPDATE_HERO: type('UPDATE_HERO'),
  HERO_FETCHED: type('HERO_FETCHED')
};


export class FetchHeroAction implements Action {
  public type = ActionTypes.FETCH_HERO;
  constructor(public payload: any = null) { }
}


export class HeroFetchedAction implements Action {
  public type = ActionTypes.HERO_FETCHED;
  constructor(public payload: any) { }
}


export class UpdateHeroAction implements Action {
  public type = ActionTypes.UPDATE_HERO;
  constructor(public payload: any) { }
}


export type Action =
  FetchHeroAction | UpdateHeroAction | HeroFetchedAction;
