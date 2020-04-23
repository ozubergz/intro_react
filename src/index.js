import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


// ReactDOM updates the root every time any element changes
// This is what makes all elements to show up (or render)
ReactDOM.render(
  // wrap App component in BrowserRouter
  
  // StrictMode is a tool for highlighting potential problems in an application.
  // StrictMode does not render any visible UI
  // StrictMode activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
