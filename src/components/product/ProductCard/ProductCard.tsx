import { useState } from 'react';
import { FaStar, FaShoppingCart, FaSearch, FaHeart, FaLayerGroup } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProductQuickViewModal from '../ProductQuickViewModal/ProductQuickViewModal';

const styles = {
  container: {
    border: '1px solid #e0e0e0' as const,
    borderRadius: '8px' as const,
    overflow: 'hidden' as const,
    position: 'relative' as const,
    transition: 'box-shadow 0.3s ease, transform 0.3s ease' as const,
    width: '300px' as const,
    height: '400px' as const,
  } as const,
  containerHover: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' as const,
    transform: 'translateY(-5px)' as const,
  } as const,
  image: {
    width: '100%' as const,
    height: '280px' as const,
    objectFit: 'cover' as const,
    transition: 'opacity 0.3s ease' as const,
  } as const,
  imageHover: {
    opacity: 0.9 as const,
  } as const,
  details: {
    padding: '10px' as const,
    position: 'relative' as const,
    textAlign: 'center' as const,
    height: '120px' as const,
  } as const,
  title: {
    fontSize: '18px' as const,
    fontWeight: 'bold' as const,
    marginBottom: '8px' as const,
  } as const,
  description: {
    fontSize: '14px' as const,
    color: '#666' as const,
    marginBottom: '12px' as const,
  } as const,
  price: {
    fontSize: '16px' as const,
    fontWeight: 'bold' as const,
    color: '#333' as const,
  } as const,
  actions: {
    display: 'flex' as const,
    gap: '8px' as const,
    justifyContent: 'center' as const,
    position: 'absolute' as const,
    top: 'calc(280px - 20px)' as const,
    left: '50%' as const,
    transform: 'translate(-50%, -50%)' as const,
    opacity: 0 as const,
    transition: 'opacity 0.3s ease' as const,
  } as const,
  actionsHover: {
    opacity: 1 as const,
  } as const,
  actionButton: {
    background: 'white' as const,
    border: 'none' as const,
    padding: '8px' as const,
    borderRadius: '50%' as const,
    cursor: 'pointer' as const,
    color: '#333' as const,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    transition: 'background-color 0.3s ease' as const,
  } as const,
  addToCart: {
    color: '#333' as const,
  } as const,
  quickView: {
    color: '#333' as const,
  } as const,
  addToFavorites: {
    color: '#333' as const,
  } as const,
  addToCompare: {
    color: '#333' as const,
  } as const,
  hotTag: {
    position: 'absolute' as const,
    top: '10px' as const,
    left: '10px' as const,
    backgroundColor: '#ff4444' as const,
    color: 'white' as const,
    padding: '4px 8px' as const,
    borderRadius: '4px' as const,
  } as const,
  saleTag: {
    position: 'absolute' as const,
    top: '10px' as const,
    right: '10px' as const,
    backgroundColor: '#4b8a08' as const,
    color: 'white' as const,
    padding: '4px 8px' as const,
    borderRadius: '4px' as const,
  } as const,
  oldPrice: {
    textDecoration: 'line-through' as const,
    color: '#666' as const,
    marginRight: '8px' as const,
  } as const,
  rating: {
    display: 'flex' as const,
    gap: '2px' as const,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
  } as const,
} as const;

interface ProductImage {
  id: number;
  url: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  images: ProductImage[];
  isHot?: boolean;
  isSale?: boolean;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      if (response.ok) {
        alert('Product added to cart!');
      } else {
        alert('Error adding to cart');
      }
    } catch (err) {
      alert('Error adding to cart');
    }
  };

  const handleQuickView = () => {
    setShowModal(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        style={{ 
          color: i < Math.floor(rating) ? '#28a745' : '#e4e5e9',
          marginRight: '2px'
        }} 
      />
    ));
  };

  const cardStyle = {
    ...styles.container,
    ...(isHovered && styles.containerHover),
  };

  const imageStyle = {
    ...styles.image,
    ...(isHovered && styles.imageHover),
  };

  const actionsStyle = {
    ...styles.actions,
    ...(isHovered && styles.actionsHover),
  };

  return (
    <>
      <div 
        style={cardStyle} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ position: 'relative' }}>
          {product.isHot && <div style={styles.hotTag}>Hot</div>}
          {product.isSale && <div style={styles.saleTag}>Sale</div>}
          <Link to={`/products/${product.id}`}>
            <img 
              src={product.images[0]?.url || ''} 
              alt={product.name} 
              style={imageStyle} 
            />
          </Link>
          <div style={actionsStyle}>
            <button 
              style={{ ...styles.actionButton, ...styles.addToCart }} 
              title="Add to Cart"
              onClick={handleAddToCart}
            >
              <FaShoppingCart style={{ color: '#333' }} />
            </button>
            <button 
              style={{ ...styles.actionButton, ...styles.quickView }} 
              title="Quick View"
              onClick={handleQuickView}
            >
              <FaSearch style={{ color: '#333' }} />
            </button>
            <button 
              style={{ ...styles.actionButton, ...styles.addToFavorites }} 
              title="Add to Favorites"
              onClick={() => alert(`Added ${product.name} to favorites`)}
            >
              <FaHeart style={{ color: '#333' }} />
            </button>
            <button 
              style={{ ...styles.actionButton, ...styles.addToCompare }} 
              title="Add to Compare"
              onClick={() => alert(`Added ${product.name} to compare list`)}
            >
              <FaLayerGroup style={{ color: '#333' }} />
            </button>
          </div>
          <div style={styles.details}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: '#333' }}>
              <h3 style={styles.title}>{product.name}</h3>
            </Link>
            <p style={styles.description}>{product.description}</p>
            <div style={{ marginBottom: '12px' }}>
              {product.oldPrice && (
                <span style={styles.oldPrice}>${product.oldPrice.toFixed(2)}</span>
              )}
              <span style={styles.price}>${product.price.toFixed(2)}</span>
            </div>
            <div style={styles.rating}>
              {renderStars(product.rating)}
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <ProductQuickViewModal
          product={{
            ...product,
            image: product.images[0]?.url,
            id: product.id.toString()
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
