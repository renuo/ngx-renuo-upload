import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { ErrorMessage } from '../../services/error-message.interface';
import { UploadResult } from '../../services/upload/upload-result.interface';

@Component({
  styleUrls: ['sudemo.component.scss'],
  templateUrl: 'sudemo.component.html'
})
export class SingleUploadDemoComponent {
  alertList: ErrorMessage[] = [];
  i18n = I18n;

  file?: UploadResult;

  updateFile(file: UploadResult) {
    this.file = file;
  }

  removeFile() {
    this.file = undefined;
  }

  addAlert(errorMessage: ErrorMessage) {
    this.alertList.push(errorMessage);
  }

  removeAlert(errorMessage: ErrorMessage) {
    this.alertList = this.alertList.filter(alert => alert !== errorMessage);
  }
}
