import React from "react";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import Paragraph from "components/Paragraph/Paragraph";
import RightPanel from "components/RightPanel/RightPanel";
import { InfoOutlined, LinkedIn } from "@material-ui/icons";

const InfoWrapper = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
  background-color: yellow;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  color: #666666;
  font-style: italic;
`;

const Home = () => {
  return (
    <Layout pageTitle="Introduksjon">
      <Paragraph>
        Hensikten med dette designsystemet er å gjøre det enkelt for HelseID å
        utvikle nye tjenester og videreutvikle eksisterende tjenester innenfor
        et designsystem som ivaretar helhet både i visuell design og
        interaksjoner.
      </Paragraph>
      <Paragraph>
        Systemet består av et sett med komponenter og eksempler på bruk. I
        tillegg er det utviklet en prototyp basert på disse komponentene.
        Prototypen inneholder tjenester og interaksjoner som både dokumenterer
        hvordan disse tjenestene er designet og tenkt brukt, og hvordan de
        individuelle komponentene fungerer i en større helhet.
      </Paragraph>
      <Paragraph>
        Komponentene og prototypen er tilgjengelige i menyen til venstre.
      </Paragraph>
      <Paragraph>
        Prototypen har en hjelpefunksjon på de fleste sidene. Hensikten med
        hjelpefunksjonen er å beskrive de valg som er gjort i designet, og til
        dels hvordan prototypen fungerer.
        <br />
        De sidene som har en hjelpefunksjon har et sidepanel til høyre som er
        markert med en gul info-tag{" "}
        <InfoWrapper>
          <InfoOutlined fontSize="inherit" />
        </InfoWrapper>
        . Panelet ekspanderer ved hover over denne indikatoren. Du kan se et
        eksempel på dette til høyre i dette skjembildet.
      </Paragraph>
      <Paragraph>
        Prototypen har også en liten link øverst til venstre i skjembildet som
        leder deg tilbake til designsystem. Hverken denne linken eller
        hjelpefunksjonen er del av designet for HelseID TAKT, disse elementene
        er kun ment å gjøre det enklere å navigere mellom designsystemet og
        prototypen.
      </Paragraph>
      <Footer>Versjon 1.0.0 15.05.2020 @sjurs</Footer>
      <RightPanel title="Hjelp og informasjon">
        Her finner du hjelp og informasjon for de ulike sidene i prototypen.
      </RightPanel>
    </Layout>
  );
};

export default Home;
