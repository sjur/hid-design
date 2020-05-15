import React, { ReactElement } from "react";
import styled, { css } from "styled-components";

interface Props {
  text?: string;
  size?: string;
  icon?: ReactElement;
  color?: string;
  compact?: boolean;
}

const StyledHeading = styled.div<Props>`
  color: ${(props) => (props.color ? props.color : "inherit")};
  > h1,
  h2,
  h3,
  h4 {
    margin: ${(props) => props.compact && "0rem"};
  }
`;
const HeaderContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  > * {
    font-size: inherit;
    margin-right: 0.5rem;
  }
  background: none;
`;
const StyledH2 = styled.h2`
  /* padding-top: 1.5rem; */
`;

const IconAndTitle = (props: Props) => {
  return (
    <HeaderContainer>
      {props.icon} {props.text}
    </HeaderContainer>
  );
};

const HeaderSize = (props: Props) => {
  switch (props.size) {
    case "h1":
      return <h1>{IconAndTitle(props)} </h1>;
    case "h2":
      return <StyledH2>{IconAndTitle(props)} </StyledH2>;
    case "h3":
      return <h3>{IconAndTitle(props)} </h3>;
    case "h4":
      return <h4>{IconAndTitle(props)} </h4>;
    default:
      return <h1>{IconAndTitle(props)} </h1>;
  }
};

const Heading = (props: Props) => {
  return (
    <StyledHeading color={props.color} compact={props.compact}>
      {HeaderSize(props)}
    </StyledHeading>
  );
};

export default Heading;
