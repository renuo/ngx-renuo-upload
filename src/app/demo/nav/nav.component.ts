import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'ru-nav',
  styleUrls: ['nav.component.scss'],
  templateUrl: 'nav.component.html'
})
export class NavComponent {
  i18n = I18n;
}
