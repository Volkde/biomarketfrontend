import { Alert, Snackbar as MuiSnackbar } from "@mui/material";
import { SnackbarProps } from "./types";

function Snackbar({ id, message, severity, open, onClose }: SnackbarProps) {
  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

export default Snackbar;
