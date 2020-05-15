import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import palette from "../../constants/helseidColors";
import typography from "../../constants/typography";

interface Props {
  open?: boolean;
  label?: string;
}

const StyledTag = styled.div<Props>`
  display: inline-block;
  align-items: center;

  font-size: ${typography.body.small};
  background: ${(props) =>
    props.open ? `${palette.c530}` : `${palette.c310}`};
  color: ${(props) => (props.open ? `${palette.c100}` : `${palette.c000}`)};
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.15rem 0.5rem;
  margin: 0 0.5rem 0.25rem 0;
  font-weight: 600;
`;

const Tag = (props: Props) => {
  return <StyledTag open={props.open}>{props.label}</StyledTag>;
};

export default Tag;
