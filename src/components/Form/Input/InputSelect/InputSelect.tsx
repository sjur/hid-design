import React from "react";
import styled from "styled-components";
import palette from "constants/helseidColors";
import InputLabel from "components/Form/Input/InputLabel/InputLabel";
import { KeyboardArrowDown } from "@material-ui/icons";

interface SelectProps {
  label?: string;
  options?: string[];
  defaultValue?: string;
  subtitle?: string;
}

const StyledInputDropDownContainer = styled.div`
  position: relative;
  padding: 0 0 0 0.5rem;
  width: 100%;
  /* border: 1px solid ${palette.c120}; */
  border-radius: 0;
  height: 2.4rem;
  font-size: 1rem;
  background-color: ${palette.c000};
`;
const StyledSelectContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
`;
const StyledSelect = styled.select`
  appearance: none;
  padding: 0 0 0 0.5rem;
  width: 100%;
  border: 1px solid ${palette.c120};
  border-radius: 0;
  height: 100%;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
`;

const DropDownArrowIcon = styled(KeyboardArrowDown)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
`;

const InputSelect = (props: SelectProps) => {
  return (
    <>
      {props.label && <InputLabel text={props.label} />}
      <StyledInputDropDownContainer>
        <StyledSelectContainer>
          <StyledSelect>
            <option value="default" selected>
              {props.defaultValue || "Make a selection"}
            </option>
            <hr />
            <option value="alpha">Alpha</option>
            <option value="beta">Beta</option>
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="omega">Omega</option>
          </StyledSelect>
        </StyledSelectContainer>
        <DropDownArrowIcon />
      </StyledInputDropDownContainer>
      {props.subtitle && <InputLabel subtitle text={props.subtitle} />}
    </>
  );
};

export default InputSelect;
