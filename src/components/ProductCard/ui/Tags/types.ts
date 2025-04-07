export interface Tag {
  label: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;
  variant?: 'filled' | 'outlined';
}

export interface TagsProps {
  // Позволяет использовать условные выражения в массиве тегов
  tags: (Tag | false | null | undefined)[];
  size?: 'small' | 'medium' | 'large';
  spacing?: number;
}
