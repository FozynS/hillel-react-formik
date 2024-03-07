import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const handleSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validateEmail = (values) => {
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
}

const validatePhone = (values) => {
  return !/^\d{12}$/.test(values.phone)
}

const validator = (values) => {
  const errors = {};

  if(!values.name) {
    errors.name = 'The "Name" field is required';
  }

  if (!values.email) {
    errors.email = 'The "Email" field is required';
  } else if (validateEmail(values)) {
    errors.email = "Enter the correct email";
  }

  if (!values.phone) {
    errors.phone = 'The "Phone" field is required';
  } else if (validatePhone(values)) {
    errors.phone = "Phone number must consist of 12 digits";
  }
  
  return errors;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App validator={validator} handleSubmit={handleSubmit}/>
  </React.StrictMode>
);

