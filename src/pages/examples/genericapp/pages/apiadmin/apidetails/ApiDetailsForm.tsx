import React, { useState } from "react";
import styled from "styled-components";
import Form from "components/Form/Form";
import FormElement from "components/Form/FormElement";
import Input from "components/Form/Input/Input/Input";
import RadioButton, {
  RadioButtonGroup,
} from "components/Form/RadioButton/RadioButtonFancy";
import Link from "components/Link/Link";
import Button from "components/Button/Button";

const ApiDetailsForm = () => {
  return (
    <Form>
      <FormElement>
        <Input label="API Navn" readOnly value="Kjernejournal API" />
      </FormElement>
      <FormElement>
        <Input label="Adresse" readOnly value="https://kj-api.ehelse.no/v2" />
      </FormElement>
      <FormElement>
        <Input type="textarea" label="Beskrivelse" readOnly />
      </FormElement>
      <FormElement title="Synlighet">
        <RadioButtonGroup alignment="vertical">
          <RadioButton label="Internt" name="synlighet" checked disabled />
          <RadioButton label="Offentlig" name="synlighet" disabled />
        </RadioButtonGroup>
      </FormElement>
      <FormElement title="Tilgjengelighet">
        <RadioButtonGroup alignment="vertical">
          <RadioButton
            label="Begrenset"
            name="tilgjengelighet"
            checked
            disabled
          />
          <RadioButton label="Åpent" name="tilgjengelighet" disabled />
        </RadioButtonGroup>
      </FormElement>
      <Link>Rediger API-detaljer</Link>
    </Form>
  );
};

export default ApiDetailsForm;
