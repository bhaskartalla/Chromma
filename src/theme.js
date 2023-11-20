import { createTheme } from "@mui/material/styles";

export default createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            margin: "0",
            minHeight: "56px",
          },
          boxShadow: "unset",
          backgroundColor: "#fdfdfd",
          "&:before": {
            backgroundColor: "unset",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            minHeight: "56px",
          },
          boxShadow: "unset",
          height: "56px",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#088062",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "32px",
          height: "32px",
        },
      },
    },
  },
});
