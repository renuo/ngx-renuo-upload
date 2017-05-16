import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FileBuilderService } from '../file-builder/file-builder.servise';
import { RequestService } from '../request/request.service';
import { SigningResponse } from '../signing/signing-response.interface';
import { UploadResult } from './upload-result.interface';

@Injectable()
export class UploadSericeBuilder {
  constructor(private requestService: RequestService, private fileBuilderService: FileBuilderService) {}

  uploadToAmazon(responseJSON: SigningResponse, uploadResult: UploadResult): Observable<UploadResult> {
    const formData = new FormData();

    this.buildForm(formData, responseJSON);
    formData.append('file', uploadResult.file);

    uploadResult.filePath = this.fileBuilderService.getFilePath(uploadResult, responseJSON.file_url_path);
    uploadResult.publicUrl = this.fileBuilderService.getPublicUrl(uploadResult, responseJSON.file_prefix);

    return this.requestService.makeRequest({
      method: 'POST',
      url: responseJSON.url,
      formData
    }, uploadResult);
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
