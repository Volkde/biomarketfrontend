export interface SnackbarProps {
  id: string;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
  open: boolean;
  onClose: () => void;
}
