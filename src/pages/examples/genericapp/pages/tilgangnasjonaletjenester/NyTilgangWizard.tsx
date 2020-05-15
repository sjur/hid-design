import React from "react";
import styled from "styled-components";
import KonfigurerNyTilgang from "./KonfigurerNyTilgang";
import Heading from "components/Heading/Heading";
import { Row, Col } from "react-flexbox-grid";
import Button from "components/Button/Button";
import Segment from "components/Segment/Segment";

const NyTilgangWizard = () => {
  return (
    <>
      <Row>
        <Col lg={12}></Col>
      </Row>
      <Row>
        <Col lg={12}>
          <KonfigurerNyTilgang />
        </Col>
      </Row>
    </>
  );
};

export default NyTilgangWizard;
