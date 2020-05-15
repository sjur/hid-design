import React from "react";
import styled from "styled-components";
import palette from "../../../constants/colors";
import Layout from "../../../layout/genericapp/landing/GenericAppLandingLayout";
import { Grid, Row, Col } from "react-flexbox-grid";

import { KeyboardBackspace } from "@material-ui/icons";
import Card from "components/Card/Card";
import { NavLink, Redirect, Link } from "react-router-dom";
import RightPanel from "components/RightPanel/RightPanel";
import Paragraph from "components/Paragraph/Paragraph";

const BackToDsm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  > a {
    color: white;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  :hover {
    color: inherit;
    text-decoration: none;
  }
`;

const ExampleApp = () => {
  return (
    <Layout>
      <Row>
        <Col lg={3}>
          <StyledLink to="/tilgangnasjonale">
            <Card
              title="Nasjonale e-helse tjenester"
              navigateTo="/tilgangnasjonale"
              description="Konfigurere tilgang til nasjonale tjenester som Kjernejournal eller Dødsmelding"
              buttonLabel="Gå til"
            />
          </StyledLink>
        </Col>
        <Col lg={3}>
          <StyledLink to="/apiadmin">
            <Card
              title="Administrere APIer og tilgang"
              navigateTo="/apiadmin"
              description="Preprovisjonere tilgang til APIer for kommuner og andre
                enheter"
              buttonLabel="Gå til"
            />
          </StyledLink>
        </Col>
        <Col lg={3}>
          <StyledLink to="/lorem">
            <Card
              title="Lorem"
              buttonLabel="Gå til"
              description="Beskrivelse"
            />
          </StyledLink>
        </Col>
        <Col lg={3}>
          <StyledLink to="/ipsum">
            <Card
              title="Ipsum"
              description="Beskrivelse"
              buttonLabel="Gå til"
            />
          </StyledLink>
        </Col>
      </Row>
      <RightPanel title="Landingssiden">
        <Paragraph>
          Dette er siden bruker lander på ved innlogging dersom han/hun har
          tilgang til flere enn en tjeneste. Bruker kan se alle tjenester de har
          tilgang til representert som ulike kort som kan klikkes på for å gå
          til den tjenesten. Kort-metaforen er den samme som er brukt på
          Helsenorge for å skille mellom ulike tjenester som henger sammen i en
          større helhet.
        </Paragraph>
        <Paragraph>
          Om bruker kun har tilgang til en tjeneste, f.eks. "Konfigurere
          nasjonale tjenester", lander brukeren direkte på den siden uten å se
          kort med andre tjenester.
        </Paragraph>
        <Paragraph>
          Hvert av kortene beskriver tjenestene gjennom en tittel, og en
          beskrivelse. I tillegg har kortet en knapp som hjelper brukeren med å
          forstå at de kan navigere til den tjenesten.
          <br />
          Bruker kan klikke hvorsomhelst på kortet for å navigere til tjenesten.
        </Paragraph>
        <Paragraph>
          <Link to="/card">Beskrivelse av kort</Link> i designsystemet.
        </Paragraph>
      </RightPanel>
    </Layout>
  );
};

export default ExampleApp;
