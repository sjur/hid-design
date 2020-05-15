import React from "react";
import styled from "styled-components";

const Logo = styled("div")`
  background-color: hotpink;
  color: yellow;
  width: 200px;
  height: 40px;
`;

const StyledLogo = () => {
  return <Logo>KJ-logo</Logo>;
};

export default StyledLogo;
