import React from "react";
import styled from "styled-components";
import palette from "constants/colors";
import DropDownMenu from "components/DropDown/DropDownMenu/DropDownMenu";

const StyledSearchBox = styled.input`
  width: 40rem;
  height: 4rem;
  border: 1px solid ${palette.c120};
  padding: 1rem;
  font-size: 1rem;
`;

interface Props {
  title?: string;
  onChange?: any;
  showDropDown?: boolean;
  showSearchResults?: (x: boolean) => void;
}
const ComponentWrapper = styled.div`
  height: auto;
  position: relative;
`;
const SearchBoxWrapper = styled(ComponentWrapper)`
  height: 4rem;
`;

const SearchBox = (props: Props) => {
  return (
    <ComponentWrapper>
      <h3>{props.title && props.title}</h3>

      <SearchBoxWrapper>
        <StyledSearchBox
          type="search"
          placeholder="Skriv inn organisasjonsnummer, f.eks: 971524545"
          onChange={props.onChange}
        />
        {props.showDropDown && (
          <DropDownMenu showSearchResults={props.showSearchResults} />
        )}
      </SearchBoxWrapper>
    </ComponentWrapper>
  );
};

export default SearchBox;
