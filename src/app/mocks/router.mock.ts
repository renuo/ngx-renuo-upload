import { Event } from '@angular/router';
import { ReplaySubject } from 'rxjs';

export class MockRouter {
  queryParams: any;
  url: string = '';
  events: ReplaySubject<Event> = new ReplaySubject<Event>();

  constructor() {
    this.queryParams = null;
  }

  setQueryParams(params: any) {
    this.queryParams = params;
  }

  mockEvent(event: Event) {
    this.events.next(event);
  }

  navigate() {
    return '';
  }
}

// tslint:disable-next-line:max-classes-per-file
export class MockActivatedRoute {
  queryParams: any;
  params = {
    subscribe: (callback: any) => {
      callback(this.queryParams);
    }
  };

  constructor() {
    this.queryParams = null;
  }

  setQueryParams(params: any) {
    this.queryParams = params;
  }
}
