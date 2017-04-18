import { ChangeDetectorRef } from '@angular/core';

export class ChangeDetectorRefMock {
  static getProviders() {
    return [{provide: ChangeDetectorRef, useClass: this}];
  }

  public detectChanges() { return true; }
}
