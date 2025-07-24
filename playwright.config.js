// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  reporter: 'html',
  
  expect:{
    timeout:4000,
  },
  use: {
    browserName:'chromium',
    headless: false,
  },
});

