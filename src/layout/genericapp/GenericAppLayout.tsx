import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

import TopBar from "layout/genericapp/GenericAppTopBar";
import SideBar from "./GenericAppSideBar";
import Content from "../Content";


interface LayoutProps {
  children?: React.ReactNode;
  pageTitle?: string;
  noContentBox?: boolean;
  app?: string;
  backLinkTo?: string;
  backLinkLabel?: string;
}

const StyledCol = styled(Col)`
  margin-left: -8px;
  /* margin-right: 1rem; */
  height: 100vh;
  padding-left: 0;
`;

const Layout = (props: LayoutProps) => {
  return (
    <Grid fluid>
      <Row>
        <Col lg={12}>
          <TopBar />
        </Col>
      </Row>
      <Row>
        <StyledCol md={2}>
          <SideBar />
        </StyledCol>
        <Col md={10}>
          <Content
            backLinkTo={props.backLinkTo}
            backLinkLabel={props.backLinkLabel}
            pageTitle={props.pageTitle}
            noContentBox={props.noContentBox || false}
          >
            {props.children}
          </Content>
        </Col>
      </Row>
    </Grid>
  );
};

export default Layout;
