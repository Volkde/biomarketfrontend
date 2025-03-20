import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledProductImages = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const MainImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  height: 'auto',
  borderRadius: theme.shape.borderRadius,
  objectFit: 'cover',
}));

const Thumbnails = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexWrap: 'wrap',
}));

const Thumbnail = styled('img')(({ selected }: { selected: boolean }) => ({
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  borderRadius: '4px',
  cursor: 'pointer',
  border: selected ? `2px solid rgb(118, 150, 62)` : '2px solid transparent',
}));

interface ProductImagesProps {
  images: { id: string; url: string }[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0]?.url || '');

  return (
    <StyledProductImages>
      <MainImage src={selectedImage || 'https://via.placeholder.com/400'} alt="Product" />
      {images?.length > 1 && (
        <Thumbnails>
          {images.map((image) => (
            <Thumbnail
              key={image.id}
              src={image.url}
              alt="Thumbnail"
              selected={selectedImage === image.url}
              onClick={() => setSelectedImage(image.url)}
            />
          ))}
        </Thumbnails>
      )}
    </StyledProductImages>
  );
};

export default ProductImages;
