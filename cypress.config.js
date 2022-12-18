const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})