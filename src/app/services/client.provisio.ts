import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import {
  IClient,
  Clients,
  newClient,
} from '@btas/models/client';

import { IReferral } from '@btas/models/referral';
import { IDependent } from '@btas/models/dependent';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';

// fixture data imports
import { CLIENTS } from '@data/client.reference';
import { REFERRAL } from '@data/referral.reference';
import { DEPENDENTS } from '@data/dependent.reference';

import { stamp, getUrl } from './utils';
import { BaseProvisioService } from './base.provisio';
import { ReferenceService } from './reference';

import * as uuid from 'uuid/v4';


@Injectable()
export class ProvisioClientService extends BaseProvisioService {

  protected namespace = 'clients';

  constructor(
    protected http: Http,
    protected cookieService: CookieService,
    protected referenceService: ReferenceService
  ) {
    super(http, cookieService);
  }

  public getProfile(clientIds: string[]): Observable<any[]> {
    return this.makeGet(`${getUrl('profile')}/${clientIds.join('+')}`)
      .map((res) => {
        const result = res.json();
        return [result.profile, clientIds];
      }).catch((err) => {
        return Observable.of([null, clientIds]);
      }).delay(3000);
  }

  public createProfile(clientIds: string[]): Observable<any[]> {
    const profileId = clientIds.join('+');
    const newProfile = uuid();

    return this.makePost(`${getUrl('profile')}/${profileId}`, JSON.stringify({
      profile: newProfile
    }))
      .map((result) => {
        return result.json().success
          ? [newProfile, clientIds]
          : [null, clientIds];
      })
      .delay(3000);
  }

  public getClients(profile: string): Observable<{main: IClient, secondary?: IClient}> {
    // call coin to get key-info
    const coinData = {
      main: CLIENTS[0].keyInfo,
      secondary: CLIENTS[1].keyInfo
    };

    // this is tricky
    // but the code explains itself
    return this.getResource(profile)
      .switchMap((dsData) => {
        const clients = this.combineWithCoin(dsData, coinData);
        return Observable.of(clients);
      })
      .catch((err) => {
        const clients = this.createFromCoin(coinData);
        return Observable.of(clients);
      });
  }

  public getReferral(): Observable<IReferral> {
    return Observable.of(stamp(REFERRAL)).delay(5000);
  }

  public getDependents(): Observable<IDependent[]> {
    return Observable.of(DEPENDENTS.map(d => stamp(d))).delay(2000);
  }

  private combineWithCoin(dsData, coinData) {
    const mainClient = dsData.main || newClient();
    const result: Clients = {
      main: {
        keyInfo: {
          ...mainClient.keyInfo,
          ...coinData.main
        },
        ...mainClient
      }
    };

    if (coinData.secondary || dsData.secondary) {
      const secondaryClient = dsData.secondary || newClient();
      result.secondary = {
        keyInfo: {
          ...secondaryClient.keyInfo,
          ...coinData.secondary
        },
        ...secondaryClient
      };
    }

    return result;
  }

  private createFromCoin(coinData) {
    const mainClient = newClient();
    const result: Clients = {
      main: {
        ...mainClient,
        keyInfo: {
          ...mainClient.keyInfo,
          ...coinData.main,
        }
      }
    };

    if (coinData.secondary) {
      const secondaryClient = newClient();
      result.secondary = {
        ...secondaryClient,
        keyInfo: {
          ...secondaryClient.keyInfo,
          ...coinData.secondary
        }
      };
    }
    return result;
  }

}
