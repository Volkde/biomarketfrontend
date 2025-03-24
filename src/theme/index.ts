import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { mixins } from "./mixins";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { transitions } from "./transitions";
import { typography } from "./typography";
import { zIndex } from "./zIndex";

const theme = createTheme({
  breakpoints,
  direction: "ltr",
  components,
  palette,
  shape: {
    borderRadius: 4,
  },
  unstable_sxConfig: {},
  mixins,
  shadows,
  typography,
  transitions,
  zIndex,
});

export default theme;
