import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Object.prototype.hasProperty = function(signature) {
  var finalProperty = this;
  var property;
  var child;

  if (signature === undefined) {
    return true;
  }

  if (signature instanceof String) {
    signature = signature.split('.');
  }

  if (signature.constructor !== Array) {
    signature = [signature];
  }

  if (signature.length === 0) {
    return true;
  }

  property = signature.shift();
  child = this[property]; 

  if (child === undefined) {
    return false;
  } else {
    return child.hasProperty(signature);
  }
}

var a = {b: {c: {}}};

if (a.hasProperty(['b', 'c'])) {
  console.log("definido!");
} else {
  console.log("indefinido!");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
