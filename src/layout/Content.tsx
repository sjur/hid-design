import React from "react";
import styled from "styled-components";
import ContentBox from "./ContentBox";
import Heading from "components/Heading/Heading";
import BackLink from "components/BackLink/BackLink";

interface ContentProps {
  children?: React.ReactNode;
  pageTitle?: string;
  noContentBox?: boolean;
  backLinkTo?: string;
  backLinkLabel?: string;
}
const BackLinkContainer = styled.div`
  margin-right: 1rem;
`;
const HeaderContainer = styled.div`
  padding-top: 1rem;
  display: flex;
`;

const Content = (props: ContentProps) => {
  return (
    <>
      {props.backLinkTo && (
        <BackLinkContainer>
          {props.backLinkTo && (
            <BackLink
              withArrow
              to={props.backLinkTo}
              label={props.backLinkLabel}
            />
          )}
        </BackLinkContainer>
      )}
      <HeaderContainer>
        <Heading text={props.pageTitle} />
      </HeaderContainer>
      <ContentBox noContentBox={props.noContentBox}>
        {props.children}
      </ContentBox>
    </>
  );
};

export default Content;
