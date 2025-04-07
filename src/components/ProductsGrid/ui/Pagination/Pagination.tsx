import { useState, useEffect } from 'react';
import { PaginationContainer, StyledPagination } from './styles';

interface PaginationProps {
  /** Общее количество страниц */
  count: number;
  /** Текущая страница */
  page?: number;
  /** Обработчик изменения страницы */
  onChange?: (page: number) => void;
}

/**
 * Компонент пагинации для навигации по страницам продуктов
 * 
 * @param props - Свойства компонента
 * @returns JSX элемент или null, если всего одна страница
 */
const Pagination = ({ count, page = 1, onChange }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(page);

  // Синхронизация с внешним состоянием
  useEffect(() => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  }, [page]);

  // Если всего одна страница, не показываем пагинацию
  if (count <= 1) return null;

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <PaginationContainer>
      <StyledPagination 
        count={count} 
        page={currentPage}
        onChange={handleChange}
        shape="rounded"
        color="primary"
        showFirstButton 
        showLastButton
        siblingCount={1}
      />
    </PaginationContainer>
  );
};

export default Pagination;
