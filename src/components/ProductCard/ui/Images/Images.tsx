import { useState, useRef, useCallback, memo } from 'react';
import { ImagesProps } from './types';
import {
  Container,
  ImageWrapper,
  MainImage,
  MagnifierLens,
  LoadingSpinner,
  ErrorMessage,
  Thumbnails,
  Thumbnail,
} from './styles';

const placeholderImage = 'https://i.ibb.co/KhR3nqC/anime-placeholder.jpg';
const thumbnailPlaceholder = 'https://via.placeholder.com/100x100/cccccc/666666?text=No+Image';

/**
 * Компонент для отображения изображений продукта в карточке товара
 * Оптимизирован для использования в ProductsGrid
 */
const Images = memo(({ images = [], product }: ImagesProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  // Определяем URL для отображения
  const getImageUrl = useCallback(() => {
    if (images.length >= 1) {
      return images[selectedImage]?.url || images[0].url;
    } else if (product?.image) {
      return product.image;
    }
    return placeholderImage;
  }, [images, product, selectedImage]);

  const imageUrl = getImageUrl();

  // Оптимизированная функция для отслеживания позиции курсора
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({
      x: Math.max(0, Math.min(x, width)),
      y: Math.max(0, Math.min(y, height)),
    });
  }, []);

  // Мемоизированные обработчики событий
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);
  const handleImageError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);
  const handleThumbnailError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = thumbnailPlaceholder;
  }, []);

  // Функция для переключения изображений
  const handleThumbnailClick = useCallback((index: number) => {
    setSelectedImage(index);
    setIsLoading(true); // Показываем загрузку при смене изображения
  }, []);

  return (
    <Container isDetailed={false}>
      <ImageWrapper isDetailed={false}>
        <MainImage
          ref={imageRef}
          src={hasError ? placeholderImage : imageUrl}
          alt={product?.name || 'Product'}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ opacity: isLoading ? 0 : 1 }}
        />
        {isHovered && !isLoading && !hasError && (
          <MagnifierLens
            magnifierSize={150}
            zoomLevel={2.5}
            position={position}
            imageWidth={imageRef.current?.clientWidth || 0}
            backgroundImage={imageUrl}
            borderColor="#1976d2"
          />
        )}
        {isLoading && <LoadingSpinner />}
        {hasError && <ErrorMessage>Ошибка загрузки</ErrorMessage>}
      </ImageWrapper>

      {images.length > 1 && (
        <Thumbnails>
          {images.slice(0, 4).map((img, index) => (
            <Thumbnail
              key={img.id || index}
              src={img.url}
              alt={`Миниатюра ${index + 1}`}
              onError={handleThumbnailError}
              onClick={() => handleThumbnailClick(index)}
              isSelected={index === selectedImage}
            />
          ))}
        </Thumbnails>
      )}
    </Container>
  );
});

export default Images;