import React from 'react';
import { styles } from './styles';
import HeroSection from '../HeroSection/HeroSection';
import HotDeals from '../../components/common/HotDeals';
import ProductGrid from '../../components/product/ProductGrid';

const Home = () => {
  return (
    <div style={{ width: '100%', maxWidth: 'none' }}>
      <HeroSection />
      <HotDeals />
      <ProductGrid title="Our Products" />
    </div>
  );
};

export default Home;