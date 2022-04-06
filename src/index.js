import React from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.css'
import App from './App'

const root = createRoot(document.getElementById('root'))
console.log(process.env)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
