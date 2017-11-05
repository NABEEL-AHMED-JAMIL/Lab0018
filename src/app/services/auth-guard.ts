import { Injectable } from '@angular/core';
import {
 CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
 CanActivateChild, Router
} from '@angular/router';

import { AuthService } from './auth';


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin(state.url);
  }

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  private checkLogin(url: string) {
    let result = true;
    if (!url.startsWith('/welcome')) {
      result = this.authService.isLoggedIn;
    }

    if (!result) {
      const sessionKey = '2b1327b6-6654-40f8-bff3-42ccf4ff50e4';
      const clientIds = '3+4';
      const locale = 'en';

      this.authService.returnUrl = url;
      this.router.navigate(['/welcome'], {
        queryParams: { sessionKey, clientIds, locale },
        fragment: 'anchor'
      });
    }

    return result;
  }

}
