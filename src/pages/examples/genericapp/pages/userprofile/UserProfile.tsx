import React from "react";
import styled from "styled-components";
import Layout from "layout/genericapp/GenericAppLayout";
import { Row, Col } from "react-flexbox-grid";
import Link from "components/Link/Link";
import { AccountCircle, Security } from "@material-ui/icons";
import Heading from "components/Heading/Heading";
import Form from "components/Form/Form";
import FormElement from "components/Form/FormElement";
import Input from "components/Form/Input/Input/Input";
import Segment from "components/Segment/Segment";
import palette from "constants/colors";

const UserProfile = () => {
  return (
    <Layout pageTitle="Din profil">
      <Row>
        <Col lg={6}>
          <Segment vSpace="1rem">
            <Heading
              size="h2"
              text="Personinformasjon"
              icon={<AccountCircle />}
            />
            <Form>
              <FormElement>
                <Input label="Navn" type="text" readOnly subtitle="Ditt navn" />
              </FormElement>
              <FormElement>
                <Input label="Telefon" type="text" readOnly />
              </FormElement>
              <FormElement>
                <Input label="E-post" type="text" readOnly />
              </FormElement>
              <a href="#">Rediger personinformasjon</a>
            </Form>
          </Segment>
          <Segment vSpace="1rem">
            <Heading
              size="h2"
              text="Rettigheter og tilganger"
              icon={<Security />}
            />
            <Heading size="h3" text="Administrere tilganger" />
            <Heading size="h4" text="Oslo kommune" />
            <ul>
              <li>Røa sykehjem</li>
              <li>St.Hanshaugen barnehage</li>
            </ul>
            <Heading size="h3" text="Administrere API-er" />
            <ul>
              <li>Helsehipster AS</li>
              <li>Freshe folk AS</li>
            </ul>
          </Segment>
        </Col>
      </Row>
    </Layout>
  );
};

export default UserProfile;
