var path = require('path');

var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  var _config = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: './karma-shim.js', watched: false }
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './karma-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },

    coverageReporter: {
      dir: 'coverage/',
      check: {
        global: {
          // TODO: change as soon as possible
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0,
          excludes: [
            '**/index.ts'
          ]
        }
      },
      reporters: [{
        type: 'html',
        dir: 'coverage',
        subdir: 'html',
        file: 'coverage-final.json'
      }]
    },

    remapIstanbulReporter: {
      src: 'coverage/json/coverage-final.json',
      reports: {
        lcovonly: 'coverage/json/lcov.info',
        html: 'coverage/html',
        'text-summary': null
      },
      timeoutNotCreated: 1000, // default value
      timeoutNoMoreFiles: 1000 // default value
    },

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'mocha'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

    // TODO: Readd karma-remap-instanbul (throws Error: ENOENT: no such file or directory 'src/src/app/app.settings.ts')
    // reporters: ["mocha", "coverage", "karma-remap-istanbul"],
    reporters: ["mocha", "coverage"],
    mochaReporter: {
      output: 'minimal',
      ignoreSkipped: true
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'], // you can also use Chrome

    customLaunchers: {
      ChromeTravisCi: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };
  if (process.env.TRAVIS) {
    _config.reporters[0] = 'dots';
    _config.browsers = [
      'ChromeTravisCi'
    ];
  }

  config.set(_config);

};
