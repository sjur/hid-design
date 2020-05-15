import React from "react";
import styled, { css } from "styled-components";

interface Props {
  children?: React.ReactNode;
  bgColor?: string;
  hSpace?: string;
  vSpace?: string;
}
const StyledSegment = styled.div<Props>`
  ${props =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `};
  ${props =>
    props.hSpace &&
    css`
      padding-left: ${props.hSpace};
      padding-right: ${props.hSpace};
    `};
  ${props =>
    props.vSpace &&
    css`
      padding-top: ${props.vSpace};
      padding-bottom: ${props.vSpace};
    `};
`;

const Segment = (props: Props) => {
  return (
    <StyledSegment
      hSpace={props.hSpace}
      vSpace={props.vSpace}
      bgColor={props.bgColor}
    >
      {props.children}
    </StyledSegment>
  );
};

export default Segment;
