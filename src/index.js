import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeFireBase } from './components/Apis/FireBase'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
initializeFireBase()
root.render(
    <App />
)

reportWebVitals();
