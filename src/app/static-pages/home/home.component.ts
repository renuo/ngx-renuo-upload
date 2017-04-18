import { Component } from '@angular/core';
import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'my-home',
  styleUrls: ['home.component.scss'],
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  i18n = I18n;
}
