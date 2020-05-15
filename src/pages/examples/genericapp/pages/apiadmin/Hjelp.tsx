import React from "react";
import Paragraph from "components/Paragraph/Paragraph";

const Hjelp = () => {
  return (
    <>
      <Paragraph>
        Denne siden viser alle APIer som er gjort tilgjengelig av APIeier.
        Tabellen viser navn, gjeldende URL, synlighet, og tilgjengelighet.
      </Paragraph>
      <Paragraph>
        Bruker kan klikke på "Legg til API" for å konfigurere tilgang til et
        nytt API.
      </Paragraph>
      <Paragraph>
        Bruker kan klikke på et av APIene i tabellen for å konfigurere tilganger
        og detaljer for det APIet.
      </Paragraph>
    </>
  );
};

export default Hjelp;
