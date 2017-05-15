import { Component } from '@angular/core';
import { I18n } from '../i18n/i18n';

@Component({
  selector: 'ru-demo',
  styleUrls: ['demo.component.scss'],
  templateUrl: 'demo.component.html'
})
export class DemoComponent {
  i18n = I18n;
  picture: string = '//renuo-upload-cdn-master.renuoapp.ch/o/lawoon-develop/ch6d/060f/21fd/a6d7/9318/441c/8483/e11e/5acf/' +
    'randomuser-woman-1.jpg';
}
