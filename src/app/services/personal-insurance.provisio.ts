import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { IPersonalInsurance } from '@btas/models/personal-insurance';

import 'rxjs/add/observable/of';

// fixture data imports
import { PERSONALINSURANCE } from '@btas/data/personal-insurance.reference';

import { getUrl } from './utils';

@Injectable()
export class ProvisioPersonalInsurancePoliciesService {

  private baseUrl: string = getUrl('personalInsurance');

  constructor(private http: Http) {}

  public getPersonalInsurance(): Observable<IPersonalInsurance> {
    return Observable.of(PERSONALINSURANCE);
  }

  public savePersonalInsurance(diff: any, identifier: string): void {
    this.http.put(`${this.baseUrl}/${identifier}`, diff);
  }

}
