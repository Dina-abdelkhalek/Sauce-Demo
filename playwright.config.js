// @ts-nocheck
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 50 * 1000,
    expeect: {

        timeout: 5000

    },

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {

      trace: 'on-first-retry',
      headless: false,

      
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
          

    },

 
  ],

});

