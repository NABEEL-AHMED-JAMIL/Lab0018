import { TestBed, inject } from '@angular/core/testing';
import {
  Http, BaseRequestOptions, Response, ResponseOptions,
  ResponseType
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import * as uuid from 'uuid/v4';

import { ProvisioClientService } from '../client.provisio';


describe('getProfile', () => {
  let service: ProvisioClientService = null;
  let backend: MockBackend = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (
            backendInstance: MockBackend, defaultOptions: BaseRequestOptions
          ) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        ProvisioClientService
      ]
    });
  });

  beforeEach(
    inject(
      [ProvisioClientService, MockBackend],
      (provClientService, mockBackend) => {
        service = provClientService;
        backend = mockBackend;
      }
    )
  );

  const profiles = {
    '3+4': uuid()
  };

  it('should return profile', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      const profileId = connection.request.url.split('/').pop();
      const profile = profiles[profileId];

      connection.mockRespond(new Response(
        new ResponseOptions({
          status: 200,
          body: JSON.stringify({profile})
        })
      ));
    });

    service.getProfile(['3', '4']).subscribe(([profile, clientIds]) => {
      expect(profile).toEqual(profiles['3+4']);
      expect(clientIds).toEqual(['3', '4']);
      done();
    });
  });

  it('should return null', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      connection.mockError(new Response(
        new ResponseOptions({
          type: ResponseType.Error,
          status: 404,
          body: JSON.stringify({ success: false, message: null })
        })
      ) as any);
    });

    service.getProfile(['3', '5']).subscribe(([profile, clientIds]) => {
      expect(profile).toBeNull();
      expect(clientIds).toEqual(['3', '5']);
      done();
    });
  });

});
