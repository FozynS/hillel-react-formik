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

function App({validator, handleSubmit}) {

  return (
    <Wrapper className="wrapper">
      <H2>Form for add contact</H2>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        onSubmit={handleSubmit}
        validate={validator}
      >
        <Form />
      </Formik>
    </Wrapper>
  );
}

export default App;
