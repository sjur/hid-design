import React, { ReactElement } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import palette from "constants/helseidColors";
import typography from "constants/typography";
import {
  Add,
  Policy,
  HowToVote,
  Remove,
  AirplanemodeActive,
  AccessTime,
} from "@material-ui/icons";

interface Props {
  expands?: boolean;
  expanded?: boolean;
  items: Array<object>;
}
const IconContainer = styled.div`
  margin-right: 0.75rem;
`;

export const SideBarNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${palette.c105};
  border-bottom: 1px solid ${palette.c120};
  border-bottom: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  text-transform: uppercase;
  font-size: ${typography.body.small};
  font-weight: 400;
  transition: border-width 300ms;
  > svg {
    fill: ${palette.c105};
  }
  ${IconContainer} > svg {
    fill: ${palette.c105};
  }

  &.activeNav {
    border-left: 4px solid ${palette.c210};
    font-weight: 600;

    /* background-color: ${palette.c130}; */
    color: ${palette.c210};
    > svg {
      fill: ${palette.c100};
    }
    ${IconContainer} > svg {
      fill: ${palette.c100};
    }
  }
  &:hover {
    /* border-top: 1px solid #333; */
    border-left: 4px solid ${palette.c210};
    /* background-color: ${palette.c130}; */
    color: ${palette.c210};
    > svg {
      fill: ${palette.c100};
    }
    ${IconContainer} > svg {
      fill: ${palette.c100};
    }
  }
`;
const NavGroup = styled.div`
  /* border-bottom: 1px solid ${palette.c120}; */
  ${SideBarNavLink} {
    border-bottom: none;
  }
  ${SideBarNavLink}:not(:first-child) {
    padding-left: 2.5rem;
    border-top: none;
    /* display: none; */
  }
`;
const Elements = styled.div``;

const Label = styled.span``;

const StyledAdd = styled(Add)`
  margin-left: auto;
`;
const StyledRemove = styled(Remove)`
  margin-left: auto;
`;
const StyledSideBarNavigation = styled.div<Props>`
  /* border-bottom: 1px solid ${palette.c120}; */
`;

const MenuLabel = styled.span``;

const SideBarNavigation = (props: Props) => {
  console.log(props.items);
  const buildItems = (items: Array<object>) => {
    const menuItems: Array<ReactElement> = [];
    items.forEach((item) => {
      var entries = Object.values(item);
      menuItems.push(
        <SideBarNavLink to={entries[2]} activeClassName="activeNav" exact>
          {entries[1] !== null && <IconContainer>{entries[1]}</IconContainer>}
          <MenuLabel>{entries[0]}</MenuLabel>
        </SideBarNavLink>
      );
    });

    return menuItems;
  };
  return (
    <StyledSideBarNavigation items={props.items}>
      {buildItems(props.items)}
    </StyledSideBarNavigation>
  );
};

export default SideBarNavigation;
