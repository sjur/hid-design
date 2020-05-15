import React, { ReactNode } from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import palette from "constants/helseidColors";
import typography from "constants/typography";
import { NavLink, Link } from "react-router-dom";
import Heading from "components/Heading/Heading";
import Button from "components/Button/Button";
import { Close } from "@material-ui/icons";

interface Props {
  hideModal: (x: boolean) => void;
  pageTitle?: string;
  children?: ReactNode;
}

const CloseModalCol = styled(Col)`
  display: flex;
  > * {
    margin-left: auto;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2rem 1.5rem;
  background-color: ${palette.c000};
`;

const Modal = (props: Props) => {
  return (
    <StyledModal>
      <Row>
        <Col sm={11}>
          <Heading size="h1" text={props.pageTitle} />
        </Col>

        <CloseModalCol sm={1}>
          <Close fontSize="large" onClick={() => props.hideModal(false)} />
        </CloseModalCol>
      </Row>
      <Row>
        <Col lg={12}>{props.children}</Col>
      </Row>
    </StyledModal>
  );
};
export default Modal;
