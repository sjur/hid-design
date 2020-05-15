import React, { useState } from "react";
import styled from "styled-components";
import Layout from "layout/Layout";
import Paragraph from "components/Paragraph/Paragraph";
import TabNavigation, {
  StyledTabNavigation,
  TabButton,
} from "components/Navigation/TabNavigation/TabNavigation";

import { Row, Col } from "react-flexbox-grid";
import Heading from "components/Heading/Heading";
import Segment from "components/Segment/Segment";
import Link from "components/Link/Link";

const TabNavigationPage = () => {
  return (
    <Layout pageTitle="Faner (tabs)">
      <Segment vSpace="3rem">
        <StyledTabNavigation>
          <TabButton to="null" activeClassName="activeTab">
            Lorem
          </TabButton>

          <TabButton to="#" activeClassName="activeTab" className="activeTab">
            Active tab
          </TabButton>
          <TabButton to="null" activeClassName="activeTab">
            Alpha
          </TabButton>
          <TabButton to="null" activeClassName="activeTab">
            Omega
          </TabButton>
        </StyledTabNavigation>
      </Segment>
      <Row>
        <Col lg={8}>
          <Heading text="Eksempel på bruk" size="h2" />
          <Paragraph>
            Brukes i{" "}
            <Link href="/apidetails-2"> konfigurering av API-detaljer</Link> .
          </Paragraph>
        </Col>
      </Row>
    </Layout>
  );
};

export default TabNavigationPage;
