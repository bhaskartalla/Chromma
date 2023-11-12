const styles = {
  "font-family": {
    "proxima-nova-a": {
      value: "Proxima Nova A",
      type: "fontFamilies",
    },
  },
  "font-weight": {
    bold: {
      value: "Bold",
      type: "fontWeights",
    },
    semibold: {
      value: "Semibold",
      type: "fontWeights",
    },
    regular: {
      value: "Regular",
      type: "fontWeights",
    },
    italic: {
      value: "Italic",
      type: "fontWeights",
    },
  },
  "font-size": {
    10: {
      value: "10",
      type: "fontSizes",
    },
    12: {
      value: "12",
      type: "fontSizes",
    },
    14: {
      value: "14",
      type: "fontSizes",
    },
    16: {
      value: "16",
      type: "fontSizes",
    },
    18: {
      value: "18",
      type: "fontSizes",
    },
    20: {
      value: "20",
      type: "fontSizes",
    },
    24: {
      value: "24",
      type: "fontSizes",
    },
    28: {
      value: "28",
      type: "fontSizes",
    },
    32: {
      value: "32",
      type: "fontSizes",
    },
    36: {
      value: "36",
      type: "fontSizes",
    },
  },
  "line-height": {
    12: {
      value: "12",
      type: "lineHeights",
    },
    16: {
      value: "16",
      type: "lineHeights",
    },
    20: {
      value: "20",
      type: "lineHeights",
    },
    24: {
      value: "24",
      type: "lineHeights",
    },
    28: {
      value: "28",
      type: "lineHeights",
    },
    32: {
      value: "32",
      type: "lineHeights",
    },
    34: {
      value: "34",
      type: "lineHeights",
    },
    40: {
      value: "40",
      type: "lineHeights",
    },
    44: {
      value: "44",
      type: "lineHeights",
    },
  },
  "text-case": {
    none: {
      value: "none",
      type: "textCase",
    },
    "UPPER-CASE": {
      value: "uppercase",
      type: "textCase",
    },
    "Title-Case": {
      value: "titlecase",
      type: "textCase",
      description: "Title Case",
    },
    "Sentence-case": {
      value: "sentencecase",
      type: "textCase",
      description: "Sentence case",
    },
  },
  "text-decoration": {
    none: {
      value: "none",
      type: "textDecoration",
    },
    underline: {
      value: "underline",
      type: "textDecoration",
    },
    "strike-through": {
      value: "strike-through",
      type: "textDecoration",
    },
  },
  "paragraph-spacing": {
    0: {
      value: "0",
      type: "paragraphSpacing",
    },
    8: {
      value: "8",
      type: "paragraphSpacing",
    },
    10: {
      value: "10",
      type: "paragraphSpacing",
    },
    12: {
      value: "12",
      type: "paragraphSpacing",
    },
    14: {
      value: "14",
      type: "paragraphSpacing",
    },
  },
  "letter-spacing": {
    none: {
      value: "0",
      type: "letterSpacing",
    },
    small: {
      value: "0.5",
      type: "letterSpacing",
    },
    large: {
      value: "2",
      type: "letterSpacing",
    },
  },
  headline: {
    "xxx-large": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.44}",
        fontSize: "{font-size.36}",
      },
      type: "typography",
      description: "Headline1",
    },
    "xx-large": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.40}",
        fontSize: "{font-size.32}",
      },
      type: "typography",
      description: "Headline2",
    },
    "x-large": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.34}",
        fontSize: "{font-size.28}",
      },
      type: "typography",
      description: "Headline3",
    },
  },
  title: {
    "large-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.32}",
        fontSize: "{font-size.24}",
      },
      type: "typography",
      description: "Title1 bold",
    },
    "large-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.32}",
        fontSize: "{font-size.24}",
      },
      type: "typography",
      description: "Title1 semibold",
    },
    "large-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.32}",
        fontSize: "{font-size.24}",
      },
      type: "typography",
      description: "Title1 regular",
    },
    "medium-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.28}",
        fontSize: "{font-size.20}",
      },
      type: "typography",
      description: "Title2 bold",
    },
    "medium-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.28}",
        fontSize: "{font-size.20}",
      },
      type: "typography",
      description: "Title2 semibold",
    },
    "medium-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.28}",
        fontSize: "{font-size.20}",
      },
      type: "typography",
      description: "Title2 regular",
    },
  },
  body: {
    "medium-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.18}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Body1 bold",
    },
    "medium-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.18}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Body1 semibold",
    },
    "medium-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.18}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Body1 regular",
    },
    "small-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.16}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Body2 bold",
    },
    "small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.16}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Body2 semibold",
    },
    "small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.16}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Body2 regular",
    },
    "x-small-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
        paragraphSpacing: "{paragraph-spacing.10}",
      },
      type: "typography",
      description: "Body3 bold",
    },
    "x-small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
        paragraphSpacing: "{paragraph-spacing.10}",
      },
      type: "typography",
      description: "Body3 semibold",
    },
    "x-small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
        paragraphSpacing: "{paragraph-spacing.10}",
      },
      type: "typography",
      description: "Body3 regular",
    },
  },
  link: {
    "medium-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.18}",
        textDecoration: "{text-decoration.underline}",
      },
      type: "typography",
      description: "Link1 bold",
    },
    "medium-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.18}",
        textDecoration: "{text-decoration.underline}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Link1 semibold",
    },
    "medium-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.18}",
        textDecoration: "{text-decoration.underline}",
      },
      type: "typography",
      description: "Link1 regular",
    },
    "small-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.16}",
        textDecoration: "{text-decoration.underline}",
      },
      type: "typography",
      description: "Link2 bold",
    },
    "small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.16}",
        textDecoration: "{text-decoration.underline}",
        paragraphSpacing: "{paragraph-spacing.12}",
      },
      type: "typography",
      description: "Link2 semibold",
    },
    "small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.24}",
        fontSize: "{font-size.16}",
        textDecoration: "{text-decoration.underline}",
      },
      type: "typography",
      description: "Link2 regular",
    },
    "x-small-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
        textDecoration: "{text-decoration.underline}",
        paragraphSpacing: "{paragraph-spacing.10}",
      },
      type: "typography",
      description: "Link3 bold",
    },
    "x-small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
        textDecoration: "{text-decoration.underline}",
      },
      type: "typography",
      description: "Link3 semibold",
    },
    "x-small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
        textDecoration: "{text-decoration.underline}",
      },
      type: "typography",
      description: "Link3 regular",
    },
    "xx-small-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.16}",
        fontSize: "{font-size.12}",
        textDecoration: "{text-decoration.underline}",
        paragraphSpacing: "{paragraph-spacing.8}",
        letterSpacing: "{letter-spacing.small}",
      },
      type: "typography",
      description: "Link4 bold",
    },
    "xx-small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.16}",
        fontSize: "{font-size.12}",
        textDecoration: "{text-decoration.underline}",
        paragraphSpacing: "{paragraph-spacing.8}",
        letterSpacing: "{letter-spacing.small}",
      },
      type: "typography",
      description: "Link4 semibold",
    },
    "xx-small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.16}",
        fontSize: "{font-size.12}",
        textDecoration: "{text-decoration.underline}",
        paragraphSpacing: "{paragraph-spacing.8}",
        letterSpacing: "{letter-spacing.small}",
      },
      type: "typography",
      description: "Link4 regular",
    },
  },
  label: {
    "x-small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
      },
      type: "typography",
      description: "Label semibold",
    },
    "x-small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
      },
      type: "typography",
      description: "Label regular",
    },
    "button-x-small": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.20}",
        fontSize: "{font-size.14}",
        letterSpacing: "{letter-spacing.large}",
        textCase: "{text-case.UPPER-CASE}",
      },
      type: "typography",
      description: "Label button1",
    },
    "button-xx-small": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.16}",
        fontSize: "{font-size.12}",
        letterSpacing: "{letter-spacing.large}",
        textCase: "{text-case.UPPER-CASE}",
      },
      type: "typography",
      description: "Label button2",
    },
  },
  caption: {
    "xx-small-bold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.bold}",
        lineHeight: "{line-height.16}",
        fontSize: "{font-size.12}",
        letterSpacing: "{letter-spacing.small}",
        paragraphSpacing: "{paragraph-spacing.8}",
      },
      type: "typography",
      description: "Caption1 bold",
    },
    "xx-small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.16}",
        fontSize: "{font-size.12}",
        letterSpacing: "{letter-spacing.small}",
        paragraphSpacing: "{paragraph-spacing.8}",
      },
      type: "typography",
      description: "Caption1 semibold",
    },
    "xx-small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.16}",
        fontSize: "{font-size.12}",
        letterSpacing: "{letter-spacing.small}",
        paragraphSpacing: "{paragraph-spacing.8}",
      },
      type: "typography",
      description: "Caption1 regular",
    },
    "xxx-small-semibold": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.semibold}",
        lineHeight: "{line-height.12}",
        fontSize: "{font-size.10}",
        paragraphSpacing: "{paragraph-spacing.8}",
      },
      type: "typography",
      description: "Caption2 semibold",
    },
    "xxx-small-regular": {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.regular}",
        lineHeight: "{line-height.12}",
        fontSize: "{font-size.10}",
        paragraphSpacing: "{paragraph-spacing.8}",
      },
      type: "typography",
      description: "Caption2 regular",
    },
  },
  quote: {
    medium: {
      value: {
        fontFamily: "{font-family.proxima-nova-a}",
        fontWeight: "{font-weight.italic}",
        lineHeight: "{line-height.28}",
        fontSize: "{font-size.20}",
      },
      type: "typography",
      description: "Quote",
    },
  },
};
