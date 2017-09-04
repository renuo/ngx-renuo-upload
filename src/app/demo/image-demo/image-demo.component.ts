import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { ErrorMessage } from '../../services/error-message.interface';
import { UploadResult } from '../../services/upload/upload-result.interface';

@Component({
  styleUrls: ['image-demo.component.scss'],
  templateUrl: 'image-demo.component.html'
})
export class ImageDemoComponent {
  alertList: ErrorMessage[] = [];
  i18n = I18n;

  picture: string = '//renuo-upload-cdn-master.renuoapp.ch/o/' +
    'renuo-upload-demo-master/u1yv/1d29/f2df/e863/6da6/d70e/788a/ea87/f7b8/o-renuo.png';

  updatePicture(file: UploadResult) {
    if (!file.publicUrl) {return; }
    if (file.file.type === 'image/jpeg' || file.file.type === 'image/png') {
      this.picture = file.publicUrl;
    }
  }

  deletePicture() {
    this.setDefaultPicture();
  }

  setDefaultPicture() {
    this.picture = '//renuo-upload-cdn-master.renuoapp.ch/o/' +
      'renuo-upload-demo-master/u1yv/1d29/f2df/e863/6da6/d70e/788a/ea87/f7b8/o-renuo.png';
  }

  addAlert(errorMessage: ErrorMessage) {
    this.alertList.push(errorMessage);
  }

  removeAlert(errorMessage: ErrorMessage) {
    this.alertList = this.alertList.filter(alert => alert !== errorMessage);
  }
}
