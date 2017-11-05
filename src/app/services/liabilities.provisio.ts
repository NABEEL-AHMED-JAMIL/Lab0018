import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ILiabilities } from '@btas/models/liabilities';

import 'rxjs/add/observable/of';

// fixture data imports
import { LIABILITIES } from '@btas/data/liabilities.reference';

import { getUrl } from './utils';


@Injectable()
export class ProvisioLiabilitiesService {

  private baseUrl: string = getUrl('liabilities');

  constructor(private http: Http) {}

  public getLiabilities(): Observable<ILiabilities> {
    return Observable.of(LIABILITIES);
  }

  public saveLiabilities(diff: any, identifier: string): void {
    this.http.put(`${this.baseUrl}/${identifier}`, diff);
  }

}
