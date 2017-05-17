/* tslint:disable:no-access-missing-member */
import { Component } from '@angular/core';
import { ImageComponent } from '../../image/image.component';

@Component({
  selector: 'ru-custom-image',
  styleUrls: ['custom-image.component.scss'],
  templateUrl: 'custom-image.component.html'
})
export class CustomImageComponent extends ImageComponent {
}
