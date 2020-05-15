import React, { useState } from "react";
import styled from "styled-components";
import Layout from "layout/genericapp/GenericAppLayout";
import Heading from "components/Heading/Heading";
import { Row, Col } from "react-flexbox-grid";
import TableA from "components/Table/TableA/TableA";
import Button from "components/Button/Button";
import { Add } from "@material-ui/icons";
import Modal from "components/Modal/Modal";
import AddApiForm from "./apidetails/AddApiForm";
import RightPanel from "components/RightPanel/RightPanel";
import Hjelp from "./Hjelp";
import HjelpModal from "./HjelpModal";

const data = [
  {
    column1: "API",
    column2: "Synlighet",
    column3: "Tilgjengelighet",
    rowSubtitleIsLink: true,
    expandable: false,
  },
  {
    column1: "Kjernejournal API",
    column2: "internt",
    column3: "begrenset",
    columnSubtitle: "https://kj-api.ehelse.no/v2",
    linkTo: "/apidetails-2",
  },
  {
    column1: "Adresseregister API",
    column2: "offentlig",
    column3: "åpent",
    columnSubtitle: "https://adressereg.ehelse.no/v1",
    linkTo: "#",
  },
  {
    column1: "Dødsfall API",
    column2: "offentlig",
    column3: "begrenset",
    columnSubtitle: "https://df.ehelse.no/v1",
    linkTo: "#",
  },
];

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const ApiAdmin = () => {
  const [showModal, useShowModal] = useState(false);
  const HandleClickShowModal = (show: boolean) => {
    useShowModal(show);
  };
  return (
    <Layout pageTitle="Administrere APIer og tilgang">
      {showModal && (
        <Modal
          pageTitle="Legg til API"
          hideModal={() => HandleClickShowModal(false)}
        >
          <AddApiForm />
        </Modal>
      )}

      <Row>
        <Col lg={12}>
          <HeaderRow>
            <Heading size="h2" text="Tilgjengelige APIer" />
            <Button
              buttonType="tertiary"
              label="Legg til API"
              icon={<Add />}
              onClick={() => HandleClickShowModal(true)}
            />
          </HeaderRow>

          <TableA data={data} />
        </Col>
      </Row>
      <RightPanel title="Administrere APIer">
        {showModal ? <HjelpModal /> : <Hjelp />}
      </RightPanel>
    </Layout>
  );
};

export default ApiAdmin;
