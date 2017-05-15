import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SigningService } from '../signing/signing.service';
import { UploadSerice } from '../upload/upload.service';
@Injectable()
export class SingleUploadService {
  constructor(private uploadService: UploadSerice, private signingService: SigningService) {}

  public upload(file: File): Observable<number> {
    return this.signingService.getUploadInfoAndSignature()
      .concatMap(status => this.uploadService.uploadToAmazon(status, file))
      .map(success => success.progressInPercent);
  }
}
