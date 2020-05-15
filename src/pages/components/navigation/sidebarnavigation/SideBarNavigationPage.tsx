import React, { useState } from "react";
import styled from "styled-components";
import Layout from "layout/Layout";
import { KeyboardArrowDown } from "@material-ui/icons";
import SideBarNavigation, {
  SideBarNavLink,
} from "components/Navigation/SideBarNavigation/SideBarNavigation";
import { Row, Col } from "react-flexbox-grid";
import {
  Add,
  Policy,
  HowToVote,
  Remove,
  AirplanemodeActive,
  AccessTime,
} from "@material-ui/icons";
import Paragraph from "components/Paragraph/Paragraph";
import Heading from "components/Heading/Heading";
import Segment from "components/Segment/Segment";
import Link from "components/Link/Link";

const sidebarItems = [
  {
    name: "item 1",
    icon: null,
    linkTo: "/",
    inGroup: false,
    groupName: null,
  },
  {
    name: "item 2",
    icon: null,
    linkTo: "/",
    inGroup: false,
    groupName: null,
  },
  {
    name: "item 3",
    icon: null,
    linkTo: "/",
    inGroup: false,
    groupName: null,
  },
  {
    name: "item 4",
    icon: null,
    linkTo: "/",
    inGroup: false,
    groupName: null,
  },
];
const Container = styled.div`
  border: 1px solid #ccc;
`;
const IconContainer = styled.div`
  margin-right: 0.75rem;
`;

const SideBarNavigationPage = () => {
  return (
    <Layout pageTitle="Sidebar meny">
      <Row>
        <Col lg={12}>
          <Paragraph>
            Hovedmeny for navigasjon mellom ulike hovedfunksjoner.{" "}
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <h2>Sidebar meny uten ikoner</h2>
          <Container>
            <SideBarNavLink to="/#" activeClassName="activeNav" exact>
              item 1
            </SideBarNavLink>
            <SideBarNavLink
              to="#"
              activeClassName="activeNav"
              exact
              className="activeNav"
            >
              item 2
            </SideBarNavLink>
            <SideBarNavLink to="/#" activeClassName="activeNav" exact>
              item 3
            </SideBarNavLink>
            <SideBarNavLink to="/#" activeClassName="activeNav" exact>
              item 4
            </SideBarNavLink>
          </Container>
        </Col>
        <Col lg={4}>
          <h2>Sidebar meny med ikoner</h2>
          <Container>
            <SideBarNavLink to="/#" activeClassName="activeNav" exact>
              <IconContainer>
                <AirplanemodeActive />
              </IconContainer>
              <span>item 1</span>
            </SideBarNavLink>
            <SideBarNavLink
              to="#"
              activeClassName="activeNav"
              exact
              className="activeNav"
            >
              <IconContainer>
                <HowToVote />
              </IconContainer>
              <span>item 2</span>
            </SideBarNavLink>
            <SideBarNavLink to="/#" activeClassName="activeNav" exact>
              <IconContainer>
                <Policy />
              </IconContainer>
              <span>item 3</span>
            </SideBarNavLink>
            <SideBarNavLink to="/#" activeClassName="activeNav" exact>
              <IconContainer>
                <AccessTime />
              </IconContainer>
              <span>item 4</span>
            </SideBarNavLink>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Heading text="Eksempel på bruk" size="h2" />
          <Paragraph>
            Brukes på alle sider unntatt landingssiden.
            <br /> F.eks:
            <Link href="/tilgangnasjonale">
              {" "}
              Konfigurer tilgang til nasjonale e-helse tjenester
            </Link>
            .
          </Paragraph>
        </Col>
      </Row>
    </Layout>
  );
};

export default SideBarNavigationPage;
