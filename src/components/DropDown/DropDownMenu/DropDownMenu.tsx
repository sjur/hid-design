import React, { ChangeEvent } from "react";
import styled from "styled-components";
import palette from "constants/colors";
import DropDownMenuItem from "components/DropDown/DropDownMenuItem/DropDownMenuItem";

const StyledDropDownMenu = styled.div`
  position: absolute;
  /* top: calc(2rem - 1px); */
  top: 100%;
  /* bottom: -2rem; */
  left: 0;
  width: 100%;
  height: auto;
  border: 1px solid ${palette.c120};
  border-top: none;
  background: ${palette.c000};
  z-index: 100;
`;

interface Props {
  showSearchResults?: (x: boolean) => void;
}

const DropDownMenu = (props: Props) => {
  const HandleClick = () => {
    console.log("click");
  };
  return (
    <StyledDropDownMenu>
      <DropDownMenuItem showSearchResults={props.showSearchResults}>
        999 888 777 – Bergen kommune
      </DropDownMenuItem>
      {/* <DropDownMenuItem>977 877 544 – Bodø kommune</DropDownMenuItem> */}
    </StyledDropDownMenu>
  );
};

export default DropDownMenu;
