import validateEmail from "./validate-email";
import validatePhone from "./validate-phone";

const validator = (values) => {
  const errors = {};

  if(!values.name) {
    errors.name = 'The "Name" field is required';
  }

  if (!values.email) {
    errors.email = 'The "Email" field is required';
  } else if (validateEmail(values.email)) {
    errors.email = "Enter the correct email";
  }

  if (!values.phone) {
    errors.phone = 'The "Phone" field is required';
  } else if (validatePhone(values.phone)) {
    errors.phone = "Phone number must consist of 12 digits";
  }
  
  return errors;
}

export default validator;