import React from "react";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import { NavLink } from "react-router-dom";
import SideBarNavigation from "components/Navigation/SideBarNavigation/SideBarNavigation";
import { KeyboardArrowDown } from "@material-ui/icons";

const StyledSideBar = styled.div`
  /* padding-left: 1rem; */
  background: blue;
`;

const sidebarItems = [
  {
    name: "hjem",
    icon: null,
    linkTo: "/",
    inGroup: false,
    groupName: null,
  },
  {
    name: "farger",
    icon: null,
    linkTo: "/palette",
    inGroup: false,
    groupName: null,
  },
  {
    name: "tekststiler",
    icon: null,
    linkTo: "/typography",
    inGroup: false,
    groupName: null,
  },
  {
    name: "grid/spacing",
    icon: null,
    linkTo: "/gridspacing",
    inGroup: false,
    groupName: null,
  },
  {
    name: "ikoner",
    icon: null,
    linkTo: "/icons",
    inGroup: false,
    groupName: null,
  },

  {
    name: "knapp",
    icon: null,
    linkTo: "/button",
    inGroup: false,
    groupName: null,
  },
  {
    name: "tag",
    icon: null,
    linkTo: "/tag",
    inGroup: false,
    groupName: null,
  },
  {
    name: "kort",
    icon: null,
    linkTo: "/card",
    inGroup: false,
    groupName: null,
  },
  {
    name: "modal",
    icon: null,
    linkTo: "/modal",
    inGroup: false,
    groupName: null,
  },
  {
    name: "skjema",
    icon: null,
    linkTo: "/form",
    inGroup: false,
    groupName: null,
  },
  {
    name: "tabell",
    icon: null,
    linkTo: "/table",
    inGroup: false,
    groupName: null,
  },
  {
    name: "sidebar meny",
    icon: null,
    linkTo: "/sidebarnavigation",
    inGroup: false,
    groupName: null,
  },
  {
    name: "fanenavigering",
    icon: null,
    linkTo: "/tabnavigation",
    inGroup: false,
    groupName: null,
  },
  {
    name: "HelseID TAKT prototype",
    icon: null,
    linkTo: "/genericapp",
    inGroup: false,
    groupName: null,
  },
];

const SideBar = () => {
  return <SideBarNavigation items={sidebarItems} />;
};

export default SideBar;
