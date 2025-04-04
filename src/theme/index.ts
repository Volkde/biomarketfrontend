import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { transitions } from "./transitions";
import { typography } from "./typography";
const theme = createTheme({
  breakpoints,
  direction: "ltr",
  components,
  palette,
  shape: {
    borderRadius: 4
  },
  unstable_sxConfig: {},
  mixins: {},
  shadows,
  typography,
  transitions,
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
});

export default theme;
