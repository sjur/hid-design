import React, { ReactElement } from "react";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import { NavLink } from "react-router-dom";
import SideBarNavigation from "components/Navigation/SideBarNavigation/SideBarNavigation";
import { KeyboardArrowDown } from "@material-ui/icons";

//for genericapp

const sidebarItems = [
  {
    name: "name",
    icon: { KeyboardArrowDown },
    linkTo: "/",
    inGroup: false,
    groupName: null,
  },
];

const SideBar = () => {
  return <SideBarNavigation items={sidebarItems} />;
};

export default SideBar;
