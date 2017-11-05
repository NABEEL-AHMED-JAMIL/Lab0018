import { Action } from '@ngrx/store';

import { ISocialSecurity } from '@btas/models/social-security';
import { type } from '@btas/utils';
import { UIBlock, UIUnblock } from '@btas/actions/common';

export const ActionTypes = {
  FETCH_SOCIALSECURITY: type('FETCH_SOCIALSECURITY'),
  UPDATE_SOCIALSECURITY: type('UPDATE_SOCIALSECURITY'),
  SOCIALSECURITY_FETCHED: type('SOCIALSECURITY_FETCHED'),
  SOCIALSECURITY_FETCH_ERROR: type('SOCIALSECURITY_FETCH_ERROR'),
  SOCIALSECURITY_SYNCED: type('SOCIALSECURITY_SYNCED'),
  SYNC_SOCIAL_SECURITY: type('SYNC_SOCIAL_SECURITY')
};

@UIBlock(ActionTypes.FETCH_SOCIALSECURITY)
export class FetchSocialSecurityAction implements Action {
  public type = ActionTypes.FETCH_SOCIALSECURITY;
  constructor(public payload: any = null) {}
}

@UIUnblock(ActionTypes.FETCH_SOCIALSECURITY)
export class SocialSecurityFetchedAction implements Action {
  public type = ActionTypes.SOCIALSECURITY_FETCHED;
  constructor(public payload: ISocialSecurity) {}
}

@UIUnblock(ActionTypes.FETCH_SOCIALSECURITY)
export class SocialSecurityFetchErrorAction implements Action {
  public type = ActionTypes.SOCIALSECURITY_FETCH_ERROR;
  constructor(public payload: any) {}
}

export class UpdateSocialSecurityAction implements Action {
  public type = ActionTypes.UPDATE_SOCIALSECURITY;
  constructor(public payload: any) {}
}

export class SocialSecuritySynchedAction implements Action {
  public type = ActionTypes.SOCIALSECURITY_SYNCED;
  constructor(public payload?: any) {}
}

export class SyncSocialSecurityAction implements Action {
  public type = ActionTypes.SYNC_SOCIAL_SECURITY;
  constructor(public payload: any = null) {}
}

export type Actions = FetchSocialSecurityAction
  | SocialSecurityFetchedAction
  | UpdateSocialSecurityAction
  | SocialSecurityFetchErrorAction
  | SocialSecuritySynchedAction
  | SyncSocialSecurityAction;

