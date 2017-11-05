import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import {
  style,
  trigger,
  state,
  animate,
  transition
} from '@angular/animations';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie';

import * as fromRoot from '@btas/reducers';
import { MasterViewItem } from '@btas/components/master-view/master-view-item';
import { L } from '@btas/lang';


@Component({
  selector: 'btas-about-you',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-you.component.pug',
  styleUrls: ['./about-you.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in <=> out', animate('400ms ease-in-out'))
    ]),
    trigger('btnInOut', [
      state('in', style({
        transform: 'translate3d(200%, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ])
  ]
})
export class AboutYouComponent implements OnInit {
  public viewItems: MasterViewItem[];
  public menuState: string = 'out';

  constructor(
    private store: Store<fromRoot.State>,
    private cookie: CookieService
  ) {}

  public ngOnInit(): void {
    this.viewItems = [
      new MasterViewItem(
        L('Goals'),
        {
          outlets: {
            'about-you': 'goals'
          }
        }),
      new MasterViewItem(
        L('Personal Details'),
        {
          outlets: {
            'about-you': 'personal-details'
          }
        }),
      new MasterViewItem(
        L('Estate Planning'),
        {
          outlets: {
            'about-you': 'estate-planning'
          }
        }),
      new MasterViewItem(
        L('Cashflow'),
        {
          outlets: {
            'about-you': 'cash-flow'
          }
        }),
      new MasterViewItem(
        L('Social Security'),
        {
          outlets: {
            'about-you': 'social-security'
          }
        }),
      new MasterViewItem(
        L('Assets'),
        {
          outlets: {
            'about-you': 'assets'
          }
        }),
      new MasterViewItem(
        L('Libilities'),
        {
          outlets: {
            'about-you': 'libilities'
          }
        }),
      new MasterViewItem(
        L('Superannuation & Pensions'),
        {
          outlets: {
            'about-you': 'superannuation'
          }
        }),
      new MasterViewItem(
        L('Redundancy / ETP'),
        {
          outlets: {
            'about-you': 'redundancy-etp'
          }
        }),
      new MasterViewItem(
        L('Personal Insurance'),
        {
          outlets: {
            'about-you': 'personal-insurance'
          }
        }),
      new MasterViewItem(
        L('Insurance Needs Analysis'),
        {
          outlets: {
            'about-you': 'needs-analysis'
          }
        }),
      new MasterViewItem(
        L('Investment Risk Profile'),
        {
          outlets: {
            'about-you': 'risk-profile'
          }
        }),
      new MasterViewItem(
        L('Product Preferences'),
        {
          outlets: {
            'about-you': 'product-preferences'
          }
        })
    ];
  }

  public toggle() {
     this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
