import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SigningService } from '../signing/signing.service';
import { UploadSericeBuilder } from './upload-builder.service';
import { UploadResult } from './upload-result.interface';
@Injectable()
export class UploadService {
  constructor(private uploadSericeBuilder: UploadSericeBuilder, private signingService: SigningService) {}

  public upload(uploadResult: UploadResult): Observable<UploadResult> {
    return this.signingService.getUploadInfoAndSignature()
      .concatMap(status => this.uploadSericeBuilder.uploadToAmazon(status, uploadResult))
      .map(result => result);
  }
}
