import React, { useState } from "react";
import styled from "styled-components";

import { Row, Col } from "react-flexbox-grid";
import Layout from "layout/genericapp/GenericAppLayout";
// import Layout from "layout/genericapp/ModalLayout";
import TableA from "components/Table/TableA/TableA";
import Segment from "components/Segment/Segment";
import palette from "constants/colors";
import Button from "components/Button/Button";
import { Add } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import AddEnhet from "pages/examples/genericapp/pages/apiadmin/addenhet/AddEnhet";
import TabNavigation from "components/Navigation/TabNavigation/TabNavigation";
import Modal from "components/Modal/Modal";
import RightPanel from "components/RightPanel/RightPanel";
import Hjelp from "./Hjelp";
import HjelpModal from "./HjelpModal";

interface Props {
  apiName?: string;
  //   children?: React.ReactNode;
}

const data = [
  {
    column1: "Enhet",
    column2: "Klientsystemer",
    column3: "Scope",
    rowSubtitleIsLink: false,
    expandable: true,
  },
  {
    column1: "Asker kommune",
    column2: "Gerica, Cosdoc",
    column3: "Scope 1",
    columnSubtitle: "988 456 123",
    linkTo: "#",
  },
  {
    column1: "Bærum kommune",
    column2: "alle klientsystemer",
    column3: "alle scope",
    columnSubtitle: "977 666 554",
    linkTo: "#",
  },
];
const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 1rem;
  }
`;

const TableHeaderRow = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
const StyledNavLink = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 0.5rem;
  }
`;

const ApiDetails2 = (props: Props) => {
  const [showModal, useShowModal] = useState(false);
  const HandleClickShowModal = (show: boolean) => {
    useShowModal(show);
  };
  return (
    <Layout pageTitle="Kjernejournal API" backLinkTo="/apiadmin">
      {showModal && (
        <Modal
          pageTitle="Legg til enhet"
          hideModal={() => HandleClickShowModal(false)}
        >
          <AddEnhet />
        </Modal>
      )}

      <Row>
        <Col lg={12}>
          <TabNavigation
            items={[
              "enheter med tilgang",
              "detaljer",
              "tilgangskontroll",
              "varslinger",
            ]}
          />
          <Segment vSpace="2rem">
            <TableHeaderRow>
              <h3>Provisjonerte enheter (kommuner)</h3>
              <div onClick={() => HandleClickShowModal(true)}>
                <Button
                  buttonType="tertiary"
                  label="Legg til enheter"
                  icon={<Add />}
                />
              </div>
            </TableHeaderRow>
            <TableA data={data} />
          </Segment>
        </Col>
      </Row>
      <RightPanel title="Api enheter hjelp">
        {showModal ? <HjelpModal /> : <Hjelp />}
      </RightPanel>
    </Layout>
  );
};

export default ApiDetails2;
