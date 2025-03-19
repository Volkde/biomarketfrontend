import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface SnackbarOptions {
  variant?: 'success' | 'error' | 'warning' | 'info';
  autoHideDuration?: number;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

interface SkeletonComponentProps {
  width?: number | string;
  height?: number | string;
  variant?: 'text' | 'rectangular' | 'circular';
}

interface SnackbarContextType {
  showSnackbar: (message: string, options?: SnackbarOptions) => void;
}

const SnackbarContext = createContext<SnackbarContextType>({
  showSnackbar: () => {},
});

export const SnackbarProvider = ({ children, SkeletonComponent }: { children: ReactNode; SkeletonComponent: React.ComponentType<SkeletonComponentProps> }) => {
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    options: SnackbarOptions;
    isLoading: boolean;
  }>({
    open: false,
    message: '',
    options: {},
    isLoading: false,
  });

  const showSnackbar = useCallback((message: string, options: SnackbarOptions = {}) => {
    setSnackbar({ open: true, message, options, isLoading: true });

    // Имитация загрузки, убираем Skeleton через 500 мс
    setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, isLoading: false }));
    }, 500);
  }, []);

  const handleClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    if (snackbar.open && snackbar.options.autoHideDuration) {
      const timer = setTimeout(handleClose, snackbar.options.autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [snackbar.open, snackbar.options.autoHideDuration]);

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

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbar.open && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '16px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            ...getVariantStyle(snackbar.options.variant || 'info'),
          }}
        >
          {snackbar.isLoading ? (
            <SkeletonComponent width={200} height={50} />
          ) : (
            <span style={{ flexGrow: 1 }}>{snackbar.message}</span>
          )}
          <button
            onClick={handleClose}
            style={{
              marginLeft: '16px',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);

export default SnackbarProvider;
