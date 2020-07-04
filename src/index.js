import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import  'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-design-icons/iconfont/material-icons.css';

ReactDOM.render(
  <React.StrictMode>
    <style>{'body { background-color: #263238; }'}</style>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
