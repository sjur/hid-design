//brukes av innholdet i modal

import React, { ReactNode } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import { Close } from "@material-ui/icons";

import Content from "../Content";
import BackLink from "components/BackLink/BackLink";

interface Props {
  children?: ReactNode;
  pageTitle?: string;
}

const Layout = (props: Props) => {
  return (
    <Grid>
      <Row>
        {/* <Col lg={1} /> */}
        <Col lg={12}>
          <Content pageTitle={props.pageTitle}>{props.children}</Content>
        </Col>
        {/* <Col lg={1} /> */}
      </Row>
    </Grid>
  );
};

export default Layout;
