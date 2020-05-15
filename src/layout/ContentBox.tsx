import React from "react";
import styled from "styled-components";
import palette from "../constants/colors";

interface ContentBoxProps {
  children?: React.ReactNode;
  noContentBox?: boolean;
}

const StyledContentBox = styled("div")`
  width: 100%;
  padding: 0.5rem 0;
`;

const ContentBox = (props: ContentBoxProps) => {
  return props.noContentBox ? (
    <>{props.children}</>
  ) : (
    <StyledContentBox>{props.children}</StyledContentBox>
  );
};

export default ContentBox;
