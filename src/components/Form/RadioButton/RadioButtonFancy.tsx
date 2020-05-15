import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  RadioButtonChecked,
  RadioButtonUncheckedOutlined,
} from "@material-ui/icons";
import palette from "constants/helseidColors";

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

const StyledRadioButtonChecked = styled(RadioButtonChecked)`
  > * {
    fill: ${palette.c400};
  }
`;

export const RadioButtonGroup = styled.div<GroupProps>`
  padding: 0.75rem 0;
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

const RadioButtonFancy = (props: Props) => {
  const [radioButtonChecked, useRadioButtonChecked] = useState(props.checked);
  const HandleRadioButtonClck = (x: boolean) => {
    {
      props.disabled ?? useRadioButtonChecked(x);
    }
  };
  return (
    <Container
      onClick={() => {
        HandleRadioButtonClck(!radioButtonChecked);
      }}
      disabled={props.disabled}
    >
      {radioButtonChecked ? (
        <StyledRadioButtonChecked />
      ) : (
        <RadioButtonUncheckedOutlined />
      )}
      <Label> {props.label && props.label} </Label>
    </Container>
  );
};

export default RadioButtonFancy;
