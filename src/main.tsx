import React from 'react'
import 'flowbite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { ErrorHandlerProvider } from './hooks/useErrorHandler';
import NotFound from './Components/404';
import App from './Components/App'
import './assets/Styles/global.css'
import './assets/Styles/index.css'
import './assets/Fonts/fonts.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorHandlerProvider>
      <Router>
        {/* Navbar */}
        <Routes>
          <Route path='/' element={<App />}/>
          {/* Research "errorElement" */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        {/* Footer */}
      </Router>
    </ErrorHandlerProvider>
  </React.StrictMode>
)