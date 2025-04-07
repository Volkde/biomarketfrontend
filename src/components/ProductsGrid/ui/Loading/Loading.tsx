import { CircularProgress, Stack, Box } from '@mui/material';
import { ProductCardSkeleton } from 'components/ProductCard';
import { LoadingContainer, SkeletonItem } from './styles';

interface LoadingProps {
  /** Количество скелетонов для отображения */
  count?: number;
  /** Режим отображения: grid или list */
  viewMode?: 'grid' | 'list';
  /** Показывать ли спиннер вместо скелетонов */
  spinner?: boolean;
}

/**
 * Компонент для отображения состояния загрузки продуктов
 * Показывает скелетоны карточек продуктов или спиннер
 * 
 * @param props - Свойства компонента
 * @returns JSX элемент
 */
const Loading = ({ count = 8, viewMode = 'grid', spinner = false }: LoadingProps) => {
  if (spinner) {
    return (
      <LoadingContainer>
        <CircularProgress color="primary" size={48} />
      </LoadingContainer>
    );
  }

  // Используем Box и Stack вместо Grid для избежания проблем с MUI Grid v2
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Stack 
        direction={viewMode === 'list' ? 'column' : 'row'} 
        spacing={2} 
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {Array.from(new Array(count)).map((_, index) => (
          <Box 
            key={`skeleton-${index}`}
            sx={{
              width: viewMode === 'list' ? '100%' : {
                xs: '100%',
                sm: 'calc(50% - 16px)',
                md: 'calc(33.333% - 16px)',
                lg: 'calc(25% - 16px)'
              },
              mb: 2
            }}
          >
            <SkeletonItem>
              <ProductCardSkeleton />
            </SkeletonItem>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Loading;
