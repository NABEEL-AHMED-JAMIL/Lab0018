import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PlaygroundService } from '@btas/services/playground';
import * as playground from '@btas/actions/playground';


@Injectable()
export class PlaygroundEffects {

  /* tslint:disable:no-unused-variable */
  @Effect()
  private getHero: Observable<Action> = this.actions
    .ofType(playground.ActionTypes.FETCH_HERO)
    .switchMap(() => this.service.getHero())
    .map((c) => new playground.HeroFetchedAction(c));

  constructor(private actions: Actions, private service: PlaygroundService) { }

}
