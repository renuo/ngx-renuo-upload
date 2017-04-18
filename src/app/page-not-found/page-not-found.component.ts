import { Component } from '@angular/core';
import { I18n } from '../i18n/i18n';

@Component({
  template: `
    <div>
      <h1>{{i18n.t.pageNotFound.title}}</h1>
      <p>{{i18n.t.pageNotFound.description}}</p>
    </div>
  `
})
export class PageNotFoundComponent {
  i18n = I18n;
}
