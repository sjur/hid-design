import React from "react";
import styled from "styled-components";
import Layout from "layout/Layout";
import Card from "components/Card/Card";
import { Row, Col } from "react-flexbox-grid";
import TypeSwatch from "../../typography/TypeSwatch";

import {
  AirplanemodeActive,
  ArrowForward,
  ArrowDownward,
  ArrowBack,
  ArrowDropDown,
  ExpandMore,
  Info,
  Alarm,
} from "@material-ui/icons";

import Button from "components/Button/Button";

const ButtonGroup = styled.div`
  /* display: flex; */
  align-items: center;
  > * {
    margin: 1rem;
  }
`;

const ButtonPage = () => {
  return (
    <Layout pageTitle="Knapp">
      <Row>
        <Col lg={4}>
          <TypeSwatch>
            <h3>Primary</h3>
            <ButtonGroup>
              <Button label="primary" buttonType="primary" />
              <Button
                label="primary with icon right"
                buttonType="primary"
                // icon={<ArrowForward />}
                rightIcon={<ArrowForward />}
              />
              <Button
                label="primary with icon left"
                buttonType="primary"
                icon={<ArrowBack htmlColor="#ff0000" />}
              />
              <Button
                label="primary with two icons"
                buttonType="primary"
                icon={<Alarm />}
                rightIcon={<ArrowForward />}
              />
              <Button label="primary small" buttonType="primary" small />
            </ButtonGroup>
          </TypeSwatch>
        </Col>
        <Col lg={4}>
          <TypeSwatch>
            <h3>Secondary</h3>
            <ButtonGroup>
              <Button label="secondary" buttonType="secondary" />

              <Button
                label="secondary with icon right"
                buttonType="secondary"
                rightIcon={<ArrowForward />}
              />
              <Button
                label="secondary with icon left"
                buttonType="secondary"
                icon={<ArrowBack />}
              />

              <Button
                label="secondary with two icons"
                buttonType="secondary"
                icon={<Alarm />}
                rightIcon={<ArrowForward />}
              />

              <Button label="secondary small" buttonType="secondary" small />
            </ButtonGroup>
          </TypeSwatch>
        </Col>
        <Col lg={4}>
          <TypeSwatch>
            <h3>Tertiæry</h3>
            <ButtonGroup>
              <Button label="tertiary" buttonType="tertiary" />

              <Button
                label="tertiary with icon right"
                buttonType="tertiary"
                rightIcon={<ArrowForward />}
              />
              <Button
                label="tertiary with icon left"
                buttonType="tertiary"
                icon={<ArrowBack />}
              />

              <Button
                label="tertiary with two icons"
                buttonType="tertiary"
                icon={<Alarm />}
                rightIcon={<ArrowForward />}
              />

              <Button label="tertiary small" buttonType="tertiary" small />
            </ButtonGroup>
          </TypeSwatch>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <TypeSwatch>
            <h3>Warning</h3>
            <ButtonGroup>
              <Button label="warning" buttonType="warning" />

              <Button
                label="warning with icon right"
                buttonType="warning"
                rightIcon={<ArrowForward />}
              />
              <Button
                label="warning with icon left"
                buttonType="warning"
                icon={<ArrowBack />}
              />

              <Button
                label="warning"
                buttonType="warning"
                icon={<Alarm />}
                rightIcon={<ArrowForward />}
              />

              <Button label="warning small" buttonType="warning" small />
            </ButtonGroup>
          </TypeSwatch>
        </Col>
        <Col lg={4}>
          <TypeSwatch>
            <h3>Disabled</h3>
            <ButtonGroup>
              <Button label="disabled" buttonType="disabled" />

              <Button
                label="disabled"
                buttonType="disabled"
                icon={<ArrowBack />}
              />

              <Button
                label="disabled"
                buttonType="disabled"
                rightIcon={<ArrowForward />}
              />

              <Button
                label="disabled"
                buttonType="disabled"
                icon={<Alarm />}
                rightIcon={<ArrowForward />}
              />

              <Button label="disabled small" buttonType="disabled" small />
            </ButtonGroup>
          </TypeSwatch>
        </Col>
      </Row>
    </Layout>
  );
};

export default ButtonPage;
