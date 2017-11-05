import {
  Component, AfterViewInit, OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie';
import * as fromRoot from '@btas/reducers';

import * as client from '@btas/actions/client';
import {
  getProfileLoadingFlag,
  getClientsLoadingFlag,
} from '@btas/reducers';
import { AuthService } from '@btas/services/auth';


@Component({
  selector: 'btas-welcome',
  templateUrl: './welcome.component.pug',
  styleUrls: [
    './welcome.component.scss'
  ]
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  public profileLoading$: Observable<boolean>;
  public clientsLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromRoot.State>,
    private authService: AuthService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected cookieService: CookieService,
  ) {}

  public getParam(param: string) {
    let result;
    this.activatedRoute.queryParams.take(1).subscribe(params => result = params[param]);
    return result;
  }

  public ngOnInit() {
    this.cookieService.put('locale', this.getParam('locale'));
    this.cookieService.put('provisioSessionKey', this.getParam('sessionKey'));
    this.cookieService.putObject('clientIds', this.getParam('clientIds').split('+'));

    this.profileLoading$ = this.store.select(getProfileLoadingFlag);
    this.clientsLoading$ = this.store.select(getClientsLoadingFlag);
  }

  public ngAfterViewInit() {
    const clientIds = this.cookieService.getObject('clientIds') as string[];
    this.store.dispatch(new client.FetchProfileAction(clientIds));
    const profileLoadingSub = this.profileLoading$.subscribe((result) => {
      if (!result) {
        profileLoadingSub.unsubscribe();
        this.store.dispatch(new client.FetchClientsAction());
        const clientsLoadingSub = this.clientsLoading$.subscribe((stillLoading) => {
          if (false === stillLoading) {
            setTimeout(() => {
              const returnUrl = this.authService.returnUrl;
              clientsLoadingSub.unsubscribe();
              this.router.navigateByUrl(returnUrl ? returnUrl : '/about-you');
            }, 1000);
          }
        });
      }
    });
  }

}
