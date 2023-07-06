import React from 'react'
import 'flowbite';
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './assets/Styles/global.css'
import './assets/Styles/index.css'
import './assets/Fonts/fonts.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)