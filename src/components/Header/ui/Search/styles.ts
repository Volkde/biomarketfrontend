import { Alert, InputBase, Snackbar, styled } from "@mui/material";

export const StyledInputBase = styled(InputBase)({
  flex: 1,
  marginLeft: "8px"
});

export const StyledSnackbar = styled(Snackbar)({
  anchorOrigin: { vertical: "top", horizontal: "center" }
});

export const StyledAlert = styled(Alert)({
  width: "100%"
});
