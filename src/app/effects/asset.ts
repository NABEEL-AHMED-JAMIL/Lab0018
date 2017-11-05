import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';

import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { NotificationsService } from 'angular2-notifications';

import { ProvisioAssetService } from '@btas/services/asset.provisio';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as asset from '@btas/actions/asset';

import jsonpatch from 'fast-json-patch';
import * as _ from 'lodash';


@Injectable()
export class AssetEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getAssets: Observable<Action> = this.actions
    .ofType(asset.ActionTypes.FETCH_ASSETS)
    .withLatestFrom(this.store)
    .filter(([action, state]) => !!state.client.profile)
    .map(([action, state]) => state.client.profile)
    .switchMap((profile) => {
      return this.service.getResource(profile)
        .map((c) => new asset.AssetsFetchedAction(c))
        .catch((err) => Observable.of(new asset.AssetsFetchErrorAction(err)));
    });

  @Effect()
  private syncAssets: Observable<Action> = this.actions
    .ofType(asset.ActionTypes.SYNC_ASSETS)
    .withLatestFrom(this.store)
    .filter(([action, state]) => !!state.client.profile)
    .map(([action, state]) => state.client.profile)
    .switchMap(profile => this.service.probeResource(profile))
    .withLatestFrom(this.store, (exists, state) => {
      const currentAsset = _.pick(
        state.asset,
        [
          'lifeStyles',
          'cashAndFixedInterests',
          'investmentProperties',
          'sharesAndManagedFunds',
          'business',
          'other',
          'assetTypesExcluded'
        ]
      );
      const diff = jsonpatch.compare(state.asset.savedAssets, currentAsset);
      return {
        exists,
        diff,
        current: currentAsset,
        profile: state.client.profile
      };
    })
    .switchMap(({ exists, current, diff, profile }) => {
      return (exists
        ? this.service.patchResource(profile, diff)
        : this.service.createResource(profile, current)
      )
      .map(() => {
        this.snService.success('Assets Saved');
        return new asset.AssetsSynced();
      })
      .catch((err) => {
        this.snService.error('Failed to save assets');
        return Observable.of(new commonActions.SyncingFailedAction(err));
      });
    });

  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private service: ProvisioAssetService,
    private cookie: CookieService,
    private snService: NotificationsService
  ) {}

}
