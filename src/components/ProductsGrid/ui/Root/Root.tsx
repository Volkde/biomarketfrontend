import { useEffect, memo } from 'react';
import { Container, Box, Fade, Alert } from '@mui/material';

// Hooks
import { useProducts, useFilters } from '../../hooks';

// Components
import { Filters } from '../../ui/Filters';
import { GridView } from '../../ui/GridView';
import { ListView } from '../../ui/ListView';
import { Pagination } from '../../ui/Pagination';
import { EmptyState } from '../../ui/EmptyState';
import { Loading } from '../../ui/Loading';

// Types
import { RootProps } from './types';

/**
 * Корневой компонент для отображения сетки продуктов
 * 
 * Отвечает за:
 * - Загрузку и отображение списка продуктов
 * - Переключение между режимами отображения (сетка/список)
 * - Отображение фильтров (опционально)
 * - Пагинацию (опционально)
 * - Обработку ошибок и состояния загрузки
 * 
 * @param props - Свойства компонента
 * @returns JSX элемент
 */
const Root = ({
  filters = false, 
  viewMode = 'grid', 
  limit = 8, 
  page = 1, 
  pagination = false,
  onPageChange // Добавляем проп для обработки смены страницы
}: RootProps) => {
  // Получаем данные о продуктах и состояние из хука
  const {
    products,
    error,
    isLoading,
    fetchProducts,
    currentViewMode,
    setCurrentViewMode,
    totalCount, // Добавляем общее количество продуктов
  } = useProducts({ viewMode, limit, page });

  // Получаем состояние фильтров и функции управления
  const { filterValues, handleFilterChange, resetFilters } = useFilters();

  // Загружаем продукты при изменении фильтров
  useEffect(() => {
    console.log('Filter values changed:', filterValues);
    
    // Преобразуем filterValues в Record<string, string> для API
    // Используем только непустые значения для уменьшения шума в запросе
    const apiFilters: Record<string, string> = {};
    
    // Используем snake_case для параметров API (как в бэкенде)
    if (filterValues.categoryId) apiFilters.category_id = filterValues.categoryId;
    apiFilters.min_price = filterValues.minPrice.toString();
    apiFilters.max_price = filterValues.maxPrice.toString();
    if (filterValues.minRating) apiFilters.rating_min = filterValues.minRating;
    if (filterValues.sort) {
      // Парсим сортировку в формате 'field,direction'
      const [sortBy, sortOrder] = filterValues.sort.split(',');
      apiFilters.sort_by = sortBy;
      apiFilters.sort_order = sortOrder;
    }
    
    // Добавляем булевы фильтры только если они true
    if (filterValues.isOrganic) apiFilters.is_organic = 'true';
    if (filterValues.isLocal) apiFilters.is_local = 'true';
    
    console.log('Sending API filters:', apiFilters);
    
    // Добавляем дополнительные параметры для улучшения запроса
    apiFilters.page = page.toString();
    apiFilters.limit = limit.toString();
    
    // Запускаем загрузку продуктов
    fetchProducts(apiFilters);
  }, [fetchProducts, filterValues, page, limit]);

  // Рендерим контент в зависимости от состояния
  const renderContent = () => {
    console.log('Rendering content. Loading:', isLoading, 'Products length:', products.length);
    
    if (isLoading) {
      return <Loading viewMode={currentViewMode} count={limit} />;
    }
    
    if (products.length === 0) {
      console.log('No products to display, showing EmptyState');
      return <EmptyState onReset={resetFilters} />;
    }
    
    console.log('Rendering products in', currentViewMode, 'mode');
    console.log('First product:', products[0]);
    
    return (
      <Fade in>
        <Box>
          {currentViewMode === 'grid' ? (
            <GridView products={products} />
          ) : (
            <ListView products={products} />
          )}
          {pagination && totalCount > 0 && (
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Pagination 
                count={Math.ceil(totalCount / limit)} 
                page={page}
                onChange={onPageChange}
              />
            </Box>
          )}
        </Box>
      </Fade>
    );
  };

  return (
    <Container>
      {/* Фильтры (опционально) */}
      {filters && (
        <Filters
          filters={filterValues}
          onFilterChange={handleFilterChange}
          viewMode={currentViewMode}
          onViewModeChange={setCurrentViewMode}
        />
      )}

      {/* Сообщение об ошибке */}
      {error && (
        <Fade in>
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        </Fade>
      )}

      {/* Основной контент */}
      {renderContent()}
    </Container>
  );
};

// Мемоизируем компонент для оптимизации производительности
export default memo(Root);
