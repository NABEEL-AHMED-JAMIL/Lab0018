/**
 * This is a service to figure out breadcrumbs from router state
 */

import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Breadcrumb } from '@btas/components/breadcrumb/breadcrumb';
import { L } from '@btas/lang';

// due to AoT, we cannot use Function => Function in routes
// so we keep the translatable lookup in here

const LOOKUP = {
  'about-you': L('About You'),
  'strategies': L('Strategies'),
  'my-advice': L('My Advice'),
  'playground': L('Playground'),
  'welcome': L('Welcome'),
  'personal-details': L('Personal Details'),
  'risk-profile': L('Risk Profile'),
  'assets': L('Assets'),
  'cash-flow': L('Cashflow'),
  'liabilities': L('Liabilities'),
  'superannuation': L('Superannuation'),
  'personal-insurance': L('Personal Insurance'),
  'needs-analysis': L('Needs Analysis'),
  'product-preferences': L('Product References'),
  'redundancy-etp': L('Redundancy / ETP'),
  'estate-planning': L('Estate Planning'),
  'social-security': L('Social Security')
};


/**
 * Each domain may have their own way of putting breadcrumbs together
 */
interface IBreadcrumbService {
  getBreadcrumbs(route: ActivatedRoute): Breadcrumb[];
}


class BaseBreadcrumbService implements IBreadcrumbService {
  public getBreadcrumbs(route: ActivatedRoute): Breadcrumb[] {
    return [];
  }
}


class AboutYouBreadcrumbService extends BaseBreadcrumbService  {
  public getBreadcrumbs(route: ActivatedRoute): Breadcrumb[] {
    // for now let's keep this one stupid
    const firstRoute = route.children.find((c) => 'about-you' === c.outlet);
    if (!firstRoute) {
      return super.getBreadcrumbs(route);
    }

    const snapshot = firstRoute.snapshot;
    const path = snapshot.url[0].path;
    return [
      new Breadcrumb(LOOKUP[path], {
        outlets: {
          [snapshot.outlet]: path
        }
      })
    ];
  }
}


@Injectable()
export class BreadcrumbService {

  private _baseService: BaseBreadcrumbService;
  private _aboutYouService: AboutYouBreadcrumbService;

  public getBreadcrumbs(route: ActivatedRoute): Breadcrumb[] {
    const snapshot = route.firstChild.snapshot;
    const path = snapshot.url[0].path;
    const service = this.getModuleService(path);

    return [
      new Breadcrumb(LOOKUP[path], `/${path}`),
      ...service.getBreadcrumbs(route.firstChild)
    ];
  }

  private get aboutYouService() {
    if (!this._aboutYouService) {
      this._aboutYouService = new AboutYouBreadcrumbService();
    }

    return this._aboutYouService;
  }

  private get baseService() {
    if (!this._baseService) {
      this._baseService = new BaseBreadcrumbService();
    }

    return this._baseService;
  }

  private getModuleService(moduleName: string): IBreadcrumbService {
    switch (moduleName) {
      case 'about-you':
        return this.aboutYouService;
      default:
        return this.baseService;
    }
  }

}
