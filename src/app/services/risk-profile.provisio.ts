import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IInvestmentRiskProfile } from '@btas/models/risk-profile';

import 'rxjs/add/observable/of';

// fixture data imports
import { INVESTMENT_RISKPROFILE } from '@btas/data/risk-profile.reference';

import { getUrl } from './utils';


@Injectable()
export class ProvisioInvestmentRiskProfileService {

  private baseUrl: string = getUrl('riskProfile');

  constructor(private http: Http) {}

  public getInvestmentRiskProfile(): Observable<IInvestmentRiskProfile> {
    return Observable.of(INVESTMENT_RISKPROFILE);
  }

  public saveInvestmentRiskProfile(diff: any, identifier: string): void {
    this.http.put(`${this.baseUrl}/${identifier}`, diff);
  }

}
