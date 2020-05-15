import React from "react";
import Layout from "layout/Layout";
import palette from "constants/helseidColors";
import styled from "styled-components";
import Heading from "components/Heading/Heading";
import Paragraph from "components/Paragraph/Paragraph";

import Swatch from "./Swatch";

const listColors = () => {
  var elements: Array<React.ReactFragment> = [];
  const entries = Object.entries(palette);

  entries.forEach((element) => {
    if (element[0].substring(0, 1) === "g") {
      elements.push(<Heading size="h3" text={element[1]} />);
    } else {
      elements.push(
        <Swatch color={element[1]} name={element[0] + " " + element[1]} />
      );
    }
  });
  return elements;
};

const createSwatches = (colors: Array<string>) => {
  var swatches: Array<React.ReactFragment> = [];
  colors.forEach((color) => {
    swatches.push(<Swatch color={color} name={color} />);
  });
  return swatches;
};

const createPalette = (baseValue: string, swatches: number) => {
  var colors: string[] = [];
  colors[0] = baseValue;
  // prettier-ignore
  var tintFactor = (100 / swatches) / 100;
  for (let i = 1; i < swatches; i++) {
    colors[i] = makeColor(colors[0], tintFactor * i);
  }
  colors = colors.map((i) => "#" + i);
  return colors;
};

const makeColor = (baseValue: string, tintAmount: number) => {
  var r = parseInt(baseValue.substring(0, 2), 16);
  var g = parseInt(baseValue.substring(2, 4), 16);
  var b = parseInt(baseValue.substring(4, 6), 16);
  // console.log(r, g, b);
  // prettier-ignore
  r = Math.floor(r + ((255 - r) * tintAmount));
  // prettier-ignore
  g = Math.floor(g + ((255 - g) * tintAmount));
  // prettier-ignore
  b = Math.floor(b + ((255 - b) * tintAmount));

  // console.log(r, g, b);

  if (b > 255) {
    var carryOver = b - 255;
    g = g + carryOver;
    b = 255;
  }
  if (g > 255) {
    var carryOver = g - 255;
    r = r + carryOver;
    g = 255;
  }
  if (r > 255) {
    r = 255;
  }
  var newR = r.toString(16);
  var newG = g.toString(16);
  var newB = b.toString(16);

  //check for missing leading zero
  if (newR.length < 2) {
    newR = "0" + newR;
  }
  if (newG.length < 2) {
    newG = "0" + newG;
  }
  if (newB.length < 2) {
    newB = "0" + newB;
  }

  var newColor = newR + newG + newB;
  return newColor;
};

const AllColors = styled.div`
  width: 78rem;
  display: flex;
  align-items: center;
`;

const Palette = () => {
  var baseColor = "007ac1";
  var paletteColors = createPalette(baseColor, 14);
  return (
    <Layout pageTitle="Farger">
      <Paragraph>
        Disse fargene kan brukes ved design av nye og eksisterende tjenester i
        HelseID.
      </Paragraph>
      <Paragraph>
        Ikke alle fargene er i bruk, men hele paletten er til disposisjon om man
        trenger å differensiere ulike elementer med ulike variasjoner innenfor
        samme farge.
      </Paragraph>
      {/* {createSwatches(paletteColors)}
      <hr /> */}
      {listColors()}
      {/* {SwatchContainer} */}
    </Layout>
  );
};

export default Palette;
