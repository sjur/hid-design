import React, { ChangeEvent, useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import palette from "constants/helseidColors";
import typography from "constants/typography";
import InputLabel from "components/Form/Input/InputLabel/InputLabel";
import DropDownMenu from "components/DropDown/DropDownMenu/DropDownMenu";
import { Edit } from "@material-ui/icons";

interface InputProps {
  type?: string;
  value?: string;
  readOnly?: boolean;
  label?: string;
  validationError?: boolean;
  required?: boolean;
  subtitle?: string;
  mandatory?: boolean;
  placeholder?: string;
  hasDropDown?: boolean;
  showDropDown?: boolean;
  className?: string;
  hasEditOption?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div<InputProps>`
  position: relative;
`;

const StyledFormInput = styled.input`
  width: 100%;
  height: 2.4rem;
  color: ${(props) => (props.readOnly ? `${palette.c105}` : `${palette.c100}`)};
  border: 1px solid
    ${(props) => (props.required ? `${palette.c310}` : `${palette.c120}`)};
  font-size: 1rem;
  padding: 0 0.5rem;
  background-color: ${(props) =>
    props.readOnly ? `${palette.c199}` : "white"};
`;

const EditOption = styled.div`
  display: flex;
  align-items: center;
  font-size: ${typography.body.small};
`;

const Input = (props: InputProps) => {
  let mandatoryIndicator = props.mandatory ? " (mandatory)" : "";

  const [showDropDown, useShowDropDown] = useState(false);
  const HandleClick = (e: ChangeEvent<HTMLInputElement>) => {
    useShowDropDown(e.target.value.length > 4);
  };

  return (
    <Container
      showDropDown={props.showDropDown}
      hasEditOption={props.hasEditOption}
    >
      {props.label && <InputLabel text={props.label + mandatoryIndicator} />}

      <StyledFormInput
        type={props.type}
        value={props.value}
        readOnly={props.readOnly}
        required={props.required}
        placeholder={props.placeholder}
        onChange={props.onChange || HandleClick}
        className={props.className}
      />
      {props.hasDropDown && showDropDown && <DropDownMenu />}

      {props.subtitle && (
        <InputLabel
          subtitle
          text={props.subtitle}
          validationError={props.validationError}
        />
      )}
    </Container>
  );
};

export default Input;
