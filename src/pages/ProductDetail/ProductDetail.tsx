import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductImages from '../../components/product/ProductImages/ProductImages';
import ProductReviews from '../../components/product/ProductReviews/ProductReviews';
import { styles } from './styles';
import api from '../../services/api';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const response = await api.post('/api/cart', { productId: id, quantity });
      if (response.status === 200) {
        alert('Product added to cart!');
      } else {
        alert('Error adding to cart');
      }
    } catch (err) {
      alert('Error adding to cart');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div style={styles.productDetail}>
      <div style={styles.productContainer}>
        <div style={styles.imagesSection}>
          <ProductImages images={product.images} />
        </div>

        <div style={styles.infoSection}>
          <h1 style={styles.productName}>{product.name}</h1>
          <div style={styles.rating}>
            <span>⭐ {product.rating || 'No rating'}</span>
            <span>({product.reviews?.length || 0} reviews)</span>
          </div>
          <p style={styles.price}>${product.price}</p>
          <p style={styles.description}>{product.description}</p>

          <div style={styles.addToCart}>
            <div style={styles.quantity}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={styles.quantityButton}>
                -
              </button>
              <span style={styles.quantityText}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
                +
              </button>
            </div>
            <button style={styles.addButton} onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div style={styles.reviewsSection}>
        <h2 style={styles.reviewsTitle}>Customer Reviews</h2>
        <ProductReviews reviews={product.reviews} productId={id} />
      </div>
    </div>
  );
};

export default ProductDetail;