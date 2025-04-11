export interface CardProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}
