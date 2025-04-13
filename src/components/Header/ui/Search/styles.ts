import { Alert, Box, InputBase, Snackbar, styled } from "@mui/material";

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.grey[100],
  borderRadius: "40px",
  width: "100%",
  maxWidth: "600px",
  paddingLeft: "15px"
}));

export const StyledInputBase = styled(InputBase)({
  flex: 1,
  padding: "8px 12px"
});

export const SearchHistoryContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  zIndex: 1
}));

export const StyledSnackbar = styled(Snackbar)(() => ({
  "& .MuiSnackbar-anchorOriginTopCenter": {
    top: 20,
    left: "50%",
    transform: "translateX(-50%)"
  }
}));

export const StyledAlert = styled(Alert)(() => ({
  width: "100%"
}));

export const PulsingIconWrapper = styled("div")<{ active: boolean }>(({ active }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  width: 40,
  height: 40,
  ...(active && {
    animation: "pulse 1.2s infinite ease-in-out",
    boxShadow: "0 0 0 0 rgba(0, 150, 136, 0.7)"
  }),
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 0 rgba(0, 150, 136, 0.7)"
    },
    "70%": {
      transform: "scale(1.2)",
      boxShadow: "0 0 0 10px rgba(0, 150, 136, 0)"
    },
    "100%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 0 rgba(0, 150, 136, 0)"
    }
  }
}));
