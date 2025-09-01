const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: [
      "cypress/e2e/loginTest.cy.js",
      "cypress/e2e/itemTest.cy.js",
      "cypress/e2e/checkOutTest.cy.js"

    ],
    supportFile: "cypress/support/e2e.js",
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress-reports',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  },
});
