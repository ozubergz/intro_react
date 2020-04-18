import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const element =  <h1>Hello World!</h1>

// ReactDOM updates the root every time an element changes
// This is what makes every element to show up (or render)
ReactDOM.render(
  <App />,
  // element, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
