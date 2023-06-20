import React from 'react'
import ReactDOM from 'react-dom/client'
import tasks from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={tasks}>
      <App />
    </Provider>
  </React.StrictMode>,
)
