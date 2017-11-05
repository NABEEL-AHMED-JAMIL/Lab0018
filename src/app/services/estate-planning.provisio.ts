import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IEstatePlanning } from '@btas/models/estate-planning';

import 'rxjs/add/observable/of';

// fixture data imports
import { ESTATEPLANNING } from '@btas/data/estate-planning.reference';

import { getUrl } from './utils';


@Injectable()
export class ProvisioEstatePlanningService {

  private baseUrl: string = getUrl('estateplanning');

  constructor(private http: Http) {}

  public getEstatePlannings(): Observable<IEstatePlanning> {
    return Observable.of(ESTATEPLANNING);
  }

  public saveEstatePlannings(diff: any, identifier: string): void {
    this.http.put(`${this.baseUrl}/${identifier}`, diff);
  }
}
