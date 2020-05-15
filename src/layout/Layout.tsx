import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import SideBar from "./SideBar";
import Content from "./Content";
import Heading from "components/Heading/Heading";

interface LayoutProps {
  children?: React.ReactNode;
  pageTitle?: string;
  noContentBox?: boolean;
  app?: string;
}

const TopBar = styled.div`
  padding: 1.5rem 0;
`;
const StyledGrid = styled(Grid)``;
const StyledCol = styled(Col)`
  margin-left: -8px;
  margin-right: 2rem;
  height: 100vh;
  padding-left: 0;
`;
const HeadingWrapper = styled.div`
  margin-left: 1rem;
  > a {
    color: inherit;
  }
`;
const Layout = (props: LayoutProps) => {
  return (
    <StyledGrid fluid>
      <Row>
        <StyledCol lg={2}>
          <HeadingWrapper>
            <a href="/">
              <Heading size="h3" text="HelseID Designsystem" />
            </a>
          </HeadingWrapper>
          <SideBar />
        </StyledCol>
        <Col lg={9}>
          <Content
            pageTitle={props.pageTitle}
            noContentBox={props.noContentBox || false}
          >
            {props.children}
          </Content>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </StyledGrid>
  );
};

export default Layout;
