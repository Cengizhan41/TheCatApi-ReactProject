import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/src/collapse.js";
import "bootstrap/js/src/carousel.js";
import { BrowserRouter } from 'react-router-dom'
import { CatApiContextProvider } from './context/CatApiContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatApiContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CatApiContextProvider>
  </React.StrictMode>,
)
