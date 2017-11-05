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

import { ProvisioEstatePlanningService } from '@btas/services/estate-planning.provisio';
import { NotificationsService } from 'angular2-notifications';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as estateplanning from '@btas/actions/estate-planning';

import jsonpatch from 'fast-json-patch';
import * as _ from 'lodash';

@Injectable()
export class EstatePlanningEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getEstatePlannings: Observable<Action> = this.actions
    .ofType(estateplanning.ActionTypes.FETCH_ESTATEPLANNING)
    .switchMap(() => this.service.getEstatePlannings())
    .map((c) => new estateplanning.EstatePlanningsFetchedAction(c));

  @Effect()
  private syncLiabilities: Observable<Action> = this.actions
    .ofType(estateplanning.ActionTypes.SYNC_ESTATEPLANNING)
    .withLatestFrom(this.store, (action, state) => {
      const diff = jsonpatch.compare(
        state.estateplanning.savedEstatePlanning,
        _.pick(
          state.estateplanning,
          [
            'will', 'powerOfAttorney',
            'deathNomination'
          ]
        )
      );
      // save to super backend
      this.snService.success('Estate Planning Saved');
    }).map(() => new commonActions.SyncingFinishedAction());

  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private service: ProvisioEstatePlanningService,
    private snService: NotificationsService
  ) {}
}
