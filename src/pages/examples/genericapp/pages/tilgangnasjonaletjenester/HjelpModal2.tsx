import React from "react";
import Paragraph from "components/Paragraph/Paragraph";

const Hjelp = () => {
  return (
    <>
      <Paragraph>
        Denne modalen er en forenklet versjon av "ny aktivering". Den lar bruke
        legge til eller fjerne enheter fra en allerede konfigurert aktivering.
      </Paragraph>
      <Paragraph>
        Når endringer er gjort, kan bruker klikke "OK, lagre endringer" for å
        oppdatere listen med enheter.
      </Paragraph>
    </>
  );
};

export default Hjelp;
