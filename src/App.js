import styled from "styled-components";
import { Formik, Field, ErrorMessage, Form } from "formik";

const Wrapper = styled.div`
  text-align: center;
  height: 600px;
  width: 500px;
  margin-top: 20px;
`;

const H2 = styled.h2`
  color: #8c525a;
`;

const Label = styled.label`
  font-weight: 600;
  color: #8c525a;
`;

const AddBtn = styled.button`
  cursor: pointer;
  margin-top: 50px;
  width: 40%;
  height: 25px;
  border: 1px solid #c7939c;
  border-radius: 10px;
  background-color: #feebd0;
  transition: all 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }
`;

function App() {

  const handleSubmit = (values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  };

  return (
    <Wrapper className="wrapper">
      <H2>Form for add contact</H2>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if(!values.name) {
            errors.name = 'The "Name" field is required';
          }
          if (!values.email) {
            errors.email =
              'The "Email" field is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Enter the correct email";
          }
          if (!values.phone) {
            errors.phone = 'The "Phone" field is required';
          } else if (!/^\d{12}$/.test(values.phone)) {
            errors.phone = "Phone number must consist of 12 digits";
          }
          return errors;
        }}
      >
        <Form>
          <div>
            <Label>
              Name:
              <br />
              <Field
                type="text"
                name="name"
                placeholder="Name"
                style={{
                  marginTop: "10px",
                  height: "20px",
                  width: "60%",
                  backgroundColor: "#fde6cd",
                  borderRadius: "10px",
                  border: "1px solid #c7939c",
                }}
              />
              <ErrorMessage 
                name="name"
                component='div'
                style={{color: '#a11a46'}}
              />
            </Label>
          </div>
          <br />
          <div>
            <Label>
              Email:
              <br />
              <Field
                type="text"
                name="email"
                placeholder="Email"
                style={{
                  marginTop: "10px",
                  height: "20px",
                  width: "60%",
                  backgroundColor: "#fde6cd",
                  borderRadius: "10px",
                  border: "1px solid #c7939c",
                }}
              />
              <ErrorMessage 
                name="email" 
                component='div'
                style={{color: '#a11a46'}}
              />
            </Label>
          </div>
          <br />
          <div>
            <Label>
              Phone:
              <br />
              <Field
                type="text"
                name="phone"
                placeholder="Phone Number"
                style={{
                  marginTop: "10px",
                  height: "20px",
                  width: "60%",
                  backgroundColor: "#fde6cd",
                  borderRadius: "10px",
                  border: "1px solid #c7939c",
                }}
              />
              <ErrorMessage 
                name="phone" 
                component='div'
                style={{color: '#a11a46'}}
              />
            </Label>
          </div>
          <AddBtn>Add</AddBtn>
        </Form>
      </Formik>
    </Wrapper>
  );
}

export default App;
