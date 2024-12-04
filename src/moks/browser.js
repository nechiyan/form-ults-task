// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Create and start the mock service worker
export const worker = setupWorker(...handlers);

// Start the worker only in development
if (process.env.NODE_ENV === 'development') {
  worker.start();
}
