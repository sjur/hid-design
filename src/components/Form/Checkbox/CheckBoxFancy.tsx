import React, { useState } from "react";
import styled, { css } from "styled-components";
import palette from "constants/helseidColors";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";

interface Props {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
}

interface GroupProps {
  alignment: alignmentTypes;
  groupLabel?: string;
}
type alignmentTypes = "vertical" | "horizontal";

const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
const Label = styled.span`
  margin-left: 0.5rem;
`;

const StyledCheckBoxChecked = styled(CheckBox)`
  > * {
    fill: ${palette.c400};
  }
`;

export const CheckBoxGroup = styled.div<GroupProps>`
  padding: 0.5rem 0;
  ${(props) =>
    props.alignment === "horizontal"
      ? css`
          display: flex;
          >*: not(: last-child) {
            margin-right: 1rem;
          }
        `
      : css`
          //vertical alignment
          display: flex;
          flex-direction: column;
          >*: not(: last-child) {
            margin-bottom: 0.5rem;
          }
        `};
`;

const CheckBoxFancy = (props: Props) => {
  const [checkBoxChecked, useCheckBoxChecked] = useState(props.checked);
  const HandleCheckBoxClick = (x: boolean) => {
    {
      props.disabled ?? useCheckBoxChecked(x);
    }
  };
  return (
    <Container
      onClick={() => {
        HandleCheckBoxClick(!checkBoxChecked);
      }}
      disabled={props.disabled}
    >
      {checkBoxChecked ? <StyledCheckBoxChecked /> : <CheckBoxOutlineBlank />}
      <Label> {props.label && props.label} </Label>
    </Container>
  );
};

export default CheckBoxFancy;
