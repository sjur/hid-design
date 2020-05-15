import React from "react";
import styled from "styled-components";
import palette from "constants/colors";
interface Props {
  children?: string;
  onClick?: () => void;
  showSearchResults?: (x: boolean) => void;
}
const StyledDropDownMenuItem = styled.div`
  padding: 0.75rem 0.5rem;
  background-color: ${palette.c000};
  :hover {
    cursor: pointer;
    background-color: ${palette.c499};
  }
`;

const DropDownMenuItem = (props: Props) => {
  const HandleClick = () => {
    if (props.showSearchResults !== undefined) {
      props.showSearchResults(true);
    }
  };
  return (
    <StyledDropDownMenuItem onClick={() => HandleClick()}>
      {props.children}
    </StyledDropDownMenuItem>
  );
};

export default DropDownMenuItem;
