import React from "react";
import styled from "styled-components";
import KontaktInfo from "./KonfigurerNyTilgang";
import Heading from "components/Heading/Heading";
import { Row, Col } from "react-flexbox-grid";
import Button from "components/Button/Button";
import Segment from "components/Segment/Segment";

const NyTilgangWizard2 = () => {
  return (
    <Row>
      <Col lg={3}></Col>
      <Col lg={6}>
        <Heading
          size="h2"
          text="Konfigurer klientsystem, tjenester og enheter"
        />
      </Col>
    </Row>
  );
};

export default NyTilgangWizard2;
