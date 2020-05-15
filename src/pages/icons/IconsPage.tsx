import React from "react";
import Layout from "layout/Layout";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";
import Link from "components/Link/Link";
import palette from "constants/helseidColors";
import {
  ArrowBack,
  ArrowUpward,
  ArrowForward,
  ArrowDownward,
} from "@material-ui/icons";

const IconGallery = styled.div`
  > svg {
    margin: 1rem;
  }
`;

const StyledArrowBack = styled(ArrowBack)`
  > * {
    fill: ${palette.c210};
  }
`;
const StyledArrowUpward = styled(ArrowUpward)`
  > * {
    fill: ${palette.c130};
  }
`;
const StyledArrowForward = styled(ArrowForward)`
  > * {
    fill: ${palette.c530};
  }
`;
const StyledArrowDownward = styled(ArrowDownward)`
  > * {
    fill: ${palette.c310};
  }
`;

const IconsPage = () => {
  return (
    <Layout pageTitle="Ikoner">
      <Paragraph>
        Alle ikoner er fra{" "}
        <Link href="https://material.io/resources/icons/?style=baseline">
          Google material design icons
        </Link>
        {". "}
        <br />
        Alle ikoner bruker "Filled"-theme
      </Paragraph>
      <Paragraph>
        <Heading size="h3" text="Ikoner standard størrelse" />
        <IconGallery>
          <ArrowBack />
          <ArrowUpward />
          <ArrowForward />
          <ArrowDownward />
        </IconGallery>
      </Paragraph>
      <Paragraph>
        <Heading size="h2" text="Ikoner liten størrelse" />
        <IconGallery>
          <ArrowBack fontSize="small" />
          <ArrowUpward fontSize="small" />
          <ArrowForward fontSize="small" />
          <ArrowDownward fontSize="small" />
        </IconGallery>
      </Paragraph>
      <Paragraph>
        <Heading size="h2" text="Ikoner stor størrelse" />
        <IconGallery>
          <ArrowBack fontSize="large" />
          <ArrowUpward fontSize="large" />
          <ArrowForward fontSize="large" />
          <ArrowDownward fontSize="large" />
        </IconGallery>
      </Paragraph>
      <Paragraph>
        <Heading size="h2" text="Ikoner med farge" />
        Ikoner er SVGs, og kan ha hvilken som helst farge fra{" "}
        <Link href="/palette">fargepaletten</Link>.
        <IconGallery>
          <StyledArrowBack fontSize="large" />
          <StyledArrowUpward fontSize="large" />
          <StyledArrowForward fontSize="large" />
          <StyledArrowDownward fontSize="large" />
        </IconGallery>
      </Paragraph>
    </Layout>
  );
};

export default IconsPage;
