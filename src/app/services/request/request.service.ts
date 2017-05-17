import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { UploadResult } from '../upload/upload-result.interface';
import { RequestOption } from './request-options.interface';

@Injectable()
export class RequestService {
  makeRequest(options: RequestOption, result: UploadResult): Observable<UploadResult> {
    let lastUpdate = Date.now();

    return Observable.create((observer: Observer<UploadResult>) => {
      const xhr = this.createXhr();

      xhr.open(options.method, options.url);

      xhr.onload = () => {
        if (xhr.status <= 200 || xhr.status >= 300) {
          result.uploadStatus = xhr.status;
          observer.error(result);
        }
      };

      xhr.upload.onprogress = evt => {
        if (this.shouldUpdate(lastUpdate)) {
          lastUpdate = Date.now();

          if (result.uploadStatus === 'canceled') {
            xhr.abort();
          } else {
            result.uploadStatus = xhr.status;
          }
          result.uploadProgressInPercent = (evt.loaded / evt.total) * 100;
          observer.next(result);
        }
      };

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 204) {
          result.uploadStatus = xhr.status;
          result.uploadProgressInPercent = 100;
          observer.next(result);
          observer.complete();
        }
      };

      xhr.onerror = () => {
        result.uploadStatus = xhr.status;
        observer.error(result);
        observer.complete();
      };

      xhr.send(options.formData);
    });
  }

  private createXhr() {
    return new XMLHttpRequest();
  }

  private shouldUpdate(lastUpdate: number) {
    return Date.now() - lastUpdate > 200;
  }
}
