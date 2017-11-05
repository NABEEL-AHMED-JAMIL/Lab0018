import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { FetchProfileAction, ProfileFetchedAction } from '@btas/actions/client';

import { ProvisioClientService } from '@btas/services/client.provisio';
import { ClientEffects } from '../client';

import * as uuid from 'uuid/v4';


describe('ClientEffects', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      ClientEffects,
      {
        provide: ProvisioClientService,
        useValue: jasmine.createSpyObj(
          'clientService', ['getProfile', 'createProfile'])
      }
    ]
  }));

  function setup(params?: {
    getProfileReturnValue?: any,
    createProfileReturnValue?: any
  }) {
    const clientService = TestBed.get(ProvisioClientService);
    if (params) {
      if (params.getProfileReturnValue) {
        clientService.getProfile
          .and.returnValue(params.getProfileReturnValue);
      }
      if (params.createProfileReturnValue) {
        clientService.createProfile
          .and.returnValue(params.createProfileReturnValue);
      }
    }

    return {
      runner: TestBed.get(EffectsRunner),
      clientEffects: TestBed.get(ClientEffects)
    };
  }

  describe('getProfile', () => {
    it('should return correct profile without creating', fakeAsync(() => {
      const clientIds = ['3', '4'];
      const profile = uuid();
      const { runner, clientEffects } = setup({
        getProfileReturnValue: Observable.of([profile, clientIds])
      });

      const expectedResult = new ProfileFetchedAction(profile);
      runner.queue(new FetchProfileAction(clientIds));

      let result = null;
      clientEffects.getProfile.subscribe(_result => result = _result);

      expect(result).toEqual(expectedResult);
    }));

    it('should return newly created profile', fakeAsync(() => {
      const clientIds = ['3', '5'];
      const createdProfile = uuid();
      const { runner, clientEffects } = setup({
        getProfileReturnValue: Observable.of([null, clientIds]),
        createProfileReturnValue: Observable.of([createdProfile, clientIds])
      });

      const expectedResult = new ProfileFetchedAction(createdProfile);
      runner.queue(new FetchProfileAction(clientIds));

      let result = null;
      clientEffects.getProfile.subscribe(_result => result = _result);

      expect(result).toEqual(expectedResult);
    }));
  });
});
