import React from "react";
import Layout from "layout/Layout";

import Link from "components/Link/Link";

const LinkPage = () => {
  return (
    <Layout pageTitle="Link">
      <h4>Link</h4>
      <p>
        Resultatet er et saftig og velsmakende rundstykke med god skorpe som er{" "}
        <Link>oppskrift som Grovt Speltbrød</Link>. Dette kan du bake i ovnen
        til kuene kommer hjem.
      </p>
      <h4>Link med dropdown</h4>
      <p>
        <Link>Min profil</Link>
      </p>
    </Layout>
  );
};

export default LinkPage;
