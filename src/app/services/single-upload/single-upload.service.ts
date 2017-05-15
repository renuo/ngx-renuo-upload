import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { SigningService } from '../signing/signing.service';
import { UploadSerice } from '../upload/upload.service';
@Injectable()
export class SingleUploadService {
  constructor(private uploadService: UploadSerice, private signingService: SigningService) {}

  public upload(file: File): Observable<number> {
    return Observable.create((observer: Observer<number>) => {
      this.signingService.getUploadInfoAndSignature()
        .subscribe(status => this.uploadService.uploadToAmazon(status, file)
          .subscribe(success => observer.next(success.progressInPercent))
        );
    });
  }
}
