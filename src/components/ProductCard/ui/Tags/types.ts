export interface Tag {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  variant?: 'filled' | 'outlined';
}

export interface TagsProps {
  tags: Tag[];
  size?: 'small' | 'medium' | 'large';
  spacing?: number;
}
