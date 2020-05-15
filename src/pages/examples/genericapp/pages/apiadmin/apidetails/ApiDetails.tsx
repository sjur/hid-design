import React, { useState } from "react";
import styled from "styled-components";

import ApiDetailsForm from "./ApiDetailsForm";

import { Row, Col } from "react-flexbox-grid";
import Layout from "layout/genericapp/GenericAppLayout";
import Segment from "components/Segment/Segment";
import palette from "constants/colors";
import { Add } from "@material-ui/icons";
import Link from "components/Link/Link";
import AddEnhet from "pages/examples/genericapp/pages/apiadmin/addenhet/AddEnhet";
import TabNavigation from "components/Navigation/TabNavigation/TabNavigation";
import Form from "components/Form/Form";
import FormElement from "components/Form/FormElement";
import Input from "components/Form/Input/Input/Input";
import RightPanel from "components/RightPanel/RightPanel";
import HjelpADPIDetaljer from "./HjelpAPIDetaljer";

interface Props {
  apiName?: string;
}

const TableHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledNavLink = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 0.5rem;
  }
`;
const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
`;
const ApiDetails = (props: Props) => {
  return (
    <Layout pageTitle="Kjernejournal API" backLinkTo="/apiadmin">
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
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Segment vSpace="2rem">
            <ApiDetailsForm />
          </Segment>
        </Col>
        <Col lg={6}>
          <Segment vSpace="2rem">
            <Form>
              <FormElement>
                <Input label="Kortnavn" readOnly value="kj-api" />
              </FormElement>
            </Form>
          </Segment>
        </Col>
      </Row>
      <RightPanel title="API detaljer">
        <HjelpADPIDetaljer />
      </RightPanel>
    </Layout>
  );
};

export default ApiDetails;
