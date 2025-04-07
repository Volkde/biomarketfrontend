import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { MagnifierLensProps } from './types';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  width: '100%',
  height: '500px',
  position: 'relative',
});

export const ImageWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '12px',
  overflow: 'visible',
  backgroundColor: '#f5f5f5',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

export const MainImage = styled('img')({
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'contain',
  transition: 'opacity 0.3s ease',
});

export const MagnifierLens = styled('div')<MagnifierLensProps>(
  ({ magnifierSize, zoomLevel, position, imageWidth, backgroundImage, borderColor }) => ({
    position: 'absolute',
    width: magnifierSize,
    height: magnifierSize,
    borderRadius: '50%',
    border: `2px solid ${borderColor}`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: `${imageWidth * zoomLevel}px ${imageWidth * zoomLevel}px`,
    backgroundPosition: `${-position.x * zoomLevel + magnifierSize / 2}px ${-position.y * zoomLevel + magnifierSize / 2}px`,
    top: `${position.y - magnifierSize / 2}px`,
    left: `${imageWidth + 20}px`,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    pointerEvents: 'none',
    zIndex: 100,
    transition: 'top 0.1s ease',
    opacity: 1,
    backgroundRepeat: 'no-repeat',
  })
);

export const LoadingSpinner = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const ErrorMessage = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'red',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
});

export const Thumbnails = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const Thumbnail = styled('img')<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  width: 64,
  height: 64,
  objectFit: 'cover',
  borderRadius: theme.spacing(1),
  border: isSelected ? '2px solid #1976d2' : '2px solid transparent',
  cursor: 'pointer',
  backgroundColor: '#FFF8E1',
  transition: 'all 0.2s ease',
  '&:hover': {
    opacity: 0.85,
    borderColor: '#1976d2',
  },
}));
