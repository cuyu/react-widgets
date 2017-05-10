import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import './index.css';

ReactDOM.render(
  <App promise={axios.get('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>,
  document.getElementById('root')
);
