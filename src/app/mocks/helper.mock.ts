import { Subject } from 'rxjs/Rx';

export interface GuinessCompatibleSpy extends jasmine.Spy {
  andReturn(val: any): void;
  andCallFake(fn: Function): GuinessCompatibleSpy;
  reset(): any;
}

export class SpyObject {
  [key: string]: any;

  constructor(private type: any = null) {
    if (type) {
      for (let elementIndex = 0; elementIndex < type.prototype.length; elementIndex++) {
        try {
          this.spyOn(type, elementIndex);
        } catch (e) {
          // As we are creating spys for abstract classes,
          // these classes might have getters that throw when they are accessed.
          // As we are only auto creating spys for methods, this
          // should not matter.
        }
      }
    }
  }

  private spyOn(type: any, elementIndex: number) {
    const element = type.prototype[elementIndex];
    if (typeof element === 'function') {
      this.spy('' + elementIndex);
    }
    return element;
  }

  spy(name: string): any {
    if (!this[name]) {
      this[name] = this._createGuinnessCompatibleSpy(name);
    }
    return this[name];
  }

  prop(name: any, value: any) { this[name] = value; }

  useOriginal(methodName: string) {
    this[methodName] = this.type.prototype[methodName];
  }

  subjectObservable(name: string) {
    const sourceName = `${name}Source`;
    this[sourceName] = new Subject<any>();
    this[`${name}$`] = this[sourceName].asObservable();
  }

  triggerSource(sourceName: string, data: any) {
    this[`${sourceName}Source`].next(data);
  }

  /** @internal */
  _createGuinnessCompatibleSpy(name: any): GuinessCompatibleSpy {
    const newSpy: GuinessCompatibleSpy = <any> jasmine.createSpy(name);
    newSpy.andCallFake = <any> newSpy.and.callFake;
    newSpy.andReturn = <any> newSpy.and.returnValue;
    newSpy.reset = <any> newSpy.calls.reset;
    // revisit return null here (previously needed for rtts_assert).
    newSpy.and.returnValue(null);
    return newSpy;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class HttpSpyObject extends SpyObject {
  fakeSuccessResponse: any;
  fakeErrorResponse: any;

  constructor(type: any) {
    super(type);

    this.fakeSuccessResponse = null;
    this.fakeErrorResponse = null;
  }

  subscribe(callbackSuccess: any, callbackError: any) {
    if (this.fakeSuccessResponse) {
      this.handleFakeResponse(callbackSuccess, callbackError);
    } else if (callbackSuccess) {
      callbackSuccess();
    }
    return {unsubscribe: () => ''};
  }

  private handleFakeResponse(callbackSuccess: any, callbackError: any) {
    if (callbackSuccess) {
      callbackSuccess(this.fakeSuccessResponse);
    } else if (callbackError) {
      callbackError(this.fakeErrorResponse);
    }
    this.fakeSuccessResponse = null;
  }

  setResponseSuccess(json: any): void {
    this.fakeSuccessResponse = json;
  }

  setResponseError(json: any): void {
    this.fakeErrorResponse = json;
  }
}
