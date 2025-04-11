export interface SnackbarItem {
  severity: "success" | "error" | "info" | "warning";
  id: string;
  message: string;
  action?: React.ReactNode;
}

export interface SnackbarState {
  snackbars: SnackbarItem[];
}
