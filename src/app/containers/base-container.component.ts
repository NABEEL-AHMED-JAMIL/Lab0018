import {
  Component, OnInit, AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { Selector } from 'reselect';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/zip';
import { CookieService } from 'ngx-cookie';

import * as fromRoot from '@btas/reducers';
import { NotificationsService } from 'angular2-notifications';
import { LoadingService } from '@btas/components/loading/loading.service';

/** Base container component that does all the dirty wiring like onInit, AfterViewInit, etc. */
@Component({
  selector: 'btas-base-container',
  template: ''
})
export class BaseContainerComponent implements OnInit, AfterViewInit {

  protected afterViewInit: boolean = false;

  // controls whether or not the screen should ignore the old state in store
  protected shouldSkipOldState: boolean = true;

  constructor(
    protected store: Store<fromRoot.State>,
    protected notifService: NotificationsService,
    protected loadingService: LoadingService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected location: Location,
    protected cookieService: CookieService
  ) { }

  public get currentUrl() {
    return this.location.path(false);
  }

  public getParam(param: string) {
    return this.activatedRoute.snapshot.params[param];
  }

  public ngOnInit(): void {
    this.onInit();
  }

  public ngAfterViewInit(): void {
    this.afterViewInit = true;
    this.startLoading();

    Observable.zip(...this.fetchData()).subscribe(
      (observableResults) => {
        if (!this.stillLoading(observableResults)) {
          this.stopLoading();
        }
      },
      (error) => {
        this.stopLoading();
      },
      () => {
        this.stopLoading();
      });
  }

  public onNavigateAway(): void { }

  protected onInit(): void { }

  /**
   *
   * this method should return only the MAJOR observables, e.g.,
   * observable1, observable2, observable3, observable4
   * among which 2,3,4 are all derived from observable1, then
   * observable1 is the MAJOR observable.
   * Hence here we should
   * return [observable1];
   *
   */
  protected fetchData(): Array<Observable<any>> {
    return [Observable.of(42)];
  }

  protected startLoading() {
    this.loadingService.start();
  }

  protected stopLoading() {
    this.loadingService.complete();
    this.onStopLoading();
  }

  protected onStopLoading() {
  }

  /**
   * Decide whether or not the loading should finish
   *
   * @param observableResults: all the current observable results
   */
  protected stillLoading(observableResults) {
    return observableResults.reduce((pre, cur) => pre || cur, false);
  }

  /**
   * @param selector: selector that should be observed
   */
  protected storeSelect(selector: Selector<any, any>) {
    return this.store.select(selector).skip(this.shouldSkipOldState ? 1 : 0);
  }

}
