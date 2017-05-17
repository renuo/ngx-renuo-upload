import { Component } from '@angular/core';
import { I18n } from '../i18n/i18n';
import { UploadResult } from '../services/upload/upload-result.interface';

@Component({
  selector: 'ru-demo',
  styleUrls: ['demo.component.scss'],
  templateUrl: 'demo.component.html'
})
export class DemoComponent {
  i18n = I18n;

  pictures: string[] = [];

  picture: string = '//renuo-upload-cdn-master.renuoapp.ch/o/' +
    'renuo-upload-demo-master/u1yv/1d29/f2df/e863/6da6/d70e/788a/ea87/f7b8/o-renuo.png';

  updateImg(file: UploadResult) {
    if (!file.filePath) {return; }
    this.picture = file.filePath;
  }

  updateImgs(file: UploadResult) {
    if (!file.filePath) {return; }
    this.pictures.push(file.filePath);
  }

  deleteImg() {
    this.setDefaultPicture();
  }

  setDefaultPicture() {
    this.picture = '//renuo-upload-cdn-master.renuoapp.ch/o/' +
      'renuo-upload-demo-master/u1yv/1d29/f2df/e863/6da6/d70e/788a/ea87/f7b8/o-renuo.png';
  }
}
