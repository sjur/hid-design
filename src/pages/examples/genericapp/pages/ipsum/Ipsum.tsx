import React, { useState } from "react";
import styled from "styled-components";
import Layout from "layout/genericapp/GenericAppLayout";

const Ipsum = () => {
  const [testState, useTestState] = useState("alpha");
  const Placeholder = () => {
    useTestState("beta");
    console.log("jgfkld");
  };
  return (
    <Layout pageTitle={testState}>
      <div onClick={Placeholder}>text</div>
    </Layout>
  );
};

export default Ipsum;
