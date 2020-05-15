import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import Layout from "../../../layout/Layout";

import { AccountCircle, Security } from "@material-ui/icons";

import FormContainer from "components/Form/Form";
import FormElement from "components/Form/FormElement";
import Input from "components/Form/Input/Input/Input";
import InputLabel from "components/Form/Input/InputLabel/InputLabel";
import InputSelect from "components/Form/Input/InputSelect/InputSelect";

import RadioButton from "components/Form/RadioButton/RadioButton";

import CheckBoxFancy, {
  CheckBoxGroup,
} from "components/Form/Checkbox/CheckBoxFancy";

import RadioButtonFancy, {
  RadioButtonGroup,
} from "components/Form/RadioButton/RadioButtonFancy";

import FormSearchBox from "components/Search/FormSearchBox/FormSearchBox";

import Link from "components/Link/Link";

import Heading from "components/Heading/Heading";
import palette from "constants/colors";
import Paragraph from "components/Paragraph/Paragraph";

const FormPage = () => {
  const [editContactInformation, useEditContactInformation] = useState(false);
  const DoEdit = () => {
    useEditContactInformation(!editContactInformation);
  };

  return (
    <Layout pageTitle="Forms and form elements">
      <Row>
        <Col lg={8}>
          <FormElement>
            <Heading size="h3" text="Checkboxes" />
            <Paragraph>
              Checkboxes bruker CheckBox og CheckBoxOutlineBlank fra Google
              Material Icons. Valgt checkbox er farget grønn med farge c400 fra{" "}
              <Link href="/palette">fargepaletten</Link>.
            </Paragraph>
            <Paragraph>Checkboxes kan vises vertikalt</Paragraph>
            {/* <Heading size="h4" text="Valgfri checkboxgroup label" compact /> */}
            <InputLabel text="Valgfri checkboxgroup label" />
            <CheckBoxGroup alignment="vertical">
              <CheckBoxFancy label="Valg 1" />
              <CheckBoxFancy label="Valg 2, valgt" checked />
              <CheckBoxFancy label="Valg 3, disabled" disabled />
              <CheckBoxFancy
                label="Valg 3, disabled and checked"
                disabled
                checked
              />
            </CheckBoxGroup>
            <Paragraph>Checkboxes kan også vises horisontalt</Paragraph>
            <InputLabel text="Valgfri checkboxgroup label" />
            <CheckBoxGroup alignment="horizontal">
              <CheckBoxFancy label="Valg 1" />
              <CheckBoxFancy label="Valg 2, checked" checked />
              <CheckBoxFancy label="Valg 3, disabled" disabled />
              <CheckBoxFancy
                label="Valg 3, disabled and checked"
                disabled
                checked
              />
            </CheckBoxGroup>
          </FormElement>
          <FormElement>
            <Heading size="h3" text="Radio button" />
            <Paragraph>
              Radiobuttons bruker RadioButtonChecked og
              RadioButtonUncheckedOutlined fra Google Material Icons. Valgt
              radiobutton er farget grønn med farge c400 fra{" "}
              <Link href="/palette">fargepaletten</Link>.
            </Paragraph>
            <InputLabel text="Valgfri radio group label" />

            <RadioButtonGroup alignment="vertical">
              <RadioButtonFancy label="Valg 1" />
              <RadioButtonFancy label="Valg 2, checked" checked />
              <RadioButtonFancy label="Valg 3, disabled" disabled />
              <RadioButtonFancy
                label="Valg 3, disabled and checked"
                disabled
                checked
              />
            </RadioButtonGroup>
            <Paragraph>Radiobuttons kan også vises horisontalt</Paragraph>

            <InputLabel text="Valgfri radio group label" />

            <RadioButtonGroup alignment="horizontal">
              <RadioButtonFancy label="Valg 1" />
              <RadioButtonFancy label="Valg 2, checked" checked />
              <RadioButtonFancy label="Valg 3, disabled" disabled />
              <RadioButtonFancy
                label="Valg 3, disabled and checked"
                disabled
                checked
              />
            </RadioButtonGroup>
          </FormElement>
          <Heading size="h3" text="Søkeboks" />
          <FormElement>
            <FormSearchBox />
          </FormElement>
          <FormContainer>
            <Heading size="h3" text="Dropdown selection" />
            <FormElement>
              <InputSelect />
            </FormElement>
            <FormElement>
              <InputSelect
                label="Select with label"
                defaultValue="You must choose.."
                subtitle="And subtitle"
              />
            </FormElement>
            <Heading size="h3" text="Text input" />
            <FormElement>
              <Input placeholder="Input field without label" />
            </FormElement>
            <FormElement>
              <Input label="Input field with label" />
            </FormElement>
            <FormElement>
              <Input label="Input field with label and dropdown" hasDropDown />
            </FormElement>
            <FormElement>
              <Input
                label="Input field with label and subtitle"
                subtitle="subtitle"
              />
            </FormElement>
            <FormElement>
              <Input
                label="Input field with label and placeholder"
                placeholder="Placeholder text"
              />
            </FormElement>
            <FormElement>
              <Input
                value="Readonly value"
                label="Readonly input field"
                readOnly
              />
            </FormElement>
            <FormElement>
              <Input label="Label" value="Mandatory input field" mandatory />
            </FormElement>
            <FormElement>
              <Input
                label="Input field with validation error"
                subtitle="Validation error"
                required
                validationError
              />
            </FormElement>
          </FormContainer>
        </Col>
        <Col lg={6}></Col>
      </Row>
    </Layout>
  );
};

export default FormPage;
