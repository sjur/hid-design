import React from "react";
import styled from "styled-components";
import palette from "constants/helseidColors";
import typography from "constants/typography";
import { NavLink } from "react-router-dom";

interface Props {
  items?: Array<string>;
}

export const StyledTabNavigation = styled("div")`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${palette.c110};
  align-items: center;
`;

export const TabButton = styled(NavLink)`
  font-size: ${typography.body.small};
  font-weight: 600;
  text-transform: uppercase;
  border-bottom: 1px solid ${palette.c110};
  padding: 0.35rem 1rem;
  cursor: pointer;
  height: 2rem;
  border-top: 2px solid ${palette.c199};
  margin-bottom: -1px;
  color: ${palette.c210};
  &.activeTab {
    background-color: ${palette.c199};
    border: 1px solid ${palette.c110};
    border-top: 2px solid ${palette.c100};
    border-bottom: none;
    color: ${palette.c100};
  }
  &:hover:not(.activeTab) {
    background-color: ${palette.c199};
    color: ${palette.c100};
  }
`;

const TabNavigation = (props: Props) => {
  return (
    <StyledTabNavigation>
      <TabButton to="/apidetails-2" activeClassName="activeTab">
        {props.items ? props.items[0] : "lorem"}
      </TabButton>

      <TabButton to="/apidetails" activeClassName="activeTab">
        {props.items ? props.items[1] : "ipsum"}
      </TabButton>
      <TabButton to="/apidetails-3" activeClassName="activeTab">
        {props.items ? props.items[2] : "alpha"}
      </TabButton>
      <TabButton to="/apidetails-4" activeClassName="activeTab">
        {props.items ? props.items[3] : "beta"}
      </TabButton>
    </StyledTabNavigation>
  );
};

export default TabNavigation;
