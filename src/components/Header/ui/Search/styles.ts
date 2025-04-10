import { Alert, Box, InputBase, Snackbar, styled } from "@mui/material";

export const SearchContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  borderRadius: "40px",
  width: "100%",
  maxWidth: "600px",
  paddingLeft: "15px"
});

export const StyledInputBase = styled(InputBase)({
  flex: 1
});

export const SearchHistoryContainer = styled("div")`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: background.paper;
  box-shadow: 3;
  z-index: 1;
`;

export const StyledSnackbar = styled(Snackbar)({
  anchorOrigin: { vertical: "top", horizontal: "center" }
});

export const StyledAlert = styled(Alert)({
  width: "100%"
});
