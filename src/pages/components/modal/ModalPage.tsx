import React, { useState } from "react";
import styled from "styled-components";
import Layout from "layout/Layout";
import { Row, Col } from "react-flexbox-grid";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import Paragraph from "components/Paragraph/Paragraph";
import Heading from "components/Heading/Heading";
import Link from "components/Link/Link";

const ModalPage = () => {
  const [showModal, useShowModal] = useState(false);
  const HandleClick = (x: boolean) => {
    useShowModal(x);
  };
  return (
    <Layout pageTitle="Modal">
      <Row>
        <Col lg={12}>
          <Paragraph>
            En modal tar opp hele skjermbildet og kan brukes for informasjon og
            interaksjoner. Modalen lukkes vanligvis ved å klikke X øverst i
            høyre hjørne, eller ved at bruker avbryter interaksjonen.
          </Paragraph>
          {showModal && (
            <Modal pageTitle="Modal" hideModal={() => HandleClick(false)} />
          )}
          <div onClick={() => HandleClick(true)}>
            <Button label="Klikk for å vise modal" />{" "}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Heading text="Eksempel på bruk" size="h2" />
          <Paragraph>
            Brukes på{" "}
            <Link href="/tilgangnasjonale">
              Konfigurer tilgang til nasjonale e-helse tjenester
            </Link>{" "}
            når bruker velger å legge til ny aktivering.
          </Paragraph>
        </Col>
      </Row>
    </Layout>
  );
};

export default ModalPage;
