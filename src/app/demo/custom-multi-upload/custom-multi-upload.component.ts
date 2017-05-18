/* tslint:disable:no-access-missing-member */
import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { MultiUploadComponent } from '../../multi-upload/multi-upload.component';
@Component({
  selector: 'ru-custom-multi-upload',
  styleUrls: ['custom-multi-upload.component.scss'],
  templateUrl: 'custom-multi-upload.component.html'
})
export class CustomMultiUploadComponent extends MultiUploadComponent {
  i18n = I18n;
}
