import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SigningService } from '../signing/signing.service';
import { UploadResult } from '../upload/upload-result.interface';
import { UploadSerice } from '../upload/upload.service';
@Injectable()
export class SingleUploadService {
  constructor(private uploadService: UploadSerice, private signingService: SigningService) {}

  public upload(uploadResult: UploadResult): Observable<UploadResult> {
    return this.signingService.getUploadInfoAndSignature()
      .concatMap(status => this.uploadService.uploadToAmazon(status, uploadResult))
      .map(result => result);
  }
}
