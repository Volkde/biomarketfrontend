import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link as MuiLink, // Import MUI Link for base styling if needed
} from '@mui/material';

// Основная обертка карточки
export const CardWrapper = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius * 1.5, // Увеличенные скругления для органичного вида
  overflow: 'hidden',
  transition: 'all 0.35s ease',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#FFFFFF',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',

  '&:hover': {
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-6px)',
    // Показываем оверлей действий при наведении
    '& .product-actions-overlay': {
      opacity: 1,
      transform: 'translate(-50%, 0)',
    },
    // Эффект при наведении на изображение
    '& .product-image': {
      transform: 'scale(1.03)',
      opacity: 0.95,
    }
  },
}));

// Основной контейнер карточки продукта
export const StyledProductCard = styled(CardWrapper)(({ theme }) => ({
  width: '100%',
  maxWidth: '300px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius * 1.5,
  overflow: 'hidden',
  transition: 'all 0.35s ease',
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#FFFFFF',
  '&:hover': {
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-6px)',
  },
}));

// Контейнер для изображения и оверлея действий
export const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '250px',
  overflow: 'hidden',
  borderRadius: `${theme.shape.borderRadius * 1.5}px ${theme.shape.borderRadius * 1.5}px 0 0`,
  backgroundColor: '#FAFAF0', // Натуральный светлый фон, как в фильтрах
}));

// Product Image using CardMedia
export const ProductImage = styled(CardMedia)(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // or 'contain' depending on desired look
  transition: 'opacity 0.3s ease, transform 0.5s ease', // Added transform transition
  backgroundColor: theme.palette.grey[100], // Placeholder background
})) as typeof CardMedia; // Cast required for component prop

// Base styles for Tags (Hot, Sale)
const BaseTag = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1.5),
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1.25),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem',
  fontWeight: 600,
  lineHeight: 1.2,
  zIndex: 1,
  pointerEvents: 'none', // Don't interfere with hover/clicks
})) as typeof Typography;

// Hot Tag specific style
export const HotTag = styled(BaseTag)<{ component?: React.ElementType }>(({ theme }) => ({
  left: theme.spacing(1.5),
  backgroundColor: theme.palette.error.main, // Use theme color
}));

// Sale Tag specific style
export const SaleTag = styled(BaseTag)(({ theme }) => ({
  right: theme.spacing(1.5),
  backgroundColor: theme.palette.success.dark, // Use theme color
}));

// Оверлей быстрых действий (появляется при наведении)
export const QuickActionOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(1.5px)',
  zIndex: 2,
  opacity: 0,
  visibility: 'hidden',
  transition: 'all 0.35s ease',
  
  // Показывается при наведении на карточку
  '&:hover': {
    opacity: 1,
    visibility: 'visible',
  },
}));

// Кнопка действия для быстрых действий
export const ActionButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.primary,
  border: 'none',
  borderRadius: theme.shape.borderRadius * 1.5,
  padding: theme.spacing(1, 2),
  fontSize: '0.875rem',
  fontWeight: 500,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.25s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  },
  '&:disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    cursor: 'not-allowed',
  },
  '& svg': {
    fontSize: '1rem',
  }
}));

// Область контента с использованием CardContent
export const ContentArea = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2.5),
  textAlign: 'center',
  // Позволяем области контента расти при необходимости, но держим действия внизу
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '150px', // Примерная высота, необходимая для контента
  backgroundColor: '#FFFFFF',
}));

// Название продукта (с использованием Typography, стилизованного для многоточия)
export const ProductName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.05rem',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.75),
  // Многоточие для длинных названий
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  minHeight: '2.5em', // Примерная высота для 2 строк
  lineHeight: 1.25,
  letterSpacing: '0.01em',
})) as typeof Typography;

// Описание продукта (опционально, короткий текст)
export const ProductDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1.25),
  // Многоточие для длинных описаний
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1, // Ограничение до 1 строки
  WebkitBoxOrient: 'vertical',
  fontStyle: 'italic',
  opacity: 0.85,
})) as typeof Typography;

// Container for favorite button
export const FavoriteButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(1),
}));

// Контейнер для информации о цене
export const PriceContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1.5, 0),
  padding: theme.spacing(0.5, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

// Стиль текущей цены
export const CurrentPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: theme.palette.primary.main, // Используем основной цвет темы для цены
  display: 'inline-block', // Позволяет располагаться рядом со старой ценой
  letterSpacing: '0.02em',
})) as typeof Typography;

// Стиль старой цены (зачеркнутой)
export const OldPrice = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: theme.palette.text.disabled,
  textDecoration: 'line-through',
  marginLeft: theme.spacing(1.25),
  display: 'inline-block',
  opacity: 0.8,
})) as typeof Typography;

// Контейнер рейтинга
export const RatingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(1.25),
  gap: theme.spacing(0.35),
  minHeight: '1.3em', // Резервируем место
  color: theme.palette.warning.main, // Цвет звезды из темы
  '& svg': {
      fontSize: '1.1rem', // Размер звезды
      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
  }
}));

// Styled MUI Link (if specific link styling is needed beyond basic integration)
// Generally avoid custom styles here if using component={RouterLink}
export const StyledProductLink = styled(MuiLink)(() => ({
  textDecoration: 'none',
  color: 'inherit', // Inherit color from parent
  '&:hover': {
    // Optional: Add hover effect specific to link if needed
  },
}));