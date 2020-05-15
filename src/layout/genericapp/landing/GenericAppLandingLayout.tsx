import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import Content from "../../Content";
import TopBar from "layout/genericapp/GenericAppTopBar";

interface LayoutProps {
  children?: React.ReactNode;
  pageTitle?: string;
  noContentBox?: boolean;
  app?: string;
}

const Layout = (props: LayoutProps) => {
  return (
    <Grid fluid>
      <Row>
        <Col lg={12}>
          <TopBar />
        </Col>
      </Row>
      <Grid>
        <Row>
          <Col lg={12}>
            <Content pageTitle={props.pageTitle}>{props.children}</Content>
          </Col>
        </Row>
      </Grid>
    </Grid>
  );
};

export default Layout;
