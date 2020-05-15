import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import palette from "constants/colors";
import typography from "constants/typography";
import { NavLink, Link } from "react-router-dom";
import Heading from "components/Heading/Heading";
import Button from "components/Button/Button";

interface Props {
  headline?: string;
  name?: string;
  subtitle?: string;
  children?: React.ReactNode;
  navigateTo?: string;
  noHoverStyle?: boolean;
}

const StyledRow = styled.div<Props>`
  min-height: 4rem;
  border-top: 1px solid ${palette.c130};
  padding: 0.5rem;
  :last-child {
    border-bottom: 1px solid ${palette.c130};
  }
  :hover {
    background-color: ${props => (props.noHoverStyle ? "" : `${palette.c130}`)};
  }
`;

const HeadlineRow = styled.div`
  font-size: ${typography.body.small};
`;
const SubtitleRow = HeadlineRow;

const MainRow = styled.div`
  padding: 0.5rem 0;
`;

const Headline = styled("span")``;
const Subtitle = Headline;

const WrapRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ButtonRow = styled.div`
  height: 4rem;
  > * {
    margin-left: 1rem;
  }
`;

const checkForNavigationLink = (element: ReactElement, link?: string) => {
  if (link != undefined) {
    return <NavLink to={link}>{element}</NavLink>;
  }
  return element;
};

const TableARow = (props: Props) => {
  const [showSettings, useShowSettings] = useState(false);
  const HandleShowSettings = () => {
    useShowSettings(!showSettings);
  };
  return (
    <StyledRow noHoverStyle={props.noHoverStyle}>
      <HeadlineRow>
        <Row between-lg>
          <Col lg={9}>
            <Headline>{props.headline && props.headline}</Headline>
          </Col>
          <Col lg={3}>
            <WrapRight>
              <Link to="#" onClick={HandleShowSettings}>
                {showSettings ? "skjul innstillinger" : "vis instillinger"}
              </Link>
            </WrapRight>
          </Col>
        </Row>
      </HeadlineRow>
      <MainRow>
        <Row>
          <Col lg={8}>
            {checkForNavigationLink(
              <Heading size="h3" text={props.name} compact />,
              props.navigateTo
            )}
          </Col>
          <Col lg={4}>
            <WrapRight>
              {showSettings && (
                <ButtonRow>
                  <Button small label="Sperr tilgang"></Button>
                  <Button small label="Slett konfigurasjon"></Button>
                </ButtonRow>
              )}
            </WrapRight>
          </Col>
        </Row>
      </MainRow>
      <SubtitleRow>
        <Row>
          <Col lg={9}>
            <Subtitle>{props.subtitle && props.subtitle}</Subtitle>
          </Col>

          <Col lg={3}>
            <WrapRight>
              {showSettings && (
                <NavLink to="#">Legg til/fjern klientsystemer</NavLink>
              )}
            </WrapRight>
          </Col>
        </Row>
      </SubtitleRow>
    </StyledRow>
  );
};

export default TableARow;
