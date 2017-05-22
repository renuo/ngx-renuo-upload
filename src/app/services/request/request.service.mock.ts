import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadResult } from '../upload/upload-result.interface';
import { RequestOption } from './request-options.interface';
import { RequestService } from './request.service';

@Injectable()
export class RequestServiceMock {
  static getProviders() {
    return {provide: RequestService, useClass: this};
  }

  lastMethod: string;
  lastData: any;
  lastPath: string;

  makeRequest(options: RequestOption, file: UploadResult): Observable<UploadResult> {
    this.lastMethod = options.method;
    this.lastData = options.formData;
    this.lastPath = options.url;
    file.uploadProgressInPercent = 100;
    file.uploadStatus = 204;
    return Observable.of(file);
  }
}
