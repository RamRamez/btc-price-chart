import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './index.css'

import App from './App'
import { store } from './app/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
