export interface Tab {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  variant?: 'fullWidth' | 'standard';
  color?: 'primary' | 'secondary' | 'inherit';
}
