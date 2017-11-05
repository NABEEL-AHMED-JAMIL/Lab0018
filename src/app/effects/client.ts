import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { NotificationsService } from 'angular2-notifications';

import { ProvisioClientService } from '@btas/services/client.provisio';
import { Clients } from '@btas/models/client';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as client from '@btas/actions/client';

import jsonpatch from 'fast-json-patch';


@Injectable()
export class ClientEffects {

  /* tslint:disable:no-unused-variable */

  @Effect()
  private getProfile: Observable<Action> = this.actions
    .ofType(client.ActionTypes.FETCH_PROFILE)
    .map(toPayload)
    .switchMap(clientIds => this.service.getProfile(clientIds))
    .switchMap(([profile, clientIds]) => profile
      ? Observable.of([profile, clientIds])
      : this.service.createProfile(clientIds))
    .map(([profile, clientIds]) => {
      this.cookie.put('profile', profile);
      return new client.ProfileFetchedAction(profile);
    });

  @Effect()
  private getClients: Observable<Action> = this.actions
    .ofType(client.ActionTypes.FETCH_CLIENTS)
    .withLatestFrom(this.store)
    .filter(([action, state]) => !!state.client.profile)
    .map(([action, state]) => state.client.profile)
    .switchMap(profile => this.service.getClients(profile)
      .map((c) => {
        return new client.ClientsFetchedAction(c);
      })
      .catch(err => Observable.of(new client.ClientsFetchErrorAction(err)))
    );

  @Effect()
  private syncClients: Observable<Action> = this.actions
    .ofType(client.ActionTypes.SYNC_CLIENTS)
    .withLatestFrom(this.store)
    .filter(([action, state]) => !!state.client.profile)
    .map(([action, state]) => state.client.profile)
    .switchMap(profile => this.service.probeResource(profile))
    .withLatestFrom(this.store, (exists, state) => {
      const current: Clients = {
        main: state.client.main
      };

      if (state.client.secondary) {
        current.secondary = state.client.secondary;
      }

      const diff = jsonpatch.compare(state.client.savedClients, current);

      return {
        exists,
        current,
        diff,
        profile: state.client.profile,
      };
    })
    .switchMap(({ exists, current, diff, profile }) => {
      return (exists
        ? this.service.patchResource(profile, diff)
        : this.service.createResource(profile, current)
      )
      .map(() => {
        this.snService.success('Clients Saved');
        return new client.ClientsSynced();
      })
      .catch((err) => {
        this.snService.error('Failed to save clients');
        return Observable.of(new commonActions.SyncingFailedAction(err));
      });
    });

  @Effect()
  private getReferral: Observable<Action> = this.actions
    .ofType(client.ActionTypes.FETCH_REFERRAL)
    .withLatestFrom(this.store)
    .filter(([action, state]) => !!state.client.profile)
    .switchMap(([action, state]) => this.service.getReferral())
    .map(r => new client.ReferralFetchedAction(r));

  @Effect()
  private getDependents: Observable<Action> = this.actions
    .ofType(client.ActionTypes.FETCH_DEPENDENTS)
    .withLatestFrom(this.store)
    .filter(([action, state]) => !!state.client.profile)
    .switchMap(([action, state]) => this.service.getDependents())
    .map(ds => new client.DependentsFetchedAction(ds));

  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private service: ProvisioClientService,
    private cookie: CookieService,
    private snService: NotificationsService
  ) {}

}
