import SearchOffIcon from '@mui/icons-material/SearchOff';
import { 
  EmptyStateContainer, 
  EmptyStateIcon, 
  EmptyStateTitle, 
  EmptyStateDescription, 
  ResetButton 
} from './styles';

interface EmptyStateProps {
  /** Функция для сброса фильтров */
  onReset?: () => void;
  /** Заголовок (опционально) */
  title?: string;
  /** Описание (опционально) */
  description?: string;
  /** Текст кнопки сброса (опционально) */
  resetButtonText?: string;
}

/**
 * Компонент для отображения пустого состояния при отсутствии продуктов
 * 
 * @param props - Свойства компонента
 * @returns JSX элемент
 */
const EmptyState = ({ 
  onReset, 
  title = 'No products found', 
  description = 'Try adjusting your filters or browse all items',
  resetButtonText = 'Reset Filters'
}: EmptyStateProps) => {
  return (
    <EmptyStateContainer>
      <EmptyStateIcon>
        <SearchOffIcon sx={{ fontSize: 'inherit' }} />
      </EmptyStateIcon>
      <EmptyStateTitle variant="h5">
        {title}
      </EmptyStateTitle>
      <EmptyStateDescription variant="body1">
        {description}
      </EmptyStateDescription>
      {onReset && (
        <ResetButton
          variant="contained"
          color="primary"
          onClick={onReset}
        >
          {resetButtonText}
        </ResetButton>
      )}
    </EmptyStateContainer>
  );
};

export default EmptyState;
