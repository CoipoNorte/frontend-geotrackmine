import './assets/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AlarmaLista } from './components/AlarmaLista'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/alarma-lista" element={<AlarmaLista />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
