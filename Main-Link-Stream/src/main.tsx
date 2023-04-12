import React from 'react'
import 'flowbite';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './Components/App'
import './assets/Styles/*.css'
import './assets/Fonts/*.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)