import React, { useState } from 'react';
import { styles } from './styles';
import { ImagesProps } from './types';




const Images: React.FC<ImagesProps> = ({ images = [] }) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0]?.url || '');

  return (
    <div style={styles.productImages}>
      <div style={styles.mainImage}>
        <img src={selectedImage || 'https://via.placeholder.com/400'} alt="Product" style={styles.image} />
      </div>
      {images?.length > 1 && (
        <div style={styles.thumbnails}>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt="Thumbnail"
              style={selectedImage === image.url ? styles.selectedThumbnail : styles.thumbnail}
              onClick={() => setSelectedImage(image.url)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Images;