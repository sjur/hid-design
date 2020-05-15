import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import TableARow, {
  TableAHeadlineRow,
} from "components/Table/TableA/Row/TableARow";
import TableBRow, {
  TableBHeadlineRow,
} from "components/Table/TableA/Row/TableBRow";
import { NavLink } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  data: Array<object>;
  rowLayout?: string;
  openModal?: () => void;
}

const StyledTable = styled.div``;

const TableA = (props: Props) => {
  const buildTableA = (data: Array<object>) => {
    const tableEntries: Array<React.ReactElement> = [];
    var headline = Object(data[0]);

    tableEntries.push(
      <TableAHeadlineRow
        column1={Object(data[0]).column1}
        column2={Object(data[0]).column2}
        column3={Object(data[0]).column3}
      />
    );
    for (let i = 1; i < data.length; i++) {
      tableEntries.push(
        <TableARow
          column1={Object(data[i]).column1}
          column2={Object(data[i]).column2}
          column3={Object(data[i]).column3}
          linkTo={Object(data[i]).linkTo}
          columnSubtitle={Object(data[i]).columnSubtitle}
          subtitleLink={Object(data[0]).rowSubtitleIsLink}
          expandable={Object(data[0]).expandable}
          isSearchResult={Object(data[0]).isSearchResult}
          isOpen={Object(data[i]).open}
          openModal={props.openModal}
        />
      );
    }
    return tableEntries;
  };

  const buildTableB = (data: Array<object>) => {
    const tableEntries: Array<React.ReactElement> = [];
    var headline = Object(data[0]);
    console.log(headline);

    tableEntries.push(
      <TableBHeadlineRow
        column1={Object(data[0]).column1}
        column2={Object(data[0]).column2}
        column3={Object(data[0]).column3}
      />
    );
    for (let i = 1; i < data.length; i++) {
      tableEntries.push(
        <TableBRow
          column1={Object(data[i]).column1}
          column2={Object(data[i]).column2}
          column3={Object(data[i]).column3}
          linkTo={Object(data[i]).linkTo}
          columnSubtitle={Object(data[i]).columnSubtitle}
          subtitleLink={Object(data[0]).rowSubtitleIsLink}
          expandable={Object(data[0]).expandable}
          isSearchResult={Object(data[0]).isSearchResult}
        />
      );
    }

    return tableEntries;
  };
  if (props.rowLayout === "A") {
    return <StyledTable>{buildTableA(props.data)}</StyledTable>;
  }
  return <StyledTable>{buildTableB(props.data)}</StyledTable>;
};

export default TableA;
