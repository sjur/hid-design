import React from "react";
import styled from "styled-components";
import palette from "constants/helseidColors";

interface ContentTableProps {
  columns?: number;
  rows?: number;
  headerRow: boolean;
  data: Array<object>;
}

const StyledContentTable = styled("table")`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTableRow = styled("tr")`
  &:nth-child(even) {
    background: ${palette.c130};
  }
  &:hover {
    cursor: pointer;
    background: ${palette.c530};
  }
`;
const StyledHeaderRow = styled("tr")`
  font-weight: bold;
`;

const StyledTableCell = styled("td")`
  /* padding: 0.25rem 0.5rem 0.25rem 0; */
  padding: 0.15rem 0.5rem 0.15rem 0;
  > img {
    display: flex;
    align-items: center;
    margin-right: 0.25rem;
  }
  &:first-child {
    padding-left: 0.25rem;
  }
`;

const buildCells = (cellData: Array<string>) => {
  const cellsToReturn: Array<React.ReactElement> = [];
  cellData.forEach((cell) => {
    cellsToReturn.push(<StyledTableCell>{cell}</StyledTableCell>);
  });
  return cellsToReturn;
};

const buildTable = (tableData: Array<object>, hasHeaderRow: boolean) => {
  const tableToReturn: Array<React.ReactElement> = [];
  if (hasHeaderRow) {
    const headerRow = tableData.shift();
    if (headerRow != undefined) {
      //but why though
      const entries = Object.values(headerRow);
      tableToReturn.push(
        <thead>
          <StyledHeaderRow>{buildCells(entries)} </StyledHeaderRow>
        </thead>
      );
    }
  }
  tableData.forEach((row) => {
    console.log(row);
    const entries = Object.values(row);
    tableToReturn.push(<StyledTableRow>{buildCells(entries)}</StyledTableRow>);
  });

  return <>{tableToReturn}</>;
};

const ContentTable = (props: ContentTableProps) => {
  return (
    <StyledContentTable>
      {buildTable(props.data, props.headerRow)}
    </StyledContentTable>
  );
};

export default ContentTable;
