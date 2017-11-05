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

import { ProvisioRedundancyService } from '@btas/services/redundancy.provisio';
import { NotificationsService } from 'angular2-notifications';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as redundancies from '@btas/actions/redundancy';

import jsonpatch from 'fast-json-patch';
import * as _ from 'lodash';


@Injectable()
export class RedundancyEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getRedundancies: Observable<Action> = this.actions
    .ofType(redundancies.ActionTypes.FETCH_REDUNDANCY)
    .switchMap(() => this.service.getRedundancies())
    .map((c) => new redundancies.RedundancyFetchedAction(c));


  @Effect()
  private syncRedundancy: Observable<Action> = this.actions
    .ofType(redundancies.ActionTypes.SYNC_REDUNDANCIES)
    .withLatestFrom(this.store, (action, state) => {
      const diff = jsonpatch.compare(
        state.redundancy.savedRedundancies,
        _.pick(
          state.redundancy,
          [
            'redundancies'
          ]
        )
      );
      // save to super backend
      this.snService.success('Redundancy Saved');
    }).map(() => new commonActions.SyncingFinishedAction());

  constructor(
    private actions: Actions,
    private service: ProvisioRedundancyService,
    private store: Store<fromRoot.State>,
    private snService: NotificationsService
    ) {}
}
