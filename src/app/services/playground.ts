import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/observable/of';

import * as uuid from 'uuid/v4';


@Injectable()
export class PlaygroundService {

  constructor(private http: Http) { }

  public getHero(): Observable<Object> {
    return Observable.of([
      {
        id: uuid(),
        customerKey: 1,
        title: 'Mr',
        preferredName: 'Superman',
        givenName: 'Clark',
        surname: 'Kent',
        dateOfBirth: '1980-07-07',
        gender: 'M',
        maritalStatus: 'not married',
        age: 37,
        relationship: 'hmm'
      },
      {
        id: uuid(),
        customerKey: 1,
        title: 'Ms',
        preferredName: 'Catwoman',
        givenName: 'Harley',
        surname: 'Berry',
        dateOfBirth: '1980-03-07',
        gender: 'F',
        maritalStatus: 'not married',
        age: 37,
        relationship: 'hmm'
      }]);
  }

}
