// Extra variables that live on Global that will be replaced by webpack DefinePlugin
// tslint:disable:no-any

// TODO: check what ENV does, and where it comes from
declare var ENV: string;

interface GlobalEnvironment {
  // TODO: check what ENV does, and where it comes from
  ENV: any;
  HMR: any;
}

interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
    decline(dependencies?: string | string[]): void;
    dispose(callback?: (data?: any) => void): void;
    addDisposeHandler(callback?: (data?: any) => void): void;
    removeDisposeHandler(callback?: (data?: any) => void): void;
    check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
    status(callback?: (status?: string) => void): void | string;
    removeStatusHandler(callback?: (status?: string) => void): void;
  };
}

interface WebpackRequire {
  context(file: string, flag?: boolean, exp?: RegExp): any;
}

interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}

// Extend typings
// tslint:disable:no-empty-interface
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface NodeModule extends WebpackModule {}
interface Global extends GlobalEnvironment {}
// tslint:enable:no-empty-interface

// tslint:disable
declare namespace jasmine {
  interface Matchers {
    toEqualData(expected: any): boolean;
  }
}
