const validatePhone = (values) => {
  return !/^\d{12}$/.test(values);
}

export default  validatePhone;