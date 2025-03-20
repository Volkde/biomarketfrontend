import React, { useState } from 'react';
import { styles } from './styles';

interface ProductReviewsProps {
  reviews?: { id: number; userId: number; rating: number; comment: string; dateCreated: string }[];
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
          userId: 1, // Здесь должен быть ID текущего пользователя
        }),
      });
      if (response.ok) {
        alert('Review added! It will appear after moderation.');
        setNewReview({ rating: 0, comment: '' });
      } else {
        alert('Error adding review');
      }
    } catch (err) {
      alert('Error adding review');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.reviews}>
      {reviews?.length > 0 ? (
        <ul style={styles.reviewList}>
          {reviews.map((review) => (
            <li key={review.id} style={styles.reviewItem}>
              <div style={styles.reviewHeader}>
                <span style={styles.user}>User #{review.userId}</span>
                <span style={styles.rating}>⭐ {review.rating}</span>
              </div>
              <p style={styles.comment}>{review.comment}</p>
              <span style={styles.date}>
                {new Date(review.dateCreated).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}

      <div style={styles.reviewForm}>
        <h3 style={styles.formTitle}>Leave a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Rating:</label>
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
              style={styles.select}
              required
            >
              <option value="0">Select rating</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} ⭐</option>
              ))}
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Comment:</label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Your review..."
              style={styles.textarea}
              required
            />
          </div>
          <button type="submit" style={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductReviews;