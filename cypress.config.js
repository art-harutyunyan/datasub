const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    $schema: "https://on.cypress.io/cypress.schema.json",
    baseUrl: "https://qatest.datasub.com/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalRunAllSpecs: true,
  },
});
