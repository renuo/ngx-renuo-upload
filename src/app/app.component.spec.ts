beforeEach(() => {
  jasmine.addMatchers({
    toEqualData: () => {
      return {
        compare: (actual: any, expected: any) => {
          // http://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects
          // tslint:disable-next-line:cyclomatic-complexity
          function objectEquals(x: any, y: any): any {
            if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
            if (x.constructor !== y.constructor) { return false; }
            if (x instanceof Function) { return x === y; }
            if (x instanceof RegExp) { return x === y; }
            if (x === y || x.valueOf() === y.valueOf()) { return true; }
            if (Array.isArray(x) && x.length !== y.length) { return false; }
            if (x instanceof Date) { return false; }
            if (!(x instanceof Object)) { return false; }
            if (!(y instanceof Object)) { return false; }

            const p = Object.keys(x);
            return Object.keys(y).every(i => { return p.indexOf(i) !== -1; }) &&
              p.every(i => { return objectEquals(x[i], y[i]); });
          }

          return {
            pass: objectEquals(actual, expected)
          };
        }
      };
    }
  });
});
