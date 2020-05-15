import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Button, { ButtonGroup } from "components/Button/Button";
import { Row, Col } from "react-flexbox-grid";
import Layout from "layout/genericapp/ModalLayout";
import { Close } from "@material-ui/icons";

import SearchBox from "components/Search/SearchBox/SearchBox";
import Heading from "components/Heading/Heading";
import TableA from "components/Table/TableA/TableA";

import TableBRow from "components/Table/TableA/Row/TableBRow";

const SearchBoxRow = styled.div`
  display: flex;
  justify-content: center;
`;
const TableHeaderRow = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  > * {
    margin-right: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  > * {
    margin-left: auto;
  }
`;
const data = [
  {
    column1: "Enhet",
    column2: "Klientsystemer",
    column3: "Scope",
    rowSubtitleIsLink: false,
    expandable: false,
    isSearchResult: true,
  },
  {
    column1: "Bergen kommune",
    column2: "alle klientsystemer",
    column3: "alle scope",
    columnSubtitle: "988 456 123",
    linkTo: "#",
  },
  // {
  //   column1: "Bodø kommune",
  //   column2: "alle klientsystemer",
  //   column3: "alle scope",
  //   columnSubtitle: "977 666 554",
  //   linkTo: "#",
  // },
];

const AddEnhet = () => {
  const [showSearchDropDown, useShowSearchDropDown] = useState(false);
  const [showSearchResults, useShowSearchResults] = useState(false);
  const HandleClick = (e: ChangeEvent<HTMLInputElement>) => {
    useShowSearchDropDown(e.target.value.length > 2);
  };
  return (
    <>
      <Row>
        <Col lg={12}>
          <SearchBoxRow>
            <SearchBox
              title="Søk etter enheter"
              onChange={HandleClick}
              showDropDown={showSearchDropDown && !showSearchResults}
              showSearchResults={useShowSearchResults}
            />
          </SearchBoxRow>
          <Row>
            <Col lg={12}>
              <TableHeaderRow>
                <Heading size="h3" text="Valgte enheter" />
                <ButtonGroup>
                  <Button small label="Fullfør og gi tilgang" />
                  <Button small label="Avbryt" buttonType="tertiary" />
                </ButtonGroup>
              </TableHeaderRow>
              {showSearchResults && <TableA data={data} />}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default AddEnhet;
