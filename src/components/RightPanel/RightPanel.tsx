import React from "react";
import styled from "styled-components";
import { InfoOutlined } from "@material-ui/icons";
import { Grid, Row, Col } from "react-flexbox-grid";

interface Props {
  title?: string;
  children?: any;
}

const StyledRightPanel = styled.div`
  position: absolute;
  width: 30rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  top: 0;
  right: -30rem;
  bottom: 0;
  transition: right 0.5s;
  &:hover {
    right: 0;
  }
  padding: 1rem 2rem;
`;
const InfoPeek = styled.div`
  position: absolute;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  top: 10%;
  left: -1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background: yellow;
  display: flex;
  align-items: center;
`;

const RightPanel = (props: Props) => {
  return (
    <StyledRightPanel>
      <InfoPeek>
        <InfoOutlined />
      </InfoPeek>
      <Grid>
        <Row>
          <Col lg={12}>
            <h1>{props.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>{props.children}</Col>
        </Row>
      </Grid>
    </StyledRightPanel>
  );
};

export default RightPanel;
