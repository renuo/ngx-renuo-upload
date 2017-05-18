/* tslint:disable:no-access-missing-member */
import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';
import { SingleUploadComponent } from '../../single-upload/single-upload.component';
@Component({
  selector: 'ru-custom-single-upload',
  styleUrls: ['custom-single-upload.component.scss'],
  templateUrl: 'custom-single-upload.component.html'
})
export class CustomSingleUploadComponent extends SingleUploadComponent {
  buttonText: string = I18n.t.upload.buttonText;
}
