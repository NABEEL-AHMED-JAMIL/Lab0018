import { Http, Headers } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';

import { IDataModel } from '@btas/models/base';

import { getUrl } from './utils';


export abstract class BaseProvisioService {

  protected namespace: string = '';

  constructor(protected http: Http, protected cookieService: CookieService) {}

  protected get baseUrl(): string {
    return getUrl(this.namespace);
  }

  protected get headerOptions() {
    return {
      sessionKey: this.cookieService.get('provisioSessionKey')
    };
  }

  public probeResource(
    identifier: string, namespace: string = this.namespace
  ): Observable<boolean> {

    const resourceUrl = `${this.baseUrl}/${identifier}`;
    return this.makeGet(resourceUrl, {
      'no-content': true
    }).map(res => true).catch(err => Observable.of(false));

  }

  public createResource(
    identifier: string, body: any = {}, namespace: string = this.namespace
  ): Observable<boolean> {

    const resourceUrl = `${this.baseUrl}/${identifier}`;
    return this.makePost(resourceUrl, body)
      .map(res => res.json().success)
      .catch(() => Observable.of(false));

  }

  public getResource(
    identifier: string,
    namespace: string = this.namespace
  ): Observable<any> {

    const resourceUrl = `${this.baseUrl}/${identifier}`;
    return this.makeGet(resourceUrl).map(res => res.json() as IDataModel);

  }

  public patchResource(
    identifier: string,
    diff: any,
    namespace: string = this.namespace
  ): Observable<any> {

    const resourceUrl = `${this.baseUrl}/${identifier}`;
    return this.makeGet(resourceUrl, {
      'no-content': true
    })
      .switchMap(() => {
        return this.makePatch(resourceUrl, diff);
      })
      .catch((err) => {
        return this.createResource(identifier)
          .switchMap(() => {
            return this.makePatch(resourceUrl, diff);
          });
      });

  }

  protected makeGet(url: string, headerOptions: Object = null) {
    return this.http.get(url, {
      headers: new Headers({
        ...this.headerOptions,
        ...headerOptions,
      })
    });
  }

  protected makePost(url: string, body = {}, headerOptions: Object = null) {
    return this.http.post(url, body, {
      headers: new Headers({
        ...this.headerOptions,
        ...headerOptions
      })
    });
  }

  protected makePatch(url: string, body = {}, headerOptions: Object = null) {
    return this.http.patch(url, body, {
      headers: new Headers({
        ...this.headerOptions,
        ...headerOptions
      })
    });
  }

}
