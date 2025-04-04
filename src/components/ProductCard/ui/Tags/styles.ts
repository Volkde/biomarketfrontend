import { styled } from '@mui/material/styles';

export const StyledTagsContainer = styled('div')(({ theme, spacing = 0.5 }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(spacing),
}));

export const StyledTag = styled('span')<{ color: string; variant: string; size: string }>(({
  theme,
  color,
  variant,
  size,
}) => ({
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
  fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1rem' : '0.875rem',
  
  ...(variant === 'filled'
    ? {
        backgroundColor: theme.palette[color].main,
        color: theme.palette[color].contrastText,
      }
    : {
        border: `1px solid ${theme.palette[color].main}`,
        color: theme.palette[color].main,
      }),

  '&:hover': {
    opacity: 0.8,
  },
}));
