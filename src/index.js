import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'https://web-production-0d9f9.up.railway.app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
