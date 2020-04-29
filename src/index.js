import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
  Importación de estilos de React Bootstrap
  Visitar: https://react-bootstrap.github.io/getting-started/introduction
  The following line can be included in your src/index.js or App.js file
*/
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
