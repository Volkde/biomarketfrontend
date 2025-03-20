import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const StyledProductReviews = styled('div')(() => ({
  marginTop: '16px',
}));

const ReviewList = styled('ul')(() => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
}));

const ReviewItem = styled('li')(() => ({
  borderBottom: `1px solid #ccc`,
  padding: '16px 0',
}));

interface ProductReviewsProps {
  reviews: { id: string; userId: string; rating: number; comment: string; dateCreated: string }[];
  productId: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews, productId }) => {
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/products/${productId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: newReview.rating,
          comment: newReview.comment,
          productId,
          userId: '1', // Замените на ID текущего пользователя
        }),
      });
      if (response.ok) {
        alert('Отзыв добавлен!');
        setNewReview({ rating: 0, comment: '' });
      } else {
        alert('Ошибка при добавлении отзыва');
      }
    } catch (err) {
      alert('Ошибка при добавлении отзыва');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledProductReviews>
      <h3>Отзывы покупателей</h3>
      {reviews?.length > 0 ? (
        <ReviewList>
          {reviews.map((review) => (
            <ReviewItem key={review.id}>
              <div>
                <span>Пользователь #{review.userId}</span>
                <span> {review.rating}</span>
                <p>{review.comment}</p>
                <span>{new Date(review.dateCreated).toLocaleDateString()}</span>
              </div>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <p>Отзывов пока нет.</p>
      )}
      <form onSubmit={handleSubmitReview}>
        <TextField
          label="Ваш отзыв"
          multiline
          rows={4}
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Rating
          value={newReview.rating}
          onChange={(_, value) => setNewReview({ ...newReview, rating: value || 0 })}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          style={{ marginTop: '16px' }}
        >
          {isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
        </Button>
      </form>
    </StyledProductReviews>
  );
};

export default ProductReviews;
