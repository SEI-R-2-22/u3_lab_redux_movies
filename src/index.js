import React from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>
)
