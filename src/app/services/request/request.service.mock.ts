import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable()
export class RequestServiceMock {
  static getProviders() {
    return {provide: RequestService, useClass: this};
  }

  lastMethod: string;
  lastData: any;
  lastPath: string;

  private response: RequestReponse;

  constructor() {
    this.mockResponse();
  }

  public makeRequest(options: RequestOption): Observable<RequestReponse> {
    this.lastMethod = options.method;
    this.lastData = options.formData;
    this.lastPath = options.url;
    return Observable.of(this.response);
  }

  private mockResponse() {
    this.response = {
      status: 200,
      response: 'mock'
    };
  }
}
