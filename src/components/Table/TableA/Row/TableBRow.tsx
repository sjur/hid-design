import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import palette from "constants/helseidColors";
import typography from "constants/typography";
import { NavLink, Link } from "react-router-dom";
import Heading from "components/Heading/Heading";
import Button from "components/Button/Button";
import CheckBox from "components/Form/Checkbox/CheckBoxFancy";
import { Add, Remove } from "@material-ui/icons";
import Checkbox from "components/Form/Checkbox/Checkbox";

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

const Subtitle = styled.div<Props>`
  font-size: ${typography.body.small};
  padding-top: 0.25rem;
  color: ${(props) =>
    props.subtitleLink ? `${palette.c210}` : `${palette.c100}`};
`;

export const TableBHeadlineRow = (props: HeadlineProps) => {
  return (
    <StyledHeadlineRow>
      <Row>
        <Col lg={5}>{props.column1} </Col>
        <Col lg={3}>{props.column2} </Col>
        <Col lg={3}>{props.column3} </Col>
        <Col lg={1}> </Col>
      </Row>
    </StyledHeadlineRow>
  );
};
const StyledAdd = styled(Add)`
  margin-left: auto;
`;
const StyledRemove = styled(Remove)`
  margin-left: auto;
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
const StyledNavLink = styled(NavLink)`
  color: inherit;
`;

const TableBRow = (props: Props) => {
  const [expandRow, useExpandRow] = useState(false);

  const ExpandedSection = styled.div`
    display: ${expandRow || props.isSearchResult ? "block" : "none"};
    padding: 0.5rem 0;
    > * {
      padding: 0.5rem 0;
    }
  `;
  const HandleClickExpandSection = (expand: boolean) => {
    useExpandRow(expand);
  };
  return (
    <StyledRow
      expandable={props.expandable}
      isSearchResult={props.isSearchResult}
    >
      <StyledNavLink to={props.linkTo || "#"}>
        <Row onClick={() => HandleClickExpandSection(!expandRow)}>
          <Col lg={5}>
            <Heading size="h3" text={props.column1} compact />

            {props.columnSubtitle && (
              <Subtitle subtitleLink={props.subtitleLink}>
                {props.columnSubtitle}
              </Subtitle>
            )}
          </Col>
          <StyledCol lg={3}>{props.column2}</StyledCol>
          <StyledCol lg={3}>{props.column3} </StyledCol>
          <StyledCol lg={1}>
            {props.expandable && rowIconToShow(expandRow)}
          </StyledCol>
        </Row>
        {(props.expandable || props.isSearchResult) && (
          <ExpandedSection>
            <Row>
              <StyledCol lg={3}>Tillatte klientsystemer</StyledCol>
              <StyledCol lg={9}>
                <OptionWrapper>
                  <CheckBox checked />
                  <span>Alle</span>
                </OptionWrapper>
                <OptionWrapper>
                  <CheckBox />
                  <span>Cosdoc</span>
                </OptionWrapper>
                <OptionWrapper>
                  <CheckBox />
                  <span>Visma</span>
                </OptionWrapper>
                <OptionWrapper>
                  <CheckBox />
                  <span>Gerica</span>
                </OptionWrapper>
              </StyledCol>
            </Row>
            <Row>
              <StyledCol lg={3}>Tillatte scope</StyledCol>
              <StyledCol lg={7}>
                <OptionWrapper>
                  <CheckBox checked />
                  <span>Alle</span>
                </OptionWrapper>
                <OptionWrapper>
                  <CheckBox />
                  <span>Scope 1</span>
                </OptionWrapper>
                <OptionWrapper>
                  <CheckBox />
                  <span>Scope 2</span>
                </OptionWrapper>
                <OptionWrapper>
                  <CheckBox />
                  <span>Scope 3</span>
                </OptionWrapper>
              </StyledCol>
              <StyledCol lg={2}>
                <StyledButton
                  buttonType="secondary"
                  label="fjern enhet"
                  small
                />
              </StyledCol>
            </Row>
          </ExpandedSection>
        )}
      </StyledNavLink>
    </StyledRow>
  );
};

export default TableBRow;
