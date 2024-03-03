import {  Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components";

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

function FormMyOwn() {
  return (
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
  )
}

export default FormMyOwn;