import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectSnackbarState } from "store/redux/ui/selectors/selectSnackbarState";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";

function AppSnackbar() {
  const dispatch = useAppDispatch();
  const { snackbars } = useAppSelector(selectSnackbarState);

  const [visibleSnackbars, setVisibleSnackbars] = useState<string[]>([]);

  useEffect(() => {
    snackbars.forEach(snackbar => {
      if (!visibleSnackbars.includes(snackbar.id)) {
        setVisibleSnackbars(prev => [...prev, snackbar.id]);
      }
    });
  }, [snackbars, visibleSnackbars]);

  const handleClose = (id: string) => {
    setVisibleSnackbars(prev => prev.filter(snackId => snackId !== id));
    dispatch(snackbarActions.dequeueSnackbar({ id }));
  };

  return (
    <>
      {snackbars.map(snackbar => (
        <Snackbar
          key={snackbar.id}
          open={visibleSnackbars.includes(snackbar.id)}
          autoHideDuration={3000}
          onClose={() => handleClose(snackbar.id)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => handleClose(snackbar.id)}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
}

export default AppSnackbar;
