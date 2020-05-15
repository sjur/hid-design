import React from "react";
import styled, { css } from "styled-components";

import palette from "constants/helseidColors";

interface Props {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
}

interface GroupProps {
  aglignment: alignmentTypes;
}

type alignmentTypes = "vertical" | "horizontal";

const Container = styled.div<Props>`
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
`;
const Label = styled.span<Props>`
  color: ${(props) => (props.disabled ? palette.c110 : palette.c100)};
`;

const StyledCheckbox = styled.input`
  border: 1px solid red;
  margin-right: 0.5rem;
`;

export const CheckBoxGroup = styled.div<GroupProps>`
  ${(props) =>
    props.aglignment === "vertical"
      ? css`
          background-color: red;
        `
      : css`
          background-color: blue;
        `};
`;

const CheckBox = (props: Props) => {
  return (
    <Container>
      <StyledCheckbox
        type="checkbox"
        name={props.name}
        checked={props.checked}
        disabled={props.disabled}
      />
      <Label disabled={props.disabled}> {props.label && props.label} </Label>
    </Container>
  );
};

export default CheckBox;
