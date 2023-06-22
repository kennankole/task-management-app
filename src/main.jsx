import React from 'react'
import ReactDOM from 'react-dom/client'
import configureAppStore from './store.js'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import './index.css'

const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
