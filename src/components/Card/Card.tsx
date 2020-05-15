// TODO: fiks hvordan card link rendres, se generic app homepage

import React from "react";
import styled from "styled-components";
import palette from "constants/colors";
import Heading from "components/Heading/Heading";

import Button from "components/Button/Button";

import { ArrowForward } from "@material-ui/icons";

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  navigateTo?: string;
  buttonLabel?: string;
  noButton?: boolean;
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${palette.c000};
  box-shadow: 0 1px 3px ${palette.c120}, 0 1px 2px ${palette.c130};
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  &:hover {
    box-shadow: 0 1px 3px ${palette.c110}, 0 1px 2px ${palette.c100};
  }
`;
const ChildrenContentContainer = styled.div`
  padding: 1rem 0;
`;

const Description = styled.p`
  flex-grow: 1;
`;
const BottomButtonContainer = styled.span`
  align-self: flex-end;
`;

const Card = (props: CardProps) => {
  return (
    <StyledCard>
      <Heading size="h2" text={props.title} compact />
      {props.description && <Description>{props.description}</Description>}

      {props.children && (
        <ChildrenContentContainer>{props.children} </ChildrenContentContainer>
      )}
      <BottomButtonContainer>
        {props.noButton || (
          <Button
            buttonType="tertiary"
            label={props.buttonLabel || "Navigation label"}
            rightIcon={<ArrowForward />}
          />
        )}
      </BottomButtonContainer>
    </StyledCard>
  );
};

export default Card;
