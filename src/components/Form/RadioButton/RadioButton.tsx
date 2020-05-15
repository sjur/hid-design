import React from "react";
import styled from "styled-components";

import palette from "constants/helseidColors";

interface Props {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
}

const Container = styled.div<Props>`
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
`;
const Label = styled.span<Props>`
  color: ${(props) => (props.disabled ? palette.c110 : palette.c100)};
`;
const StyledRadioButton = styled.input`
  margin-right: 0.5rem;
`;

const RadioButton = (props: Props) => {
  return (
    <Container>
      <StyledRadioButton
        type="radio"
        name={props.name}
        checked={props.checked}
        disabled={props.disabled}
      />
      <Label disabled={props.disabled}> {props.label && props.label} </Label>
    </Container>
  );
};

export default RadioButton;
