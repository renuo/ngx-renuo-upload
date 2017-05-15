import { Component } from '@angular/core';
import { I18n } from '../i18n/i18n';

@Component({
  selector: 'ru-demo',
  styleUrls: ['demo.component.scss'],
  templateUrl: 'demo.component.html'
})
export class DemoComponent {
  i18n = I18n;
  picture: string = '//renuo-upload-cdn-master.renuoapp.ch/o/' +
    'renuo-upload-demo-master/u1yv/1d29/f2df/e863/6da6/d70e/788a/ea87/f7b8/o-renuo.png';
}
