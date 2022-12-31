import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestoreApp } from './firestore/config'


initFirestoreApp()

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
