import React from "react";
import styled from "styled-components";
import palette from "constants/helseidColors";

interface LinkProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const StyledLink = styled("a")`
  color: ${palette.c210};
`;

const Link = (props: LinkProps) => {
  return (
    <StyledLink
      onClick={props.onClick}
      className={props.className}
      href={props.href}
    >
      {props.children}
    </StyledLink>
  );
};

export default Link;
