import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from '../Redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <App />
      </React.Fragment>
    </Provider>
  </BrowserRouter> ,
  document.getElementById('root')
)
