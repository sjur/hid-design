import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { KeyboardBackspace } from "@material-ui/icons";
import Button from "components/Button/Button";

interface BackLinkProps {
  label?: string;
  withArrow?: boolean;
  to: string;
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: none;
`;

const BackLink = (props: BackLinkProps) => {
  return (
    <StyledNavLink to={props.to}>
      <Button
        buttonType="tertiary"
        icon={props.withArrow ? <KeyboardBackspace /> : <></>}
        label={props.label ? props.label : "Tilbake"}
        small
      />
    </StyledNavLink>
  );
};

export default BackLink;
