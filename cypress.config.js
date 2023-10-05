const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  screenshotsFolder: "output/screenshots",
  videosFolder: "output/videos",
  video: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 12000,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    chromeWebSecurity: true,
    video: false,
  },
});
