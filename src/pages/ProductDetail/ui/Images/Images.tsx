import { DetailedImagesProps, Image } from './types';
import {
  Container,
  MainImage,
  MagnifierLens,
  LoadingSpinner,
  ErrorMessage,
  Thumbnails,
  Thumbnail,
} from './styles';
import { useState, useRef, useCallback } from 'react';

const DetailedImages = ({ images = [], product }: DetailedImagesProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const currentImage = images[activeIndex] || {};
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    if (!imageRef.current) return;
    const { left, top } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({ x, y });
  }, []);

  const handleImageError = useCallback(() => {
    setHasError(true);
  }, []);

  const handleThumbnailError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://via.placeholder.com/100x100/cccccc/666666?text=No+Image';
  }, []);

  return (
    <Container>
      <MainImage
        ref={imageRef}
        src={hasError ? 'https://i.ibb.co/KhR3nqC/anime-placeholder.jpg' : currentImage.url}
        alt={product?.name || 'Product Image'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onError={handleImageError}
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
      
      {isLoading && <LoadingSpinner />}
      {hasError && <ErrorMessage>Failed to load image</ErrorMessage>}
      
      {isHovered && !isLoading && !hasError && (
        <MagnifierLens
          magnifierSize={200}
          zoomLevel={3}
          position={position}
          imageWidth={imageRef.current?.clientWidth || 0}
          backgroundImage={currentImage.url}
          borderColor="#1976d2"
        />
      )}
      
      {images.length > 1 && (
        <Thumbnails>
          {images.map((img: Image, index: number) => (
            <Thumbnail
              key={img.id || index}
              src={img.url}
              alt={`Thumbnail ${index}`}
              onError={handleThumbnailError}
              onClick={() => setActiveIndex(index)}
              isSelected={activeIndex === index}
            />
          ))}
        </Thumbnails>
      )}
    </Container>
  );
};

export default DetailedImages;
