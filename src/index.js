import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


// ReactDOM updates the root every time any element changes
// This is what makes all elements to show up (or render)
ReactDOM.render(
  // wrap App parent component with BrowserRouter
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
