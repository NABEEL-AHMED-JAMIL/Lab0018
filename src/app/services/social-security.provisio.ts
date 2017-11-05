import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ISocialSecurity } from '@btas/models/social-security';

import { SOCIAL_SECURITY } from '@btas/data/test/social-security';
import { BaseProvisioService } from '@btas/services/base.provisio';
import { CookieService } from 'ngx-cookie';


@Injectable()
export class ProvisioSocialSecurityService extends BaseProvisioService {
  protected namespace = 'social-security';

  constructor(protected http: Http, protected cookieService: CookieService) {
    super(http, cookieService);
  }

  public getSocialSecurity(id: string): Observable<ISocialSecurity> {
    return Observable.of(SOCIAL_SECURITY);
  }
}
