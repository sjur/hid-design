import React from "react";
import styled from "styled-components";

interface FormProps {
  children?: React.ReactNode;
}

const StyledForm = styled.form`
  > * {
    margin-bottom: 1rem;
  }
`;

const Form = (props: FormProps) => {
  return <StyledForm>{props.children}</StyledForm>;
};

export default Form;
