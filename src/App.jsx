import styled from "styled-components";
import { Formik} from "formik";
import Form from "./components/form";

const Wrapper = styled.div`
  text-align: center;
  height: 600px;
  width: 500px;
  margin-top: 20px;
`;

const H2 = styled.h2`
  color: #8c525a;
`;

function App() {

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

  return (
    <Wrapper className="wrapper">
      <H2>Form for add contact</H2>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleSubmit}
        validate={(values) => validator(values)}
      >
        <Form />
      </Formik>
    </Wrapper>
  );
}

export default App;
