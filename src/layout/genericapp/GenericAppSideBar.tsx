import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SideBarNavigation from "components/Navigation/SideBarNavigation/SideBarNavigation";

const StyledSideBar = styled.div`
  /* padding-left: 1rem; */
  /* background: lavenderblush; */
`;

const sidebarItems = [
  {
    name: "hjem",
    icon: null,
    linkTo: "/genericapp",
    inGroup: false,
    groupName: null,
  },
  {
    name: "Nasjonale e-helse tjenester",
    icon: null,
    linkTo: "/tilgangnasjonale",
    inGroup: false,
    groupName: null,
  },
  {
    name: "APIer og tilgang",
    icon: null,
    linkTo: "/apiadmin",
    inGroup: false,
    groupName: null,
  },
  {
    name: "lorem",
    icon: null,
    linkTo: "/lorem",
    inGroup: false,
    groupName: null,
  },
];

const SideBar = () => {
  return <SideBarNavigation items={sidebarItems} />;
};

export default SideBar;
