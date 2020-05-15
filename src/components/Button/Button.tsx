import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import palette from "../../constants/helseidColors";
import typography from "../../constants/typography";

interface ButtonProps {
  label?: string;
  icon?: ReactElement;
  rightIcon?: ReactElement;
  buttonType?: ButtonTypes; //primary, secondary, tertiary
  small?: boolean;
  className?: string;
  onClick?: () => void;
}
type ButtonTypes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "warning"
  | "disabled";

const styles = (buttonType: any) => {
  let bgcolor;
  let bgcolorHover;
  let color;
  let colorHover;
  let fill;
  let fillHover;
  switch (buttonType) {
    case "secondary": {
      bgcolor = palette.c120;
      bgcolorHover = palette.c110;
      color = palette.c100;
      colorHover = color;
      fill = color;
      fillHover = color;
      break;
    }
    case "tertiary": {
      bgcolor = "none";
      bgcolorHover = "none";
      color = palette.c210;
      colorHover = palette.c200;
      fill = color;
      fillHover = colorHover;
      break;
    }
    case "warning": {
      bgcolor = palette.c310;
      bgcolorHover = palette.c300;
      color = palette.c000;
      colorHover = color;
      fill = color;
      fillHover = color;
      break;
    }
    case "disabled": {
      bgcolor = palette.c120;
      bgcolorHover = bgcolor;
      color = palette.c000;
      colorHover = color;
      fill = color;
      fillHover = color;
      break;
    }
    default: {
      //primary button
      bgcolor = palette.c210;
      bgcolorHover = palette.c200;
      color = palette.c000;
      colorHover = color;
      fill = color;
      fillHover = color;
      break;
    }
  }
  return {
    bgcolor: bgcolor,
    bgcolorHover: bgcolorHover,
    color: color,
    colorHover: colorHover,
    fill: fill,
    fillHover: fillHover,
  };
};
const Label = styled("div")<ButtonProps>`
  color: ${(props) => styles(props.buttonType).color};
  ${(props) =>
    props.icon &&
    css`
      margin-left: 0.5rem;
    `}
  ${(props) =>
    props.rightIcon &&
    css`
      margin-right: 0.5rem;
    `}
    :first-letter {
    text-transform: uppercase;
  }
`;
const Icon = styled.div<ButtonProps>`
  display: flex;
  align-items: center;

  > svg {
    background: none;
    fill: ${(props) => styles(props.buttonType).fill};
  }
`;

const Elements = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
`;
const Button = styled("button")<ButtonProps>`
  font-family: inherit;
  background: ${(props) => styles(props.buttonType).bgcolor};

  font-size: ${(props) =>
    props.small ? `${typography.body.small}` : `${typography.body.fontsize}`};
  font-weight: ${(props) => (props.small ? "400" : "600")};
  padding: 0 1rem;
  height: ${(props) => (props.small ? "1.75rem" : "2.4rem")};
  border: none;
  border-radius: 4px;
  opacity: ${(props) => (props.buttonType === "disabled" ? 0.5 : 1)};
  :hover {
    background: ${(props) => styles(props.buttonType).bgcolorHover};

    ${Label} {
      color: ${(props) => styles(props.buttonType).colorHover};
    }
    ${Elements} > svg {
      fill: ${(props) => styles(props.buttonType).fillHover};
    }
  }
  :active {
    background: ${(props) => styles(props.buttonType).bgcolor};
    ${Label} {
      color: ${(props) => styles(props.buttonType).color};
    }
    ${Elements} > svg {
      fill: ${(props) => styles(props.buttonType).fill};
    }
  }
`;

const StyledButton = (props: ButtonProps) => {
  return (
    <Button
      small={props.small}
      buttonType={props.buttonType}
      className={props.className}
      onClick={props.onClick}
    >
      <Elements buttonType={props.buttonType}>
        {props.icon && <Icon buttonType={props.buttonType}>{props.icon}</Icon>}
        <Label
          icon={props.icon}
          rightIcon={props.rightIcon}
          buttonType={props.buttonType}
        >
          {props.label}
        </Label>
        {props.rightIcon && (
          <Icon buttonType={props.buttonType}>{props.rightIcon}</Icon>
        )}
      </Elements>
    </Button>
  );
};

export const ButtonGroup = styled.div`
  ${Button} + ${Button} {
    margin-left: 2rem;
  }
`;

export default StyledButton;
