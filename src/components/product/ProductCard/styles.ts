import { CSSProperties } from 'react';

const styles: Record<string, CSSProperties> = {
  card: {
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    margin: '10px 0',
    border: '1px solid #f0f0f0',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '100%', // 1:1 Aspect ratio
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  hotTag: {
    position: 'absolute',
    top: '10px',
    left: '0',
    backgroundColor: 'rgb(118, 150, 62)',
    color: 'white',
    padding: '5px 10px',
    fontSize: '12px',
    fontWeight: 'bold',
    zIndex: 2,
    borderRadius: '0 4px 4px 0',
  },
  saleTag: {
    position: 'absolute',
    top: '10px',
    left: '0',
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '5px 10px',
    fontSize: '12px',
    fontWeight: 'bold',
    zIndex: 2,
    borderRadius: '0 4px 4px 0',
  },
  actions: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transform: 'translateY(100%)',
    transition: 'transform 0.3s ease',
    boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.1)',
  },
  actionButton: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid #eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    color: '#333',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  content: {
    padding: '15px',
    textAlign: 'center',
  },
  nameLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    color: '#333',
  },
  priceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'rgb(118, 150, 62)',
  },
  oldPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through',
  },
  rating: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

// Примечание: hover эффекты реализованы через inline стили,
// в реальном проекте лучше использовать styled-components или emotion
// для более эффективной работы с псевдоклассами

export default styles;
