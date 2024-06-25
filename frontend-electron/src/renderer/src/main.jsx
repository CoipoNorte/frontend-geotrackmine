import './assets/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App></App>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
