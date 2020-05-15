import React from "react";
import styled from "styled-components";

interface SwatchProps {
  color: string;
  name?: string;
}

const Swatch = styled("div")<SwatchProps>`
  width: 100px;
  height: 100px;
  background: ${(props) => props.color};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  display: inline-block;
  margin: 1rem;
`;

const StyledSwatch = (props: SwatchProps) => {
  return <Swatch color={props.color}>{props.name}</Swatch>;
};

export default StyledSwatch;
