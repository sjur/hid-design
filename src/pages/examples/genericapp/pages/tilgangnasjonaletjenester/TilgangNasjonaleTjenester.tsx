import React, { useState } from "react";
import styled from "styled-components";
import Layout from "layout/genericapp/GenericAppLayout";
import Hjelp from "./Hjelp";
import HjelpModal from "./HjelpModal";
import HjelpModal2 from "./HjelpModal2";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";
import Heading from "components/Heading/Heading";
import TableA from "components/Table/TableA/TableA";
import Modal from "components/Modal/Modal";

import NyTilgangWizard from "./NyTilgangWizard";
import LeggTilFjernEnhet from "./LeggTilFjernEnhet";
import RightPanel from "components/RightPanel/RightPanel";
import Paragraph from "components/Paragraph/Paragraph";

const data = [
  {
    column1: "Klientsystem",
    column2: "Tjenester",
    column3: "Enheter",
    rowSubtitleIsLink: false,
    expandable: true,
  },
  {
    column1: "Gerica",
    column2: "Kjernejournal",
    column3: "998 816 989 Nesttun Dagsenter;995 816 970 Sandviken Dagsenter",
    columnSubtitle: "åpen",
    linkTo: "#",
    open: true,
  },
  {
    column1: "Cosdoc",
    column2: "Kjernejournal",
    column3:
      "998 816 989 Landås Eldresenter;995 816 970 Nesttun Helsehus;995 816 970 Sandviken Legevakt;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter;995 816 970 Sandviken Dagsenter",
    columnSubtitle: "åpen",
    linkTo: "#",
    open: true,
  },
  {
    column1: "Visma",
    column2: "Kjernejournal",
    column3: "998 816 989 Nesttun Dagsenter;995 816 970 Sandviken Dagsenter",
    columnSubtitle: "åpen",
    linkTo: "#",
    open: false,
  },
];

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  > * {
    margin-right: 1rem;
  }
`;
const ButtonLink = styled(Link)`
  border-bottom: none;
`;

const TilgangNasjonaleTjenester = () => {
  const [showModal, useShowModal] = useState(false);
  const [showChangeUnitsModal, useShowChangeUnitsModal] = useState(false);

  const HandleClickShowModal = (show: boolean) => {
    useShowModal(show);
  };
  const HandleClickShowChangeUnitsModal = (show: boolean) => {
    useShowChangeUnitsModal(show);
  };
  return (
    <Layout pageTitle="Konfigurer tilgang til nasjonale e-helse tjenester">
      {showModal && (
        <Modal
          pageTitle="Ny aktivering"
          hideModal={() => HandleClickShowModal(false)}
        >
          <NyTilgangWizard />
        </Modal>
      )}
      {showChangeUnitsModal && (
        <Modal
          pageTitle="Legg til eller fjern enheter"
          hideModal={() => HandleClickShowChangeUnitsModal(false)}
        >
          <LeggTilFjernEnhet />
        </Modal>
      )}
      <HeaderRow>
        <Heading size="h2" text="Aktiveringer" />
        <Button
          label="Ny aktivering"
          icon={<Add />}
          buttonType="tertiary"
          onClick={() => HandleClickShowModal(true)}
        />
      </HeaderRow>

      <TableA
        data={data}
        rowLayout="A"
        openModal={() => HandleClickShowChangeUnitsModal(true)}
      />
      <RightPanel title="Konfigurere tilgang til nasjonale tjenester">
        {showModal && <HjelpModal />}
        {showChangeUnitsModal && <HjelpModal2 />}
        {!showChangeUnitsModal && !showModal && <Hjelp />}
      </RightPanel>
    </Layout>
  );
};

export default TilgangNasjonaleTjenester;
