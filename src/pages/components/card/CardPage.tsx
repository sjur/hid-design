import React from "react";
import Layout from "layout/Layout";
import { Row, Col } from "react-flexbox-grid";
import Paragraph from "components/Paragraph/Paragraph";

import Card from "components/Card/Card";
import Heading from "components/Heading/Heading";
import Link from "components/Link/Link";
import Segment from "components/Segment/Segment";

const CardPage = () => {
  return (
    <Layout pageTitle="Kort">
      <Row>
        <Col lg={6}>
          <Paragraph>
            Kort følger layout til hvordan Grid og kolonner er definert på den
            aktuelle siden hvor kort brukes. I det følgende eksempel vises 4
            kort som hver tar opp 6 kolonner i to rader.
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card
            title="Tittel"
            navigateTo="/button"
            description="Beskrivelse  av innhold"
          />
        </Col>
        <Col lg={6}>
          <Card
            title="Tittel"
            navigateTo="/button"
            description="Beskrivelse  av innhold"
          />
        </Col>
      </Row>
      <p />
      <Row>
        <Col lg={6}>
          <Card
            title="Tittel"
            navigateTo="/button"
            description="Beskrivelse  av innhold"
          />
        </Col>
        <Col lg={6}>
          <Card
            title="Tittel"
            navigateTo="/button"
            description="Beskrivelse  av innhold"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Segment vSpace="2rem">
            <Heading text="Eksempel på bruk" size="h2" />
            <Paragraph>
              Brukes på{" "}
              <Link href="/genericapp">hjemmesiden til HelseID TAKT</Link>.
            </Paragraph>
          </Segment>
        </Col>
      </Row>
    </Layout>
  );
};

export default CardPage;
