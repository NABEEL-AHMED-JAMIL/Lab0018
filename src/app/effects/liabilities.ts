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

import { ProvisioLiabilitiesService } from '@btas/services/liabilities.provisio';
import { NotificationsService } from 'angular2-notifications';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as liabilities from '@btas/actions/liabilities';

import jsonpatch from 'fast-json-patch';
import * as _ from 'lodash';

@Injectable()
export class LiabilitiesEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getLiabilities: Observable<Action> = this.actions
    .ofType(liabilities.ActionTypes.FETCH_LIABILITIES)
    .switchMap(() => this.service.getLiabilities())
    .map((c) => new liabilities.LiabilitiesFetchedAction(c));

  @Effect()
  private syncLiabilities: Observable<Action> = this.actions
    .ofType(liabilities.ActionTypes.SYNC_LIABILITIES)
    .withLatestFrom(this.store, (action, state) => {
      const diff = jsonpatch.compare(
        state.liabilities.savedLiabilities,
        _.pick(
          state.liabilities,
          [
            'homeMortgages', 'personalLoans',
            'creditCards', 'investmentLoans',
            'businessLoans', 'otherLoans'
          ]
        )
      );
      // save to super backend
      this.snService.success('Liabilities Saved');
    }).map(() => new commonActions.SyncingFinishedAction());

  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private service: ProvisioLiabilitiesService,
    private snService: NotificationsService
  ) {}

}
