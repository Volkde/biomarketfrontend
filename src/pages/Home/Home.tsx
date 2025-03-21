import React, { useState, useEffect } from 'react';
import ProductList from '../../components/common/ProductList/ProductList';
import { styles } from './styles';

const Home = () => {
  const [popularProducts, setPopularProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await fetch('/api/products?sort=rating,desc&size=4');
        const data = await response.json();
        setPopularProducts(data.content || []);
      } catch (err) {
        console.error('Error fetching popular products:', err);
      }
    };
    fetchPopularProducts();
  }, []);

  return (
    <div style={styles.home}>
      <div style={styles.banner}>
        <h1 style={styles.bannerTitle}>Welcome to BioMarket</h1>
        <p style={styles.bannerText}>Fresh, organic products directly from local farmers</p>
        <a href="/products" style={styles.shopButton}>Shop Now</a>
      </div>
      <h2 style={styles.sectionTitle}>Popular Products</h2>
      <ProductList products={popularProducts} />
    </div>
  );
};

export default Home;