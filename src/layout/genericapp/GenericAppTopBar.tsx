import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import typography from "constants/typography";
import { ArrowBackIos, KeyboardBackspace } from "@material-ui/icons";

const StyledTopBar = styled.div`
  padding: 0 1rem 0 0;
  height: 4rem;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #ccc; */
  /* margin-bottom: 1rem; */
`;

const TopBarMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const UserProfileName = styled(NavLink)`
  color: #2c3845;
  border-bottom: none;
`;
const LogoWrapper = styled(Link)`
  color: #2c3845;
  font-size: 1.5rem;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  border-bottom: none;
`;
const LinkBackWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: auto;
  height: 1rem;
  font-size: 10px;
  opacity: 0.5;
  > a {
    color: #333;
    border-bottom: none;
  }
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <LinkBackWrapper>
        <a href="/">
          <KeyboardBackspace fontSize="small" />
        </a>
      </LinkBackWrapper>
      <LogoWrapper to="/genericapp">HelseID TAKT</LogoWrapper>
      <TopBarMenu>
        <UserProfileName to="/profile">Finn Roen</UserProfileName>
      </TopBarMenu>
    </StyledTopBar>
  );
};

export default TopBar;
