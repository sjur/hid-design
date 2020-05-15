import React from "react";
import Layout from "layout/Layout";
import fonts from "constants/typography";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";
import { Grid, Row, Col } from "react-flexbox-grid";
import Link from "components/Link/Link";
import NavLink from "react-router-dom";

const ColoredGrid = styled(Grid)`
  background-color: lightcoral;
  padding: 0.25rem;
`;
const ColoredRow = styled(Row)`
  background-color: lightblue;
  padding: 0.25rem;
  margin: 0.25rem;
`;
const ColoredCol = styled(Col)`
  background-color: lavenderblush;
  border: 1px solid black;
  border-collapse: collapse;
`;
const SpacingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const XSmall = styled.div`
  width: 0.25rem;
  height: 2rem;
  background-color: purple;
`;
const Small = styled(XSmall)`
  width: 0.5rem;
`;
const Normal = styled(XSmall)`
  width: 1rem;
`;
const Large = styled(XSmall)`
  width: 2rem;
`;

const GridSpacingPage = () => {
  return (
    <Layout pageTitle="Grid and spacing">
      <Heading size="h2" text="Grid" />
      <Paragraph>
        Grid er basert på et system av rader og kolonner (Rows and Columns).
        Hver rad kan deles inn i maksimum 12 kolonner. Brukt riktig sørger dette
        systemet for at sidene justerer seg for ulike oppløsninger.
      </Paragraph>
      <Paragraph>
        I denne illustrasjonen er padding fargelagt og gjort tykkere for å
        illustere hvordan det fungerer. I praksis har grid minimalt med
        padding/margin.
      </Paragraph>
      <ColoredGrid>
        This is the grid
        <ColoredRow>
          <Col lg={12}>This is a row</Col>
          <ColoredCol lg={4}>
            This is a cell that spans 4 columns
            <Paragraph>Layout is based on react-flexbox-grid</Paragraph>
          </ColoredCol>
          <ColoredCol lg={4}>
            <Paragraph>Each row has a maxium of 12 columns</Paragraph>
          </ColoredCol>
          <ColoredCol lg={4}>
            <Paragraph>
              This row has 3 columns that are all 4 columns wide
            </Paragraph>
          </ColoredCol>
        </ColoredRow>
        <ColoredRow>
          <ColoredCol lg={6}>
            <Paragraph>
              This row has 2 columns that are both 6 columns wide
            </Paragraph>
          </ColoredCol>
          <ColoredCol lg={6}>
            <Paragraph>
              See{" "}
              <Link href="https://roylee0704.github.io/react-flexbox-grid/">
                https://roylee0704.github.io/react-flexbox-grid/
              </Link>{" "}
              for more examples.
            </Paragraph>
          </ColoredCol>
        </ColoredRow>
      </ColoredGrid>
      <Heading size="h2" text="Spacing" />
      <Paragraph>
        Avstand mellom elementer er basert på rem-enheter, der standard avstand
        er 1rem.{" "}
      </Paragraph>
      <SpacingWrapper>
        <div>
          XSmall: 0.25rem
          <XSmall />
        </div>
        <div>
          Small: 0.5rem
          <Small />
        </div>
        <div>
          Normal: 1rem
          <Normal />
        </div>
        <div>
          Large: 2rem
          <Large />
        </div>
      </SpacingWrapper>
      <Paragraph>
        Dette er kun en veiledning, bruk den avstanden som ser best ut på
        skjerm.
      </Paragraph>
    </Layout>
  );
};

export default GridSpacingPage;
