import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ISuperPensions } from '@btas/models/super-pensions';

import 'rxjs/add/observable/of';

// fixture data imports
import { SUPERPENSIONS } from '@btas/data/super-pensions.reference';

import { getUrl } from './utils';


@Injectable()
export class ProvisioSuperPensionsService {

  private baseUrl: string = getUrl('super');

  constructor(private http: Http) {}

  public getSuperPensions(): Observable<ISuperPensions> {
    return Observable.of(SUPERPENSIONS);
  }

  public saveSuperPensions(diff: any, identifier: string): void {
    this.http.put(`${this.baseUrl}/${identifier}`, diff);
  }

}
