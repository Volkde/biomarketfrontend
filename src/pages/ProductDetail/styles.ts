export const styles = {
  productDetail: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  productContainer: {
    display: 'flex',
    gap: '40px',
    marginBottom: '40px',
  },
  imagesSection: {
    flex: 1,
  },
  infoSection: {
    flex: 1,
  },
  productName: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  rating: {
    display: 'flex',
    gap: '10px',
    fontSize: '16px',
    color: '#888',
    marginBottom: '10px',
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#555',
    marginBottom: '20px',
  },
  addToCart: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  quantityText: {
    fontSize: '16px',
  },
  addButton: {
    backgroundColor: 'rgb(118, 150, 62)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 500,
    ':hover': {
      backgroundColor: 'rgb(100, 128, 53)',
    },
  },
  reviewsSection: {
    marginTop: '40px',
  },
  reviewsTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  '@media (max-width: 768px)': {
    productContainer: {
      flexDirection: 'column',
    },
    imagesSection: {
      width: '100%',
    },
    infoSection: {
      width: '100%',
    },
  },
};