import React from "react";
import Paragraph from "components/Paragraph/Paragraph";

const Hjelp = () => {
  return (
    <>
      <Paragraph>
        Denne modalen erstatter TAKT MVP sin kofigurasjonswizard for nye
        aktiveringer. Bruker kan gjøre alle nødvendige valg her uten å måtte
        gå igjennom flere skjermbilder.
      </Paragraph>
      <Paragraph>
        Søkeboksen til høyre lar bruker søke etter enheter å legge til. Fra
        listen med søkeresultater kan bruker legge til enheter til listen i den
        grå boksen midt på skjermen som viser aktiveringsvalg. Under
        aktiveringsvalg kan bruker også velge klientsystem og tjeneste.
      </Paragraph>
      <Paragraph>
        Når bruker har gjort alle nødvendige valg kan han/hun trykke på "Legg
        til aktivering" for å fullføre konfigurasjonen.
      </Paragraph>
      <Paragraph>
        Brukers kontaktinformasjon vises til høyre i bildet.
      </Paragraph>
    </>
  );
};

export default Hjelp;
