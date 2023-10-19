import React from 'react'
import 'flowbite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { ErrorHandlerProvider } from './hooks/useErrorHandler';
import NotFound from './Components/browser/dom-states/404';
import App from './Components/App'
import './assets/Styles/global.css'
import './assets/Styles/index.css'
import './assets/Fonts/fonts.css'
import Testing from './Components/testing';
import { ThemeProvider } from 'react-bootstrap';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider
      defaultTheme='system'
      storageKey='vite-ui-theme'
    >
      <ErrorHandlerProvider>
        <Router>
          <div>
            <div className='pb-[32px] pl-[32px] pr-[32px] pt-[30px] flex min-h-[100vh] mx-auto md:w-[530px] lg:w-[786px] xl:w-[1042px] flex-grow'>
              <main className='mx-auto md:w-[530px] lg:w-[786px] xl:w-[1042px]'>
                <Routes>
                  <Route path='/' element={<App />}/>
                  {/* Research "errorElement" */}
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </ErrorHandlerProvider>
    </ThemeProvider>
  </React.StrictMode>
)