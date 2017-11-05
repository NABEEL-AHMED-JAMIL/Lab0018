import {
  Component, ChangeDetectionStrategy, OnInit,
  ViewEncapsulation, OnDestroy, HostListener,
  ChangeDetectorRef
} from '@angular/core';
import {
  Router, NavigationEnd
} from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie';

import * as fromRoot from '@btas/reducers';
import { NavItem } from '@btas/components/nav/nav-item';
import { LoadingService } from '@btas/components/loading/loading.service';
import { L } from '@btas/lang';

import * as LOGO_URL from '@images/bt-logo-white.png';
import * as LOADING_IMAGE_URL from '@images/loading.gif';


@Component({
  selector: 'btas-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.pug',
  styleUrls: [
    './angular2-notifications/custom.scss',
    './app.component.scss',
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {

  public showHeading: boolean = false;
  public navItems: NavItem[];
  public loadingImageUrl: string = LOADING_IMAGE_URL;
  public logoUrl: string = LOGO_URL;

  public snOptions = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    pauseOnHover: false,
    maxStack: 1,
    showProgressBar: false
  };

  constructor(
    private store: Store<fromRoot.State>,
    private service: LoadingService,
    private cookie: CookieService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  @HostListener('window:beforeunload', ['$event'])
  public unloadListener(event) {
    this.cookie.removeAll();
  }

  public ngOnInit(): void {
    this.navItems = [
      new NavItem(L('About You'), '/about-you'),
      new NavItem(L('Strategies'), '/strategies'),
      new NavItem(L('My Advice'), '/my-advice'),
      new NavItem(L('Playground'), '/playground')
    ];
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        this.showHeading =
          !event.url.startsWith('/welcome')
          && event.url !== '/';
        this.cdr.markForCheck();
      }
    });
  }

  public ngOnDestroy() {
    document.body.appendChild(document.createElement('btas-app'));
  }
}
