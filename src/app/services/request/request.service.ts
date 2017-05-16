import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { RequestOption } from './request-options.interface';
import { RequestReponse } from './request-reponse.interface';

@Injectable()
export class RequestService {
  makeRequest(options: RequestOption): Observable<RequestReponse> {
    let lastUpdate = Date.now();

    return Observable.create((observer: Observer<RequestReponse>) => {
      const xhr = this.createXhr();

      xhr.open(options.method, options.url);

      xhr.onload = () => {
        if (xhr.status <= 200 || xhr.status >= 300) {
          observer.error(xhr.status);
        }
      };

      xhr.upload.onprogress = evt => {
        if (Date.now() - lastUpdate > 100) {
          lastUpdate = Date.now();
          observer.next({
            status: xhr.status,
            progressInPercent: (evt.loaded / evt.total) * 100
          });
        }
      };

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 204) {
          observer.next({
            response: xhr.response,
            status: xhr.status,
            progressInPercent: 100
          });
          observer.complete();
        }
      };

      xhr.onerror = () => {
        observer.error(xhr.status);
        observer.complete();
      };

      xhr.send(options.formData);
    });
  }

  private createXhr() {
    return new XMLHttpRequest();
  }
}
