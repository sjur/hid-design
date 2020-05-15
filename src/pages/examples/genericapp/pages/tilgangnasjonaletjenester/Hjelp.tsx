import React from "react";
import Paragraph from "components/Paragraph/Paragraph";

const Hjelp = () => {
  return (
    <>
      <Paragraph>
        Denne siden håndterer selvbetjeningsløsning for å konfigurere tilgang
        til nasjonale e-helse tjenester. Interaksjonsdesignet for denne
        tjenesten er endret fra gjeldende (13.5.2020) TAKT MVP
        selvbetjeningsløsning.
      </Paragraph>
      <Paragraph>
        Hovedideen bak dette designet er at det er relativt få valg bruker
        trenger å gjøre for å opprette eller endre en aktivering. Jeg har derfor
        prøvd å samle all informasjon om aktiveringer i ett bilde, uten å måtte
        gå igjennom flere skjermbilder i en wizard.
      </Paragraph>
      <Paragraph>
        I dette designet er det også mulig for bruker å raskt se all informasjon
        om en aktivering uten å gå til en detaljside.
      </Paragraph>
      <Paragraph>
        Alle aktiveringer listes i en tabell med informasjon i kolonne 1 om
        hvilket EPJ-system det gjelder, kolonne 2 viser hvilke tjenester som
        gjelder for den aktiveringen, og kolonne 3 viser hvilke enheter
        aktiveringen gjelder for.
        <br />
        Bruker kan også enkelt se i kolonne 1 om aktiveringen er sperret
        ettersom klientsystemet vises som en rød tag for sperrede aktiveringer,
        etterfulgt av ordet "sperret".
      </Paragraph>
      <Paragraph>
        Ved å klikke på en rad får bruker tilgang til mer informasjon om
        aktiveringen, og mulighet til å laste ned konfigurasjon, endre
        klientsystem, endre tjeneste, legge til eller fjerne enheter. Bruken kan
        også velge å sperre eller slette aktiveringen.
      </Paragraph>
    </>
  );
};

export default Hjelp;
