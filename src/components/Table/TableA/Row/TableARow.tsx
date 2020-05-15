import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import palette from "constants/helseidColors";
import typography from "constants/typography";
import { NavLink, Link } from "react-router-dom";
import Heading from "components/Heading/Heading";
import Button, { ButtonGroup } from "components/Button/Button";
import CheckBox from "components/Form/Checkbox/CheckBoxFancy";
import RadioButton from "components/Form/RadioButton/RadioButtonFancy";
import { Add, Remove } from "@material-ui/icons";
import Tag from "components/Tag/Tag";

interface Props {
  column1?: string;
  column2?: string;
  column3?: string;
  columnSubtitle?: string;
  subtitleLink?: boolean;
  children?: React.ReactNode;
  linkTo?: string;
  expandable?: boolean;
  isSearchResult?: boolean;
  className?: string;
  isOpen?: boolean;
  openModal?: () => void;
}
interface HeadlineProps {
  column1?: string;
  column2?: string;
  column3?: string;
}

const StyledHeadlineRow = styled.div`
  padding: 0.5rem;
  font-size: ${typography.body.small};
  text-transform: uppercase;
`;

const StyledRow = styled.div<Props>`
  border-top: 1px solid ${palette.c120};
  padding: 0.5rem;
  color: #333333;

  :last-child {
    border-bottom: 1px solid ${palette.c120};
  }
  :hover {
    cursor: pointer;
    /* background-color: ${palette.c130}; */
    background-color: ${(props) =>
      props.expandable ? "inherit" : `${palette.c130}`};
  }
`;
const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`;

const Status = styled.span<Props>`
  font-size: ${typography.body.small};
  font-weight: 600;

  color: ${(props) => (props.isOpen ? `${palette.c100}` : `${palette.c310}`)};
`;
const TableCellEntry = styled.div<Props>`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  margin: 0 0.5rem 0.25rem 0;
`;
const SmallEntry = styled("span")`
  font-size: ${typography.body.small};
  margin-right: 0.5rem;
`;
const PillEntry = styled(TableCellEntry)`
  display: inline-block;
  font-size: ${typography.body.small};
  background: ${(props) =>
    props.isOpen ? `${palette.c530}` : `${palette.c310}`};
  color: ${(props) => (props.isOpen ? `${palette.c100}` : `${palette.c000}`)};
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.15rem 0.5rem;
  font-weight: 600;
`;

export const TableAHeadlineRow = (props: HeadlineProps) => {
  return (
    <StyledHeadlineRow>
      <Row>
        <Col lg={2}>{props.column1} </Col>
        <Col lg={3}>{props.column2} </Col>
        <Col lg={6}>{props.column3} </Col>
        <Col lg={1}> </Col>
      </Row>
    </StyledHeadlineRow>
  );
};
const StyledAdd = styled(Add)`
  margin-left: auto;
  margin-top: 0.75rem;
  align-self: flex-start;
`;
const StyledRemove = styled(Remove)`
  margin-left: auto;
  margin-top: 0.75rem;
  align-self: flex-start;
`;
const StyledButton = styled(Button)`
  margin-left: auto;
`;

const rowIconToShow = (expanded: boolean): React.ReactElement => {
  if (expanded) return <StyledRemove />;
  return <StyledAdd />;
};

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  > span {
    margin-left: 0.25rem;
  }
`;

const TableARow = (props: Props) => {
  const [expandRow, useExpandRow] = useState(false);
  const [showModal, useShowModal] = useState(false);

  const ExpandedSection = styled.div`
    display: ${expandRow || props.isSearchResult ? "block" : "none"};
    padding: 0 0 0.5rem;
    > * {
      padding: 1rem 0;
    }
  `;

  const UnitLink = styled.div`
    margin-top: 0.5rem;
    z-index: 100;
  `;

  const HandleClickExpandSection = (expand: boolean) => {
    useExpandRow(expand);
  };
  const listClients = (clients: string) => {
    const clientEntries: Array<React.ReactElement> = [];

    // var clientArray: Array<string> = [];
    var clientArray = clients.split(";");

    clientArray.forEach((element) => {
      clientEntries.push(<Tag open={props.isOpen} label={element} />);
    });

    return clientEntries;
  };
  const listUnits = (units: string) => {
    console.log(props.openModal);
    const entries: Array<React.ReactElement> = [];
    var unitArray = units.split(";");

    unitArray.forEach((element) => {
      entries.push(
        <TableCellEntry>
          <SmallEntry>{element.substring(0, 11)}</SmallEntry>
          {element.substring(11)}
        </TableCellEntry>
      );
    });

    if (entries.length > 2 && !expandRow) {
      entries[1] = (
        <>
          {entries[1]} <a href="#">+ {entries.length - 2} til</a>
        </>
      );
      entries.length = 2;
    }
    if (expandRow) {
      entries.push(
        <UnitLink onClick={props.openModal}>
          <a href="#">Legg til/Fjern enheter</a>
        </UnitLink>
      );
    }
    return entries;
  };
  return (
    <StyledRow
      expandable={props.expandable}
      isSearchResult={props.isSearchResult}
      column1={props.column1}
      isOpen={props.isOpen}
    >
      {/* <NavLink to={props.linkTo || "#"}> */}
      {/* <Row> */}
      <Row onClick={() => HandleClickExpandSection(!expandRow)}>
        <Col lg={2}>
          {props.column1 && listClients(props.column1)}

          {props.columnSubtitle && (
            <Status>{props.isOpen ? "" : "sperret"}</Status>
          )}
        </Col>
        <Col lg={3}>{props.column2}</Col>
        <Col lg={6}>{props.column3 && listUnits(props.column3)}</Col>

        <StyledCol lg={1}>
          {props.expandable && rowIconToShow(expandRow)}
        </StyledCol>
      </Row>
      {(props.expandable || props.isSearchResult) && (
        <ExpandedSection>
          <Row>
            <StyledCol lg={1}>Klientsystem</StyledCol>
            <StyledCol lg={5}>
              <OptionWrapper>
                <RadioButton checked />
                <span>Cosdoc</span>
              </OptionWrapper>
              <OptionWrapper>
                <RadioButton />
                <span>Visma</span>
              </OptionWrapper>
              <OptionWrapper>
                <RadioButton />
                <span>Gerica</span>
              </OptionWrapper>
            </StyledCol>
          </Row>
          <Row>
            <StyledCol lg={1}>Tjenester</StyledCol>
            <StyledCol lg={5}>
              <OptionWrapper>
                <CheckBox checked />
                <span>Kjernejournal</span>
              </OptionWrapper>
              <OptionWrapper>
                <CheckBox />
                <span>Dødsmelding</span>
              </OptionWrapper>
              <OptionWrapper>
                <CheckBox />
                <span>SFM</span>
              </OptionWrapper>
            </StyledCol>
            <Col md={6}>
              <ButtonGroup>
                <Button
                  buttonType="secondary"
                  label="last ned konfigurasjon"
                  small
                />
                <Button
                  buttonType={props.isOpen ? "secondary" : "primary"}
                  label={props.isOpen ? "Sperr tilgang" : "Åpne tilgang"}
                  small
                />
                <Button buttonType="warning" label="slett aktivering" small />
              </ButtonGroup>
            </Col>
          </Row>
        </ExpandedSection>
      )}
      {/* </NavLink> */}
    </StyledRow>
  );
};

export default TableARow;
