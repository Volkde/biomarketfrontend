export const styles = {
  productCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  },
  imageLink: {
    display: 'block',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' as const,
  },
  info: {
    padding: '15px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 500,
    marginBottom: '5px',
    color: '#333',
    textDecoration: 'none',
  },
  rating: {
    fontSize: '14px',
    color: '#ff9800',
    marginBottom: '5px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  addButton: {
    backgroundColor: 'rgb(118, 150, 62)',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '20px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '14px',
    ':hover': {
      backgroundColor: 'rgb(100, 128, 53)',
    },
  },
};