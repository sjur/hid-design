import React from "react";
import styled from "styled-components";
import palette from "constants/helseidColors";
import Button from "components/Button/Button";

import Input from "components/Form/Input/Input/Input";

const StyledFormSearchBox = styled.div`
  width: 100%;
  display: flex;
`;
const SearchFieldContainer = styled.div`
  width: 100%;
`;

const SearchInput = styled(Input)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: none;
  /* height: 100%; */
`;

const SearchButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const FormSearchBox = () => {
  return (
    <StyledFormSearchBox>
      <SearchFieldContainer>
        <SearchInput placeholder="Search" />
      </SearchFieldContainer>

      <SearchButton label="search" />
    </StyledFormSearchBox>
  );
};

export default FormSearchBox;
