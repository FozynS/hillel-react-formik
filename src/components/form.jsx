import { Form, Field, ErrorMessage } from "formik";
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

const StyledInput = styled.input`
  margin-top: 10px;
  height: 20px;
  width: 60%;
  background-color: #fde6cd;
  border-radius: 10px;
  border: 1px solid #c7939c;
`;

const StyledError = styled.div`
  color: #a11a46;
`;

function FormMyOwn() {
  return (
    <Form>
      <div>
        <Label>
          Name:
          <br />
          <Field as={StyledInput} type="text" name="name" placeholder="Name" />
          <StyledError>
            <ErrorMessage name="name" component="span" />
          </StyledError>
        </Label>
      </div>
      <br />
      <div>
        <Label>
          Email:
          <br />
          <Field
            as={StyledInput}
            type="text"
            name="email"
            placeholder="Email"
          />
          <StyledError>
            <ErrorMessage name="email" component="span" />
          </StyledError>
        </Label>
      </div>
      <br />
      <div>
        <Label>
          Phone:
          <br />
          <Field
            as={StyledInput}
            type="text"
            name="phone"
            placeholder="Phone Number"
          />
          <StyledError>
            <ErrorMessage name="phone" component="span" />
          </StyledError>
        </Label>
      </div>
      <AddBtn>Add</AddBtn>
    </Form>
  );
}

export default FormMyOwn;
