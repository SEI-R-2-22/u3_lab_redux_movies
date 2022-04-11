import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-browser-dom'
import store from './store'
import './styles/index.css'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>
)