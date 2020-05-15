import React from "react";
import styled from "styled-components";

import typography from "constants/typography";

interface Props {
  className?: string;
  children?: any;
}

const StyledParagraph = styled.p`
  font-size: ${typography.paragraph.fontsize};
  line-height: ${typography.paragraph["line-height"]};
  letter-spacing: ${typography.paragraph["letter-spacing"]};
  max-width: 30rem;
  font-weight: 400;
  &.bold {
    font-weight: 600;
  }
  &.small {
    font-size: ${typography.paragraph.small};
    line-height: ${typography.paragraph["line-height-small"]};
  }
`;

const Paragraph = (props: Props) => {
  return (
    <StyledParagraph className={props.className}>
      {props.children}
    </StyledParagraph>
  );
};

export default Paragraph;
