import React from 'react';
// import ReactDOM  from 'react-dom';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
// import App from './App';
// import App from './practice/App'
// import App from './MySite/App'
// import App from './Router/App'
import App from './Localstorage/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

