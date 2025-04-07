import { Chip } from '@mui/material';
import { Tag, TagsProps } from './types';
import { StyledTagsContainer } from './styles';

/**
 * Компонент отображения тегов продукта
 * 
 * @param tags - массив тегов (может содержать условные выражения)
 * @param size - размер тегов (small, medium, large)
 * @param spacing - расстояние между тегами
 */
const Tags = ({ tags, size = 'medium', spacing = 0.5 }: TagsProps) => {
  // Фильтруем массив, чтобы убрать недействительные значения
  const validTags = tags.filter((tag): tag is Tag => !!tag);
  
  // Если нет действительных тегов, не отображаем компонент
  if (validTags.length === 0) {
    return null;
  }
  
  return (
    <StyledTagsContainer spacing={spacing}>
      {validTags.map((tag, index) => (
        <Chip
          key={`${tag.label}-${index}`}
          label={tag.label}
          size={size}
          color={tag.color || 'primary'}
          variant={tag.variant || 'outlined'}
          sx={{
            fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1rem' : '0.875rem',
          }}
        />
      ))}
    </StyledTagsContainer>
  );
};

export default Tags;
