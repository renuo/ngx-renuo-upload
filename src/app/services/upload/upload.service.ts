import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';

@Injectable()
export class UploadSerice {
  private requestService: RequestService = new RequestService();

  public uploadToAmazon(response: string, file: File) {
    const responseJSON: SigningResponse = JSON.parse(response);
    const formData = new FormData();

    Object.keys(responseJSON.data).forEach(key => {
      formData.append(key.replace(/_/g, '-'), responseJSON.data[key]);
    });

    formData.append('file', file);

    return this.requestService.makeRequest({
      method: 'POST',
      url: responseJSON.url,
      formData
    });
  }
}
