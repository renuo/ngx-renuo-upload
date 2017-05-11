import { Component } from '@angular/core';
import { I18n } from '../i18n/i18n';

@Component({
  selector: 'ru-demo',
  styleUrls: ['demo.component.scss'],
  templateUrl: 'demo.component.html'
})
export class DemoComponent {
  i18n = I18n;

}
