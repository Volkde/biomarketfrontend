export interface RootProps {
  filters?: boolean;
  viewMode?: 'grid' | 'list';
  limit?: number;
  page?: number;
  pagination?: boolean;
  onPageChange?: (newPage: number) => void;
}