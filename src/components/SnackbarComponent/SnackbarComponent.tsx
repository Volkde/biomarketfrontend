import React, { createContext, useContext, useState, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarContext = createContext({
  showSnackbar: (message, options) => {},
});

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    options: {},
  });

  // Функция для вызова уведомления
  const showSnackbar = useCallback((message: any, options = {}) => {
    setSnackbar({ open: true, message, options });
  }, []);

  const handleClose = (_event: any, reason: string) => {
    // Если закрытие вызвано кликом вне уведомления – игнорируем, если нужно
    if (reason === "clickaway") {
      return;
    }
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={snackbar.options.autoHideDuration || 3000}
        onClose={handleClose}
        anchorOrigin={snackbar.options.anchorOrigin || { vertical: 'bottom', horizontal: 'center' }}
      >
        {snackbar.options.variant ? (
          <Alert
            onClose={handleClose}
            severity={snackbar.options.variant}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        ) : (
          snackbar.message
        )}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
