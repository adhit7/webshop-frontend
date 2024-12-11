import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'https://webshop-2wqm.onrender.com';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
