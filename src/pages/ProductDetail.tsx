import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductImages from '../components/product/ProductImages/ProductImages';
import ProductReviews from '../components/product/ProductReviews/ProductReviews';
import { styled } from '@mui/material/styles';

const StyledProductDetails = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(4),
}));

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<{
    id: string;
    name: string;
    description: string;
    price: number;
    images: { id: string; url: string }[];
    rating: number;
    reviews: { id: string; userId: string; rating: number; comment: string; dateCreated: string }[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Не удалось загрузить товар');
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Товар не найден</div>;

  return (
    <StyledProductDetails>
      <div>
        <ProductImages images={product.images} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Цена: {product.price} ₽</p>
        <ProductReviews reviews={product.reviews} productId={product.id} />
      </div>
    </StyledProductDetails>
  );
};

export default ProductDetails;
