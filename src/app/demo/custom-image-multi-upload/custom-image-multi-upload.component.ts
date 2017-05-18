/* tslint:disable:no-access-missing-member */
import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { MultiUploadComponent } from '../../multi-upload/multi-upload.component';
@Component({
  selector: 'ru-custom-image-multi-upload',
  styleUrls: ['custom-image-multi-upload.component.scss'],
  templateUrl: 'custom-image-multi-upload.component.html'
})
export class CustomImageMultiUploadComponent extends MultiUploadComponent {
  i18n = I18n;
}
