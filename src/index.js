import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Validator from './validators/main-validator';
import handleSubmit from './handle-submit';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App validator={Validator} handleSubmit={handleSubmit}/>
  </React.StrictMode>
);

