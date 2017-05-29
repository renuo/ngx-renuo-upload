import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SigningService } from '../signing/signing.service';
import { UploadBuilderService } from './upload-builder.service';
import { UploadResult } from './upload-result.interface';
@Injectable()
export class UploadService {
  constructor(private uploadBuilderService: UploadBuilderService, private signingService: SigningService) {}

  public upload(uploadResult: UploadResult): Observable<UploadResult> {
    uploadResult.uploadStatusText = 'waiting for signing';
    return this.signingService.getUploadInfoAndSignature()
      .concatMap(signingResponse => this.uploadBuilderService.uploadToAmazon(signingResponse, uploadResult));
  }
}
