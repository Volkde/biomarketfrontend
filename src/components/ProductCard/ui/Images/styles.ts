import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { MagnifierLensProps, ContainerProps } from './types';

// Основной контейнер для изображений
export const Container = styled(Box)<ContainerProps>(({ theme, isDetailed }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(1),
  width: '100%',
  height: '250px',
  position: 'relative',
}));

// Обертка для основного изображения
export const ImageWrapper = styled('div')<ContainerProps>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: theme.shape.borderRadius,
  overflow: 'visible', // Чтобы лупа не обрезалась
  backgroundColor: '#FAFAF0', // Натуральный светлый фон, как в фильтрах
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
  },
}));

// Основное изображение
export const MainImage = styled('img')({
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'contain',
  transition: 'all 0.4s ease',
  cursor: 'zoom-in',
  padding: '8px',
});

// Увеличительное стекло
export const MagnifierLens = styled('div')<MagnifierLensProps>(
  ({ magnifierSize, zoomLevel, position, imageWidth, backgroundImage, borderColor }) => ({
    position: 'absolute',
    width: magnifierSize,
    height: magnifierSize,
    borderRadius: '50%',
    border: `2px solid ${borderColor}`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: `${zoomLevel * 100}% ${zoomLevel * 100}%`,
    backgroundPosition: `${-position.x * zoomLevel + magnifierSize / 2}px ${
      -position.y * zoomLevel + magnifierSize / 2
    }px`,
    top: `${position.y - magnifierSize / 2}px`,
    left: `${imageWidth + 20}px`,
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    pointerEvents: 'none',
    zIndex: 100,
    transition: 'all 0.2s ease',
    opacity: 1,
    backgroundRepeat: 'no-repeat',
    backdropFilter: 'blur(2px)',
  })
);

// Индикатор загрузки
export const LoadingSpinner = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '40px',
  height: '40px',
  border: '3px solid #f3f3f3',
  borderTop: `3px solid ${theme.palette.primary.main}`,
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  transform: 'translate(-50%, -50%)',
  '@keyframes spin': {
    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
  },
}));

// Сообщение об ошибке
export const ErrorMessage = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: theme.palette.error.main,
  fontSize: '14px',
  fontWeight: 'medium',
  textAlign: 'center',
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(2px)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
}));

// Контейнер для миниатюр
export const Thumbnails = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '100%',
}));

// Миниатюра изображения
export const Thumbnail = styled('img')<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  width: 48,
  height: 48,
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  border: isSelected ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
  cursor: 'pointer',
  backgroundColor: '#FAFAF0',
  transition: 'all 0.2s ease',
  opacity: isSelected ? 1 : 0.7,
  '&:hover': {
    opacity: 1,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.primary.light,
  },
}));