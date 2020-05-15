import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import Input from "components/Form/Input/Input/Input";
import Button, { ButtonGroup } from "components/Button/Button";
import { Row, Col } from "react-flexbox-grid";
import FormElement from "components/Form/FormElement";
import Heading from "components/Heading/Heading";
import Segment from "components/Segment/Segment";
import palette from "constants/helseidColors";
import typography from "constants/typography";
import Paragraph from "components/Paragraph/Paragraph";
import {
  Add,
  Remove,
  CheckBox,
  CheckBoxOutlineBlank,
  RadioButtonChecked,
  RadioButtonUncheckedOutlined,
  Autorenew,
  Close,
  ArrowRight,
  ArrowLeft,
  ArrowForward,
} from "@material-ui/icons";

const StyledRow = styled(Row)`
  padding: 0.5rem 0;
  font-size: ${typography.body.small};
`;
const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;
const UnitStyledCol = styled(Col)`
  display: flex;
  align-items: center;
  /* padding: 1rem 0; */
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 0;
  > span {
    margin-left: 0.25rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const SubTitle = styled.span`
  font-size: ${typography.body.small};
  margin-right: 1rem;
`;

const KonfigurerNyTilgang = () => {
  const [showSearchResults, useShowSearchResults] = useState(false);
  const [showSelectedResults, useShowSelectedResults] = useState(false);
  const [showSelected2Results, useShowSelected2Results] = useState(false);

  const UnitRow = styled.div`
    display: ${showSearchResults ? "block" : "none"};
    align-items: center;
    padding: 0.5rem;
    border-bottom: 1px solid ${palette.c120};
    &.selected1 {
      display: ${showSelectedResults ? "block" : "none"};
    }
    &.selected2 {
      display: ${showSelected2Results ? "block" : "none"};
    }
    &.search1 {
      background: ${showSelectedResults ? `${palette.c199}` : "none"};
    }
    &.search2 {
      background: ${showSelected2Results ? `${palette.c199}` : "none"};
    }
  `;
  const HandleClick = (e: ChangeEvent<HTMLInputElement>) => {
    useShowSearchResults(e.target.value.length > 2);
  };
  const HandleClickShowSelected = (show: boolean) => {
    useShowSelectedResults(show);
  };
  const HandleClickShow2Selected = (show: boolean) => {
    useShowSelected2Results(show);
  };
  return (
    <Row>
      <Col lg={4}>
        <Segment bgColor={palette.c000} hSpace="0">
          <Heading size="h4" text="Søk etter enhet" compact />
          <StyledRow>
            <Col lg={12}>
              <Input
                placeholder="Søk etter navn eller org. nr."
                onChange={HandleClick}
              />
            </Col>
          </StyledRow>
          <Row>
            <Col lg={12}>
              <UnitRow className="search1">
                <Row>
                  <UnitStyledCol lg={8}>
                    <div>
                      Kongsberg kommune hjemmetjenesten hvittingfoss
                      <Row>
                        <Col lg={12}>
                          <SubTitle>990 888 777</SubTitle>
                          <SubTitle>3647 Hvittingfoss</SubTitle>
                        </Col>
                      </Row>
                    </div>
                  </UnitStyledCol>
                  <UnitStyledCol lg={4}>
                    <ButtonContainer>
                      {showSelectedResults ? (
                        "Valgt"
                      ) : (
                        <Button
                          buttonType="tertiary"
                          small
                          label="Velg"
                          rightIcon={<ArrowForward />}
                          onClick={() => HandleClickShowSelected(true)}
                        />
                      )}
                    </ButtonContainer>
                  </UnitStyledCol>
                </Row>
              </UnitRow>
              <UnitRow className="search2">
                <Row>
                  <UnitStyledCol lg={8}>
                    <div>
                      Kongsberg kommune Brennerigata omsorgsbolig
                      <Row>
                        <Col lg={12}>
                          <SubTitle>995 186 896</SubTitle>
                          <SubTitle>3617 Kongsberg</SubTitle>
                        </Col>
                      </Row>
                    </div>
                  </UnitStyledCol>
                  <UnitStyledCol lg={4}>
                    <ButtonContainer>
                      {showSelected2Results ? (
                        "Valgt"
                      ) : (
                        <Button
                          buttonType="tertiary"
                          small
                          label="Velg"
                          rightIcon={<ArrowForward />}
                          onClick={() => HandleClickShow2Selected(true)}
                        />
                      )}
                    </ButtonContainer>
                  </UnitStyledCol>
                </Row>
              </UnitRow>
            </Col>
          </Row>
        </Segment>
      </Col>
      <Col lg={6}>
        <Segment bgColor={palette.c199} vSpace="0.5rem" hSpace="1rem">
          <Row>
            <StyledCol lg={6}>
              <Heading size="h2" text="Aktiveringsvalg" compact />
            </StyledCol>
            <StyledCol lg={6}>
              {/* <ButtonContainer> */}
              <ButtonGroup>
                <Button
                  label="Legg til aktivering"
                  small
                  buttonType={
                    showSelectedResults || showSelected2Results
                      ? "primary"
                      : "disabled"
                  }
                />
                <Button buttonType="tertiary" label="Avbryt" small />
              </ButtonGroup>
              {/* </ButtonContainer> */}
            </StyledCol>
          </Row>
          <Segment vSpace="1rem">
            <Heading size="h3" text="Velg klientsystem" compact />
            {/* <StyledCol lg={4}>Klientsystem</StyledCol> */}
            <StyledCol lg={12}>
              <OptionWrapper>
                <RadioButtonChecked fontSize="small" />
                <span>Cosdoc</span>
              </OptionWrapper>
              <OptionWrapper>
                <RadioButtonUncheckedOutlined fontSize="small" />
                <span>Visma</span>
              </OptionWrapper>
              <OptionWrapper>
                <RadioButtonUncheckedOutlined fontSize="small" />
                <span>Gerica</span>
              </OptionWrapper>
            </StyledCol>
          </Segment>
          <Segment>
            <Heading size="h3" text="Velg tjeneste" compact />
            <StyledCol lg={12}>
              <OptionWrapper>
                <CheckBox fontSize="small" />
                <span>Kjernejournal</span>
              </OptionWrapper>
              <OptionWrapper>
                <CheckBoxOutlineBlank fontSize="small" />
                <span>Dødsmelding</span>
              </OptionWrapper>
              <OptionWrapper>
                <CheckBoxOutlineBlank fontSize="small" />
                <span>SFM</span>
              </OptionWrapper>
            </StyledCol>
          </Segment>
          <Segment vSpace="1rem">
            <Heading size="h3" text="Valgte enheter" compact />
            <Row>
              <Col lg={12}>
                <UnitRow className="selected1">
                  <Row>
                    <UnitStyledCol lg={8}>
                      <div>
                        Kongsberg kommune hjemmetjenesten hvittingfoss
                        <Row>
                          <Col lg={12}>
                            <SubTitle>990 888 777</SubTitle>
                            <SubTitle>3647 Hvittingfoss</SubTitle>
                          </Col>
                        </Row>
                      </div>
                    </UnitStyledCol>
                    <UnitStyledCol lg={4}>
                      <ButtonContainer>
                        <Button
                          buttonType="tertiary"
                          small
                          label="Fjern"
                          onClick={() => HandleClickShowSelected(false)}
                        />
                      </ButtonContainer>
                    </UnitStyledCol>
                  </Row>
                </UnitRow>
                <UnitRow className="selected2">
                  <Row>
                    <UnitStyledCol lg={8}>
                      <div>
                        Kongsberg kommune Brennerigata omsorgsbolig
                        <Row>
                          <Col lg={12}>
                            <SubTitle>995 186 896</SubTitle>
                            <SubTitle>3617 Kongsberg</SubTitle>
                          </Col>
                        </Row>
                      </div>
                    </UnitStyledCol>
                    <UnitStyledCol lg={4}>
                      <ButtonContainer>
                        <Button
                          buttonType="tertiary"
                          small
                          label="Fjern"
                          onClick={() => HandleClickShow2Selected(false)}
                        />
                      </ButtonContainer>
                    </UnitStyledCol>
                  </Row>
                </UnitRow>
              </Col>
            </Row>
          </Segment>
        </Segment>
      </Col>
      <Col lg={2}>
        <Segment vSpace="1rem" hSpace="1rem">
          <Heading size="h4" text="Kontaktinformasjon" compact />
          <StyledRow>
            <Col lg={12}>
              Navn
              <br />
              Finn Roen
            </Col>
          </StyledRow>
          <StyledRow>
            <Col lg={12}>
              E-post
              <br />
              finn.roen@kommune.no
            </Col>
          </StyledRow>
          <StyledRow>
            <Col lg={12}>
              Telefon
              <br />
              987 65 432
            </Col>
          </StyledRow>
          <StyledRow>
            <Col lg={12}>
              E-post for varsling
              <br />
              admin@kommune.no
            </Col>
          </StyledRow>
          <Paragraph className="small">
            <a href="#">Rediger kontaktinfo</a>
          </Paragraph>
        </Segment>
      </Col>
    </Row>
  );
};

export default KonfigurerNyTilgang;
