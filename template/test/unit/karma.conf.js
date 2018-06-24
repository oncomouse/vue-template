const webpackConfig = require('../../webpack.config.js');
{{#chrome}}
{{else}}
process.env.CHROME_BIN = require('puppeteer').executablePath();
{{/chrome}}

delete webpackConfig.entry;

module.exports = (config) => {
  config.set({
    browsers: ['ChromeHeadless'], // run in Chrome
    singleRun: true, // just run once by default
    frameworks: ['mocha'], // use the mocha test framework
    files: [
      'setup.js', // just load this file
    ],
    preprocessors: {
      'setup.js': ['webpack', 'sourcemap'], // preprocess with webpack and our sourcemap loader
    },
    reporters: ['mocha', 'coverage'], // report results in this format; change mocha to dots for shorter output
    webpack: webpackConfig, // attach our webpack configuration
    webpackServer: {
      noInfo: true, // please don't spam the console when running in karma!
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'lcov', subdir: '.' }, // Lcov gives good HTML results; Saved in ./coverage
        { type: 'text' }, // Print a report to the console; can be text-summary
      ],
    },
  });
};
