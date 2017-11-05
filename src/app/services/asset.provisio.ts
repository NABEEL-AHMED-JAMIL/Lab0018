import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { BaseProvisioService } from './base.provisio';


@Injectable()
export class ProvisioAssetService extends BaseProvisioService {
  protected namespace = 'assets';

  constructor(protected http: Http, protected cookieService: CookieService) {
    super(http, cookieService);
  }
}
