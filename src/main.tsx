import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ErrorHandlerProvider } from './hooks/useErrorHandler';
import NotFound from './Components/browser/dom-states/404';
import App from './Components/App';
import { ThemeProvider } from './Components/providers/index';
import './assets/Styles/scss/global.scss';
import './assets/Styles/css/global.css';
import './assets/Styles/css/index.css';
import './assets/Fonts/fonts.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorHandlerProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'/*'} element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ErrorHandlerProvider>
  </React.StrictMode>,
);
