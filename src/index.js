import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeFireBase } from './components/apis/FireBase'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
initializeFireBase()
root.render(
    <App />
)

reportWebVitals();
