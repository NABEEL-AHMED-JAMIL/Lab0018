import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProvisioSocialSecurityService } from '@btas/services/social-security.provisio';

import * as socialSecurity from '@btas/actions/social-security';
import * as commonActions from '@btas/actions/common';
import * as fromRoot from '@btas/reducers';

import jsonpatch from 'fast-json-patch';
import { ISocialSecurity } from '@btas/models/social-security';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class SocialSecurityEffects {

  private withProfile: Observable<string> = this.store
    .filter(state => !!state.client.profile)
    .map(state => state.client.profile)
    .take(1);

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getSocialSecurity: Observable<Action> = this.actions
    .ofType(socialSecurity.ActionTypes.FETCH_SOCIALSECURITY)
    .switchMap(() =>
      this.withProfile.switchMap(
        (profile) => this.service.getResource(profile)
          .map(
              res => new socialSecurity.SocialSecurityFetchedAction(res)
          )
          .catch(
              e => Observable.of(new socialSecurity.SocialSecurityFetchErrorAction(e)
          ))
        )
    );

  @Effect()
  private syncSocialSecurity: Observable<Action> = this.actions
    .ofType(socialSecurity.ActionTypes.SYNC_SOCIAL_SECURITY)
    .switchMap(() =>
      Observable.combineLatest(this.withProfile, this.store.take(1))
        .switchMap(([profile, state]) => {
          return this.service.probeResource(profile)
            .switchMap(exists => {
              let res;
              if (exists) {
                const patch = jsonpatch.compare(state.socialSecurity.saved, this.current(state));
                if (patch.length > 0) {
                  res = this.service.patchResource(profile, patch);
                } else {
                  return Observable.empty();
                }
              } else {
                res = this.service.createResource(profile, this.current(state));
              }

              return res.map(() => {
                this.snService.success('Social Security Saved');
                return new socialSecurity.SocialSecuritySynchedAction();
              })
              .catch(err => {
                this.snService.error('Failed to save social security details');
                return Observable.of(new commonActions.SyncingFailedAction(err));
              });
            });
        }
      ));

  constructor(
    private actions: Actions,
    private store: Store<fromRoot.State>,
    private snService: NotificationsService,
    private service: ProvisioSocialSecurityService) {
  }

  private current(state: fromRoot.State): ISocialSecurity {
    return state.socialSecurity.socialSecurity;
  }

  private saved(state: fromRoot.State): ISocialSecurity {
    return state.socialSecurity.saved;
  }

}
