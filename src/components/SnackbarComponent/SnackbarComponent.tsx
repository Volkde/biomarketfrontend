import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface SnackbarOptions {
  variant?: 'success' | 'error' | 'warning' | 'info';
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

const SnackbarContext = createContext<{
  showSnackbar: (message: string, options?: SnackbarOptions) => void;
}>({
  showSnackbar: () => {},
});

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    options: SnackbarOptions;
  }>({
    open: false,
    message: '',
    options: {},
  });

  const showSnackbar = useCallback((message: string, options: SnackbarOptions = {}) => {
    setSnackbar({ open: true, message, options });
  }, []);

  const handleClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const getVariantStyle = (variant: string) => {
    switch (variant) {
      case 'success':
        return { backgroundColor: '#4caf50', color: '#fff' };
      case 'error':
        return { backgroundColor: '#f44336', color: '#fff' };
      case 'warning':
        return { backgroundColor: '#ff9800', color: '#fff' };
      case 'info':
        return { backgroundColor: '#2196f3', color: '#fff' };
      default:
        return { backgroundColor: '#323232', color: '#fff' };
    }
  };

  const { vertical = 'bottom', horizontal = 'center' } = snackbar.options.anchorOrigin || {};

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar.open && (
        <div
          style={{
            position: 'fixed',
            zIndex: 1400,
            [vertical]: 24,
            [horizontal]: 24,
            transform: `translateX(${horizontal === 'center' ? '-50%' : '0'})`,
            minWidth: 288,
            maxWidth: 568,
            padding: '8px 16px',
            borderRadius: 4,
            ...getVariantStyle(snackbar.options.variant || 'default'),
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ flexGrow: 1 }}>{snackbar.message}</span>
            <button
              onClick={handleClose}
              style={{
                marginLeft: 16,
                background: 'none',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer',
                padding: 4,
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
