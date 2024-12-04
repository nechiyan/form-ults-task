// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {store} from './store/store';
import App from './App';

// Import MSW only in development mode
if (import.meta.env.MODE === 'development') {
  import('./moks/browser').then(({ worker }) => {
    worker.start();
  });
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
