import { Injectable } from '@angular/core';
import { SigningService } from '../signing/signing_service';

@Injectable()
export class UploadSerice {
  private signingService: SigningService = new SigningService();

  // uploadFile(file: File): UploadResult{
  //   this.getSigning();
  //
  //   return null
  // }

  private getSigning() {
    this.signingService.getUploadInfoAndSignature(() => {
      this.uploadToAmazon(this.signingService.getResponse());
    });
  }

  private uploadToAmazon(response: SigningResponse) {
    const file = document.getElementById('test-input').files[0];

    const formData = new FormData();

    Object.keys(response.data).forEach(key => {
      formData.append(key.replace(/_/g, '-'), response.data[key]);
    });

    formData.append('file', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', response.url, true);
    xhr.send(formData);
  }
}
