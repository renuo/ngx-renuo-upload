import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { SigningResponse } from './signing-response.interface';

@Injectable()
export class HttpMock {
  static getProviders() {
    return {provide: Http, useClass: this};
  }

  lastMethod: 'post';
  lastData: any;
  lastPath: string;

  private response: Response;

  constructor() {
    this.mockResponse({
      url: 'https://example.com/',
      data: {
        key: 'upload-demo',
        acl: 'public-read',
        policy: 'Fsh',
        x_amz_algorithm: 'dfe',
        x_amz_credential: 'saklde/eu-central-1/s3/aws4_request',
        x_amz_expires: 2000,
        x_amz_signature: 'qwerty',
        x_amz_date: '20171212T',
        utf8: '✓'
      },
      file_prefix: 'pre/fix',
      file_url_path: '//example.com/o/upload-demo-testing'
    });
  }

  post(path: string, data: any): Observable<Response> {
    this.lastMethod = 'post';
    this.lastPath = path;
    this.lastData = data;
    return Observable.of(this.response);
  }

  private mockResponse(body: SigningResponse, status: number = 200) {
    const headers: Headers = new Headers();
    this.response = new Response(new ResponseOptions({status, body, headers}));
  }
}
