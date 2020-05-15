import React, { useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import Form from "components/Form/Form";
import FormElement from "components/Form/FormElement";
import Input from "components/Form/Input/Input/Input";
import RadioButton, {
  RadioButtonGroup,
} from "components/Form/RadioButton/RadioButtonFancy";
import Button, { ButtonGroup } from "components/Button/Button";

const AddApiForm = () => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <Form>
            <FormElement>
              <Input label="API Navn" />
            </FormElement>
            <FormElement>
              <Input label="Adresse" />
            </FormElement>
            <FormElement>
              <Input type="textarea" label="Beskrivelse" />
            </FormElement>
            <FormElement title="Synlighet">
              <RadioButtonGroup alignment="vertical">
                <RadioButton label="Internt" name="synlighet" />
                <RadioButton label="Offentlig" name="synlighet" />
              </RadioButtonGroup>
            </FormElement>
            <FormElement title="Tilgjengelighet">
              <RadioButtonGroup alignment="vertical">
                <RadioButton label="Begrenset" name="tilgjengelighet" />
                <RadioButton label="Åpent" name="tilgjengelighet" />
              </RadioButtonGroup>
            </FormElement>
          </Form>
        </Col>
        <Col lg={3}>
          <FormElement>
            <Input label="Kortnavn" readOnly />
          </FormElement>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ButtonGroup>
            <Button label="Lagre" />
            <Button label="Avbryt" buttonType="tertiary" />
          </ButtonGroup>
        </Col>
      </Row>
    </>
  );
};

export default AddApiForm;
