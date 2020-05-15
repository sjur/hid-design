import React from "react";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
interface Props {
  children?: any;
}

const StyledTypeSwatch = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: white;
  margin-bottom: 1rem;
`;

const TypeSwatch = (props: Props) => {
  return <StyledTypeSwatch>{props.children}</StyledTypeSwatch>;
};

export default TypeSwatch;
