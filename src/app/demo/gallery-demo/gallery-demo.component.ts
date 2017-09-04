import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { ErrorMessage } from '../../services/error-message.interface';
import { UploadResult } from '../../services/upload/upload-result.interface';

@Component({
  styleUrls: ['gallery-demo.component.scss'],
  templateUrl: 'gallery-demo.component.html'
})
export class GalleryDemoComponent {
  alertList: ErrorMessage[] = [];
  i18n = I18n;
  pictures: string[] = [];

  updatePictures(file: UploadResult) {
    if (!file.publicUrl) {return; }
    if (file.file.type === 'image/jpeg' || file.file.type === 'image/png') {
      this.pictures.push(file.publicUrl);
    }
  }

  addAlert(errorMessage: ErrorMessage) {
    this.alertList.push(errorMessage);
  }

  removeAlert(errorMessage: ErrorMessage) {
    this.alertList = this.alertList.filter(alert => alert !== errorMessage);
  }
}
