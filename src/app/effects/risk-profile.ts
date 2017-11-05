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

import { ProvisioInvestmentRiskProfileService } from '@btas/services/risk-profile.provisio';
import { NotificationsService } from 'angular2-notifications';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as riskprofile from '@btas/actions/risk-profile';

import jsonpatch from 'fast-json-patch';
import * as _ from 'lodash';


@Injectable()
export class InvestmentRiskProfileEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getInvestmentRiskProfile: Observable<Action> = this.actions
    .ofType(riskprofile.ActionTypes.FETCH_RISKPROFILE)
    .switchMap(() => this.service.getInvestmentRiskProfile())
    .map((c) => new riskprofile.RiskProfileFetchedAction(c));

  @Effect()
  private syncInvestmentRiskProfile: Observable<Action> = this.actions
    .ofType(riskprofile.ActionTypes.SYNC_RISKPROFILE)
    .withLatestFrom(this.store, (action, state) => {
      const diff = jsonpatch.compare(
        state.riskProfile.savedInvestmentRiskProfile,
        _.pick(
          state.riskProfile,
          [
            'riskProfileResult'
          ]
        )
      );
      // save to super backend
      this.snService.success('Investment Risk Profile Saved');
    }).map(() => new commonActions.SyncingFinishedAction());


  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private service: ProvisioInvestmentRiskProfileService,
    private snService: NotificationsService
  ) {}

}
