import React from "react";
import Paragraph from "components/Paragraph/Paragraph";

const Hjelp = () => {
  return (
    <>
      <Paragraph>
        Denne siden viser detaljer for valgt API. Den første fanen lister
        enheter med tilgang. For hver enhet med tilgang kan bruker klikke
        tabellraden og se/endre detaljer som tillatte klientsystemer og tillatte
        scope.
      </Paragraph>
      <Paragraph>
        Bruker kan klikke på "Legg til enhet" for å legge til og konfigurere
        flere enheter.
      </Paragraph>
      <Paragraph>
        Fanene for "tilgangskontroll" og "varslinger" er ikke ferdig designet.
      </Paragraph>
    </>
  );
};

export default Hjelp;
