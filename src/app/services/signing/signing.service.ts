import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../app.settings';
import { RequestService } from '../request/request.service';

@Injectable()
export class SigningService {
  private requestService: RequestService = new RequestService();

  public getUploadInfoAndSignature(): Observable<RequestReponse> {
    return this.requestService.makeRequest({
      method: 'POST',
      url: AppSettings.RENUO_UPLOAD_SIGNING_URL + '?api_key=' + AppSettings.RENUO_UPLOAD_API_KEY
    });
  }
}
