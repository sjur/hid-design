import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

interface FormElementProps {
  title?: string;
  children?: React.ReactNode;
}

const StyledFormElement = styled.div`
  padding: 0.5rem 0 0.5rem;
`;

const FormElement = (props: FormElementProps) => {
  return (
    <>
      {props.title && props.title}
      <StyledFormElement>{props.children} </StyledFormElement>
    </>
  );
};

export default FormElement;
