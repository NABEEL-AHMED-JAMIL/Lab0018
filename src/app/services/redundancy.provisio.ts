import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IRedundancy } from '@btas/models/redundancy';

import 'rxjs/add/observable/of';

// fixture data imports
import { REDUNDANCY } from '@btas/data/redundancy.reference';

import { getUrl } from './utils';

@Injectable()
export class ProvisioRedundancyService {

  private baseUrl: string = getUrl('super');

  constructor(private http: Http) {}

  public getRedundancies(): Observable<IRedundancy> {
    return Observable.of(REDUNDANCY);
  }

  public saveRedundancies(diff: any, identifier: string): void {
    this.http.put(`${this.baseUrl}/${identifier}`, diff);
  }

}
