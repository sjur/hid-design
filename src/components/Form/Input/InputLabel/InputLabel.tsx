import React from "react";
import styled from "styled-components";
import fonts from "constants/typography";
import palette from "constants/helseidColors";

interface InputLabelProps {
  text?: string;
  subtitle?: boolean;
  validationError?: boolean;
}

const StyledInputLabel = styled.div<InputLabelProps>`
  margin: 0.35rem 0.15rem;
  font-size: ${(props) =>
    props.subtitle ? fonts.body.small : fonts.body.fontsize};
  color: ${(props) =>
    props.validationError ? `${palette.c310}` : `${palette.c100}`};
`;

const InputLabel = (props: InputLabelProps) => {
  console.log(props.validationError);
  return (
    <StyledInputLabel
      subtitle={props.subtitle}
      validationError={props.validationError}
    >
      {props.text}{" "}
    </StyledInputLabel>
  );
};

export default InputLabel;
