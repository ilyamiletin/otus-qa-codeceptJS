exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://itusluga.ru',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: "./steps_file.js",
    loginPage: "./framework/pages/LoginPage.js",
    homePage: "./framework/pages/HomePage.js",
    noutbukiPage: "./framework/pages/NoutbukiPage.js",
    basketPage: "./framework/pages/BasketPage.js",
    addNewTaskFormElement: "./framework/elements/AddNewTaskFormElement.js",
    taskListElement: "./framework/elements/TaskListElement.js",
    searchElement: "./framework/elements/SearchElement.js",
    taskPage: "./framework/pages/TaskPage.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js', './step_definitions/auth_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  name: 'cypress-to-codeceptjs'
}