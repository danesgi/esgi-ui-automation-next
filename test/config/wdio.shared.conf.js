const path = require('path')
const { join } = require('path')
require('dotenv').config()
exports.config = {
    credentials: {
        username: 'sbuckhoff',
        password: 'automation01!'
    },
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
      `./test/specs/**/!(*Report*).spec.js`
    ],
     // define specific suites
    suites: {
      elastic: [
          `./test/ELK/verifyelasticsearchdata.spec.js`
      ],
      login: [
          `./test/specs/Login.spec.js`
      ],
      bingo: [
          `./test/specs/reportsspecs/Bingo*.spec.js`
      ],
      classtotals: [
          `./test/specs/reportsspecs/ClassTotals*.spec.js`
      ],
      studentdetail: [
          `./test/specs/reportsspecs/StudentDetail*.spec.js`
      ],
      gradescale: [
          `./test/specs/reportsspecs/GradeScaleReports/GradeScale*.spec.js`
      ],
      studentprogress: [
          `./test/specs/reportsspecs/StudentProgress*.spec.js`
      ],
      flashcards: [
          `./test/specs/reportsspecs/Flashcards*.spec.js`
      ],
      parentletter: [
          `./test/specs/reportsspecs/ParentLetter*.spec.js`
      ],
      itemanalysis: [
          `./test/specs/reportsspecs/ItemAnalysis*.spec.js`
      ],
      piecharts: [
          `./test/specs/reportsspecs/PieCharts*.spec.js`
      ],
      loginload: [
          `./test/loginload/*.spec.js`
      ],
      districtadminacct: [
          `./test/specs/districtadminaccount/*.spec.js`
      ],
      schooladminacct: [
          `./test/specs/schooladminaccount/*.spec.js`
      ],
      teacheracct: [
          `./test/specs/teacheraccount/*.spec.js`
      ],
      reports: [
          `./test/specs/**/*Report*.spec.js`
      ],
      reports1: [
          `./test/specs/reportsspecs/Bingo*.spec.js`,
          `./test/specs/reportsspecs/StudentDetail*.spec.js`,
          `./test/specs/reportsspecs/StudentProgress*.spec.js`,
          `./test/specs/reportsspecs/Flashcards*.spec.js`,
          `./test/specs/schooladminaccount/Reports*.spec.js`
      ],
      reports2: [
          `./test/specs/reportsspecs/GradeScaleReports/GradeScaleReportNoGradeScales.spec.js`
      ],
      reports3: [
          `./test/specs/reportsspecs/ParentLetter*.spec.js`,
          `./test/specs/reportsspecs/ItemAnalysis*.spec.js`,
          `./test/specs/reportsspecs/ClassTotals*.spec.js`,
          `./test/specs/reportsspecs/PieCharts*.spec.js`,
          `./test/specs/teacheraccount/Reports*.spec.js`,
          `./test/specs/districtadminaccount/Reports*.spec.js`
      ],
      prodsmoke: [
          `./test/specs/Login.spec.js`,
          `./test/specs/WebFront.spec.js`,
          `./test/specs/Navigations.spec.js`,
          `./test/prod/*.spec.js`
      ],
      signup: [
          `./test/specs/Signup_Rules.spec.js`,
          `./test/specs/WebFront.spec.js`
      ],
      criticalpath: [
          `./test/specs/LoadPieCharts.spec.js`,
          `./test/specs/teacheraccount/RunTest.spec.js`,
          `./test/specs/teacheraccount/Report*.spec.js`,
          `./test/specs/AddTest.spec.js`,
          `./test/specs/Navigations.spec.js`,
          `./test/specs/TestExplorer.spec.js`,
          `./test/specs/StudentManager.spec.js`
      ],
      warmup: [
          `./test/warmup/*.spec.js`
      ],
      pdf: [
          `./test/pdfs/RunPDFReports.spec.js`
      ]
  },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    /**
     * The number of times to retry the entire specfile when it fails as a whole
     */
    specFileRetries: 1,
    /**
     * Delay in seconds between the spec file retry attempts
     */
    specFileRetriesDelay: 0,
    /**
     * Retried specfiles are inserted at the beginning of the queue and retried immediately
     */
    specFileRetriesDeferred: false,
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: parseInt(process.env.MAXINSTANCES),
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'trace',
    outputDir: path.resolve(__dirname, '../../logs'),
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: process.env.BASEURL || 'https://beta.esgisoftware.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //

    services: [
      [
          'image-comparison',
          {
              baselineFolder: join(process.cwd(), './screenshots/reference/'),
              formatImageName: '{tag}-{logName}-{width}x{height}',
              screenshotPath: join(process.cwd(), './screenshots/'),
              savePerInstance: true,
              autoSaveBaseline: true,
              blockOutStatusBar: true,
              blockOutToolBar: true,
              ignoreTransparentPixel: true,
              scaleImagesToSameSize: true,
              ignoreAlpha: true,
              ignoreAntialiasing: true

          }
      ]
  ],


    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 90000,
      compilers: ['js:@babel/register'],
    },
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: [
      'spec',
      ['allure', {
          outputDir: './test/reports/allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
          useCucumberStepReporter: false
      }],
      ['junit', {
        outputDir: './test/reports/junit-results',
        outputFileFormat: function(options) {
              return `results-${options.cid}.${options.capabilities}.xml`
          }
      }],

    ],
    //
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
      /**
       * Setup the Chai assertion framework
       */
      // const chai    = require('chai');
      // global.expect = chai.expect;
      // global.assert = chai.assert;
      // global.should = chai.should();
      browser.addCommand('click', function (css) {
        $(css).click()
      })
      browser.addCommand('getText', function (css) {
          const eles = $$(css)
          let arr = []
          eles.forEach(function (ele) {
              arr.push(ele.getText())
          })
          return (arr.length === 1) ? arr[0] : arr
      })
      browser.addCommand('getValue', function (css) {
          const eles = $$(css)
          let arr = []
          eles.forEach(function (ele) {
              arr.push(ele.getValue())
          })
          return (arr.length === 1) ? arr[0] : arr
      })
      browser.addCommand('setValue', function (css, value) {
          return $(css).setValue(value)
      })
      browser.addCommand('isVisible', function (css) {
          return $(css).isDisplayed()
      })
      browser.addCommand('isEnabled', function (css) {
          return $(css).isEnabled()
      })
      browser.addCommand('isExisting', function (css) {
          return $(css).isExisting()
      })
      browser.addCommand('selectByVisibleText', function (css, value) {
          return $(css).selectByVisibleText(value)
      })
      console.log(`Test run baseUrl is: ${browser.options.baseUrl} \n`)
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
