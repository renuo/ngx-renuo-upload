import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../app.settings';
import { SigningResponse } from './signing-response.interface';

@Injectable()
export class SigningService {
  constructor(private http: Http) {}

  getUploadInfoAndSignature(): Observable<SigningResponse> {
    return this.http.post(AppSettings.RENUO_UPLOAD_SIGNING_URL + '?api_key=' + AppSettings.RENUO_UPLOAD_API_KEY, '')
      .map(response => response.json() || { });
  }
}
