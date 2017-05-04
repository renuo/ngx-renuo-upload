import 'core-js/client/shim';
import 'reflect-metadata';
import 'ts-helpers';

// tslint:disable-next-line
require('zone.js/dist/zone');

// TODO: check what ENV does, and where it comes from
if (process.env.ENV !== 'build') {
  // Development
  Error['stackTraceLimit'] = Infinity;
  // tslint:disable-next-line
  require('zone.js/dist/long-stack-trace-zone');
}
