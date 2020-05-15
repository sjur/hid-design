import React from "react";
import Layout from "layout/Layout";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import { Row, Col } from "react-flexbox-grid";
import Link from "components/Link/Link";

import TypeSwatch from "./TypeSwatch";

import Paragraph from "components/Paragraph/Paragraph";

const StyledRow = styled(Row)`
  margin-bottom: 1rem;
`;

const Typography = () => {
  return (
    <Layout pageTitle="Tekststiler">
      <StyledRow>
        <Col lg={6}>
          <br />
          <TypeSwatch>
            <Heading size="h2" compact text="Default values" />
            <Paragraph>
              Typeface: Source Sans Pro
              <br />
              Color: #333333
              <br />
              Size: 1rem
              <br />
              Weight: 400 (normal)
              <br />
              Letter-spacing: 0.0125rem
            </Paragraph>
          </TypeSwatch>
        </Col>
      </StyledRow>
      <StyledRow>
        <Col lg={6}>
          <Heading size="h2" text="Headers" />
          <TypeSwatch>
            <Heading size="h1" text="H1 Page title" compact />
            <p>
              Size: 2rem
              <br />
              Weights: Normal
            </p>
            <Heading size="h2" text="H2 Section title" />
            <p>Size: 1.5rem</p>
            <Heading size="h2" text="H2 Section title compact" compact />
            <p>Margin: 0</p>
            <Heading size="h3" text="H3 Section title" />
            <p>Size: 1.1875rem</p>
            <Heading size="h3" text="H3 Section title compact" compact />
            <p>Margin: 0</p>
            <Heading size="h4" text="H4 Section title" />
            <p>
              Size: 1rem
              <br />
              Weight: 700 (bold)
            </p>
            <Heading size="h4" text="H4 Section title compact" compact />
            <p>Margin: 0</p>
          </TypeSwatch>
        </Col>
        <Col lg={6}>
          <Heading size="h2" text="Body copy" />

          <TypeSwatch>
            <Heading size="h3" text="Tekst og labels på en linje" />
            <span>Tekst og labels på en linje bruker alle default values</span>
            <Heading size="h3" text="Hyperlenke" />
            <span>
              Dette er en tekst som <Link>inneholder en lenke</Link>.
            </span>
            <Paragraph>
              color: #992F78
              <br />
              text-decoration: none
              <br />
              Border-bottom: 1px solid #992F78
              <br />
              hover color: #333333
            </Paragraph>

            <Heading size="h3" text="Liten tekst på en linje" />

            <Paragraph className="small">Dette er liten tekst</Paragraph>
            <Paragraph className="small">Font-size: 0.875rem</Paragraph>

            <Heading size="h3" text="Tekst og avsnitt over flere linjer" />
            <Paragraph>
              Line-height: 1.65rem
              <Paragraph>
                Here is the perfect system for cleaning your room. First, move
                all of the items that do not have a proper place to the center
                of the room. Get rid of at least five things that you have not
                used within the last year.
              </Paragraph>
            </Paragraph>
            <Heading size="h3" text="Liten tekst over flere linjer" />
            <Paragraph className="small">
              Font-size: 0.875rem
              <br />
              Line-height: 1.35rem
              <Paragraph className="small">
                Here is the perfect system for cleaning your room. First, move
                all of the items that do not have a proper place to the center
                of the room. Get rid of at least five things that you have not
                used within the last year.
              </Paragraph>
            </Paragraph>
          </TypeSwatch>
        </Col>
      </StyledRow>
    </Layout>
  );
};

export default Typography;
