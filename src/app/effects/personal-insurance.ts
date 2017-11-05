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


import {
  ProvisioPersonalInsurancePoliciesService
} from '@btas/services/personal-insurance.provisio';
import { NotificationsService } from 'angular2-notifications';

import * as fromRoot from '@btas/reducers';
import * as commonActions from '@btas/actions/common';
import * as personalInsurance from '@btas/actions/personal-insurance';

import jsonpatch from 'fast-json-patch';
import * as _ from 'lodash';

@Injectable()
export class PersonalInsuranceEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getPersonalInsurance: Observable<Action> = this.actions
    .ofType(personalInsurance.ActionTypes.FETCH_PERSONALINSURANCE)
    .switchMap(() => this.service.getPersonalInsurance())
    .map((c) => new personalInsurance.PersonalInsuranceFetchedAction(c));

  @Effect()
  private syncPersonalInsurance: Observable<Action> = this.actions
    .ofType(personalInsurance.ActionTypes.SYNC_PERSONALINSURANCE)
    .withLatestFrom(this.store, (action, state) => {
      const diff = jsonpatch.compare(
        state.personalInsurance.savedPersonalInsurance,
        _.pick(
          state.personalInsurance,
          [
            'lifeCoverType', 'tpdCoverType',
            'traumaCoverType', 'incomeProtectionCoverType'
          ]
        )
      );
      this.snService.success('Personal Insurance Policies Saved');
    }).map(() => new commonActions.SyncingFinishedAction());

  constructor(
    private store: Store<fromRoot.State>,
    private actions: Actions,
    private service: ProvisioPersonalInsurancePoliciesService,
    private snService: NotificationsService
  ) {}

}
