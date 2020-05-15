import React from "react";
import styled from "styled-components";

const Banner = styled("div")`
  background-color: hotpink;
  width: 100%;
  min-height: 50px;
  color: yellow;
`;

interface BannerProps {
  message: string;
  type: string;
}

const StyledBanner = (props: BannerProps) => {
  return <Banner>{props.message}</Banner>;
};

export default StyledBanner;
