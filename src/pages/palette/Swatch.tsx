import React from "react";
import styled from "styled-components";

interface SwatchProps {
  color: string;
  name?: string;
}

const Swatch = styled("div")<SwatchProps>`
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  display: inline-block;
  margin-bottom: 0.5rem;
  /* margin: 1rem; */
`;

const SwatchContainer = styled.div`
  display: inline-block;
  width: 6rem;
  height: 9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 0 0 3rem 0;
  font-size: 0.875rem;
`;

const StyledSwatch = (props: SwatchProps) => {
  return (
    <SwatchContainer>
      <Swatch color={props.color} />
      <span>{props.name}</span>
    </SwatchContainer>
  );
};

export default StyledSwatch;
