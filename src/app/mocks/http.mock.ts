import { TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Headers, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export class ResponseError extends Error {
  status: number;
  body: any;
  headers: Headers;
}

// tslint:disable-next-line
export namespace HttpMockHelpers {
  'use strict';

  export function setup(): void {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          BaseRequestOptions,
          MockBackend,
          {
            provide: Http,
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions): Http => new Http(backend, defaultOptions),
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
      });
    });
  }

  export function emptyHeaders(): Headers {
    return new Headers({
      'content-Type': 'application/json'
    });
  }

  export function tokenHeaders(): Headers {
    return new Headers({
      'content-Type': 'application/json',
      'token-type': 'Bearer',
      uid: 'test@test.com',
      'access-token': 'fJypB1ugmWHJfW6CELNfug',
      client: '5dayGs4hWTi4eKwSifu_mg',
      expiry: '1472108318'
    });
  }

  export function mockResponseSuccess(mockBackend: MockBackend, data?: any, status?: number, headers?: Headers): void {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            status: status || 200,
            body: data,
            headers
          })));
      });
  }

  export function mockResponseError(mockBackend: MockBackend, data?: any, status?: number, headers?: Headers): void {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        const error = new ResponseError();
        error.body = data;
        error.status = status;
        error.headers = headers;
        connection.mockError(error);
      }
    );
  }
}
