import React from "react";
import Paragraph from "components/Paragraph/Paragraph";

const Hjelp = () => {
  return (
    <>
      <Paragraph>
        I denne modalen kan bruker søke etter enheter. Når en enhet er valgt fra
        dropdown-listen legges den til i listen under. Bruker kan velge å gjøre
        ytterligere konfigurasjonsvalg for klientsystemer og scope, eller
        akseptere default valg.
      </Paragraph>
      <Paragraph>
        Ved å trykke "Fullfør og gi tilgang" legges enhetene til i listen over
        provisjonerte eneheter.
      </Paragraph>
      <Paragraph>
        Tast inn 3 tilfeldige tegn i søkefeltet for demo. Trykk X for å
        avslutte.
      </Paragraph>
    </>
  );
};

export default Hjelp;
