import { Component, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import { Ng2Datetime } from 'ng2-datetime-picker';

@Component({
  selector: 'my-app',
  styleUrls: [
    './scss/app.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor() {
    Ng2Datetime.formatDate = (date: Date) => moment(date).format('DD.MM.YYYY / HH:mm');
    Ng2Datetime.parseDate = (str: string) => moment(str, 'DD.MM.YYYY / HH:mm').toDate();
  }
}
