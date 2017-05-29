import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'ru-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  i18n = I18n;
}
