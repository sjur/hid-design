import React from "react";
import Layout from "layout/Layout";

import Tag from "components/Tag/Tag";
import Paragraph from "components/Paragraph/Paragraph";
import Heading from "components/Heading/Heading";
import Link from "components/Link/Link";

const data1 = [
  {
    column1: "Kolonne 1",
    column2: "Kolonne 2",
    column3: "Kolonne 3",
    rowSubtitleIsLink: false,
    expandable: true,
  },
  {
    column1: "Table row expands on click",
    column2: "Kolonne 2",
    column3: "Content can be on a single line",
    columnSubtitle: null,
    linkTo: "#",
    open: true,
  },
  {
    column1: "Kolonne 1",
    column2: "Kolonne 2",
    column3:
      "Content may span multiple lines, for example to list multiple options or entities, or to accomodate a paragraph of text",
    columnSubtitle: "subtitle is optional and can be text or link",
    linkTo: "#",
    open: true,
  },
];
const data2 = [
  {
    column1: "Kolonne 1",
    column2: "Kolonne 2",
    column3: "Kolonne 3",
    rowSubtitleIsLink: true,
    expandable: false,
  },
  {
    column1: "Table row does not expand",
    column2: "Kolonne 2",
    column3: "Content can be on a single line",
    columnSubtitle: null,
    linkTo: "#",
    open: true,
  },
  {
    column1: "Click may navigate to detail page",
    column2: "Kolonne 2",
    column3:
      "Content may span multiple lines, for example to list multiple options or entities, or to accomodate a paragraph of text",
    columnSubtitle: "subtitle is optional and can be text or link",
    linkTo: "#",
    open: true,
  },
];

const TagPage = () => {
  return (
    <Layout pageTitle="Tag">
      <Paragraph>
        En tag kan brukes for å utheve readonly-informasjon f.eks. i en tabell
        eller liste. En tag kan ha alle farger fra{" "}
        <Link href="/palette">fargepaletten</Link> så lenge lesbarhet er
        ivaretatt.
      </Paragraph>
      <Paragraph>
        <Tag open={true} label="Eksempel 1" />
        <Tag open={false} label="Eksempel 2" />
      </Paragraph>
      <Paragraph>
        <Heading size="h2" text="Eksempel på bruk" />
        Brukes i tabell med aktiveringer i <br />
        <Link href="/tilgangnasjonale">
          Konfigurer tilgang til nasjonale e-helse tjenester
        </Link>
        .
      </Paragraph>
    </Layout>
  );
};

export default TagPage;
