import { Chip } from '@mui/material';
import { TagsProps } from './types';
import { StyledTagsContainer } from './styles';

const Tags = ({ tags, size = 'medium', spacing = 0.5 }: TagsProps) => {
  return (
    <StyledTagsContainer spacing={spacing}>
      {tags.map((tag, index) => (
        <Chip
          key={index}
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
