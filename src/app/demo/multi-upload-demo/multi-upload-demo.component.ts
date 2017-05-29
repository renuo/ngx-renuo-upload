import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { ErrorMessage } from '../../services/error-message.interface';
import { UploadResult } from '../../services/upload/upload-result.interface';

@Component({
  styleUrls: ['multi-upload-demo.component.scss'],
  templateUrl: 'multi-upload-demo.component.html'
})
export class MultiUploadDemoComponent {
  alertList: ErrorMessage[] = [];
  i18n = I18n;

  files?: UploadResult[];

  updateFiles(files: UploadResult[]) {
    this.files = files;
  }

  addAlert(errorMessage: ErrorMessage) {
    this.alertList.push(errorMessage);
  }

  removeAlert(errorMessage: ErrorMessage) {
    this.alertList = this.alertList.filter(alert => alert !== errorMessage);
  }
}
