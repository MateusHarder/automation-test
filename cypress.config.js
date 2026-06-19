const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { default: createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: 'https://www.automationexercise.com/',
    specPattern: 'cypress/e2e/**/*.feature',
    stepDefinitions: 'cypress/support/steps/**/*.js',
    experimentalModifyObstructiveThirdPartyCode: true,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }))
      return config
    }
  }
})
