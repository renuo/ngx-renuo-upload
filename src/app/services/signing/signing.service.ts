import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../app.settings';

@Injectable()
export class SigningService {
  constructor(private http: Http) {}

  public getUploadInfoAndSignature(): Observable<SigningResponse> {
    return this.http.post(AppSettings.RENUO_UPLOAD_SIGNING_URL + '?api_key=' + AppSettings.RENUO_UPLOAD_API_KEY, '')
      .map(response => response.json() || { });
  }
}
