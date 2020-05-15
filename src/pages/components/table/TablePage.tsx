import React from "react";
import Layout from "layout/Layout";

import TableA from "components/Table/TableA/TableA";
import Segment from "components/Segment/Segment";
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

const TablePage = () => {
  return (
    <Layout pageTitle="Tabell">
      <Paragraph>
        En tabell inneholder vanligvis en overskriftsrad, og flere rader med
        innhold. En tabellrad kan ekspandere for å vise mer innhold og valg. En
        tabellrad kan også lede til en side med mer detaljer når man klikker på
        den.
        <br />
        Innholdet i en tabell-celle kan gå over flere linjer om nødvendig.
      </Paragraph>
      <Heading
        text="Tabell som ekspanderer for å vise flere detaljer"
        size="h2"
      />
      <Paragraph>
        Som hovedregel har en ekspanderende tabellrad et plusstegn til høyre og
        ingen hover-state. Klikker man på raden så åpnes den.
      </Paragraph>

      <Segment vSpace="1rem">
        <TableA data={data1}></TableA>
      </Segment>
      <Heading text="Ekspempel på bruk" size="h3" />
      <Paragraph>
        Brukes for å vise detaljer i{" "}
        <Link href="/apidetails-2"> tabellen over provisjonerte enheter</Link>{" "}
        for et API
      </Paragraph>
      <Heading text="Tabell som kan lede til detaljvisning" size="h2" />
      <Paragraph>
        En tabellrad som leder til detaljvisning har hover-state som viser at
        man navigerer til en ny side dersom man klikker på den.
      </Paragraph>
      <Segment vSpace="1rem">
        <TableA data={data2}></TableA>
      </Segment>
      <Heading text="Ekspempel på bruk" size="h3" />
      <Paragraph>
        Brukes i <Link href="/apiadmin">listen over tilgjengelige APIer</Link>.
      </Paragraph>
    </Layout>
  );
};

export default TablePage;
