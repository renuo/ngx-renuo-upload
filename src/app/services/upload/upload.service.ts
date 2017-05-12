import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';

@Injectable()
export class UploadSerice {
  constructor(private requestService: RequestService) {}

  public uploadToAmazon(response: string, file: File) {
    const responseJSON: SigningResponse = JSON.parse(response);
    const formData = new FormData();

    this.buildForm(formData, responseJSON);
    formData.append('file', file);

    return this.requestService.makeRequest({
      method: 'POST',
      url: responseJSON.url,
      formData
    });
  }

  private buildForm(formData: FormData, responseJSON: SigningResponse) {
    formData.append('key', responseJSON.data.key);
    formData.append('acl', responseJSON.data.acl);
    formData.append('policy', responseJSON.data.policy);
    formData.append('x-amz-algorithm', responseJSON.data.x_amz_algorithm);
    formData.append('x-amz-credential', responseJSON.data.x_amz_credential);
    formData.append('x-amz-expires', responseJSON.data.x_amz_expires.toString());
    formData.append('x-amz-signature', responseJSON.data.x_amz_signature);
    formData.append('x-amz-date', responseJSON.data.x_amz_date);
    formData.append('utf8', responseJSON.data.utf8);
  }
}
