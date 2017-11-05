import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/observable/of';

import { getUrl } from './utils';
import { BaseProvisioService } from './base.provisio';


@Injectable()
export class CommonProvisioService extends BaseProvisioService {

  protected namespace = 'common';

  constructor(protected http: Http, protected cookieService: CookieService) {
    super(http, cookieService);
  }

  public checkResourceSetup(namespace: string, identifier: string): Observable<boolean> {
    return this.makeGet(`${getUrl(namespace)}/${identifier}`, {
      'no-content': true
    })
      .map(() => true)
      .catch(() => Observable.of(false))
      .delay(3000);
    ;
  }

  public createResource(namespace: string, identifier: string): Observable<boolean> {
    return this.makePost(`${getUrl(namespace)}/${identifier}`)
      .switchMap((res) => {
        return Observable.of(res.json().success);
      })
      .catch(() => Observable.of(false));
  }

}
