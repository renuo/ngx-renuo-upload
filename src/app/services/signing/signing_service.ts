import { Injectable } from '@angular/core';
import { AppSettings } from '../../app.settings';

@Injectable()
export class SigningService {
  private response: SigningResponse = null;

  constructor() {}

  public getResponse(): SigningResponse {
    return this.response;
  }

  public getUploadInfoAndSignature(callback: () => void) {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', AppSettings.RENUO_UPLOAD_SIGNING_URL + '?api_key=' + AppSettings.RENUO_UPLOAD_API_KEY);
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.response = JSON.parse(xhr.responseText);
        callback();
      } else {
        console.error('Verbindung konnte nicht aufgebaut werden. POST request endete mit Status: ' + xhr.status);
      }
    };
    xhr.send();
  }
}
