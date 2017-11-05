import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';

import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProvisioSuperPensionsService } from '@btas/services/super-pensions.provisio';
import { NotificationsService } from 'angular2-notifications';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as superpensions from '@btas/actions/super-pensions';

import jsonpatch from 'fast-json-patch';
import * as _ from 'lodash';


@Injectable()
export class SuperPensionsEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getSuperPensions: Observable<Action> = this.actions
    .ofType(superpensions.ActionTypes.FETCH_SUPERPENSIONS)
    .switchMap(() => this.service.getSuperPensions())
    .map((c) => new superpensions.SuperPensionsFetchedAction(c));

  @Effect()
  private syncSuperPensions: Observable<Action> = this.actions
    .ofType(superpensions.ActionTypes.SYNC_SUPERPENSIONS)
    .withLatestFrom(this.store, (action, state) => {
      const diff = jsonpatch.compare(
        state.superPensions.savedSuperPensions,
        _.pick(
          state.superPensions,
          [
            'superannuations', 'contributionHistories',
            'pensions', 'annuities'
          ]
        )
      );
      // save to super backend
      this.snService.success('Superannuation and Pensions Saved');
    }).map(() => new commonActions.SyncingFinishedAction());


  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private service: ProvisioSuperPensionsService,
    private snService: NotificationsService
  ) {}

}
