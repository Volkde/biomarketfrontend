import React from 'react';
import { styles } from './styles';
import ProductList from '../../components/common/ProductList/ProductList';

const HeroSection = () => {
  const popularProducts = [
    { id: 1, name: 'Organic Apples', price: 2.99, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Fresh Carrots', price: 1.99, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Green Spinach', price: 3.49, image: 'https://via.placeholder.com/200' },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to BioMarket</h1>
      <p style={styles.subtitle}>
        Fresh, organic products directly from local farmers
      </p>
      <div style={styles.popularProducts}>
        <h2 style={styles.popularTitle}>Popular Products</h2>
        <ProductList products={popularProducts} />
      </div>
    </div>
  );
};

export default HeroSection;