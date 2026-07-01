import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['line'], // Clean console output while running
    ['html'], // Playwright's built-in reporter
    ['allure-playwright', { resultsDir: 'allure-results' }] // Allure reporter
  ],
  use: {
    // Set your API host here
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      // You can set default headers like Auth tokens here
      'Accept': 'application/json',
    },
  },
});