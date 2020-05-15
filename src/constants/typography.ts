import palette from "./helseidColors";

const fonts = {
  h1: {
    typeface: "Source Sans Pro 32 (2rem) normal",
    colors: [palette.c100],
    weights: ["regular"],
    styles: ["normal"],
    "letter-spacing": "0.0125rem",
    usage: ["page title"],
  },
  h2: {
    typeface: "Source Sans Pro 24 (1.5rem) normal",
    colors: [palette.c100],
    weights: ["regular"],
    styles: ["normal"],
    "letter-spacing": "0.0125rem",
    usage: ["heading"],
  },
  h3: {
    typeface: "Source Sans Pro 19 (1.1875rem)",
    colors: [palette.c100],
    weights: ["regular"],
    styles: ["normal"],
    "letter-spacing": "0.0125rem",
    usage: ["section heading"],
  },
  h4: {
    typeface: "Source Sans Pro 16 (1rem) bold",
    colors: [palette.c100],
    weights: ["bold"],
    styles: ["normal"],
    "letter-spacing": "0.0125rem",
    usage: ["paragraph heading"],
  },
  body: {
    typeface: "Source Sans Pro 16 (1rem)",
    fontsize: "1rem",
    small: "0.875rem",
    colors: [palette.c000, palette.c100, palette.c200, palette.c500],
    weights: ["regular", "bold"],
    styles: ["normal", "italic"],
    "letter-spacing": "0.0125rem",
    usage: ["body copy", "hyperlink", "label"],
  },
  paragraph: {
    typeface: "Source Sans Pro 16 (1rem)",
    fontsize: "1rem",
    small: "0.875rem",
    weights: ["400", "600"],
    "letter-spacing": "0.0125rem",
    "line-height": "1.65rem",
    "line-height-small": "1.35rem",
  },
};

export default fonts;
