import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './styles.ts';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  images: { id: number; url: string }[];
  isHot?: boolean;
  isSale?: boolean;
}

const HotDeals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 14,
    hours: 23,
    mins: 59,
    secs: 59
  });
  
  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      setProducts([
        { 
          id: 1, 
          name: 'Apple Juice', 
          price: 11.05, 
          rating: 5,
          isHot: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1600423115367-87ea7661688f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 2, 
          name: 'Jungle Food', 
          price: 20.00, 
          rating: 5,
          isHot: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1610397962076-02407a169a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 3, 
          name: 'Vegetables Cabbage', 
          price: 20.00, 
          rating: 5,
          isHot: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 4, 
          name: 'Ziti Food', 
          price: 45.00, 
          rating: 4.5,
          isHot: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
      ]);
    }, 500);
    
    // Таймер обратного отсчета
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, mins, secs } = prev;
        
        secs -= 1;
        if (secs < 0) {
          secs = 59;
          mins -= 1;
          if (mins < 0) {
            mins = 59;
            hours -= 1;
            if (hours < 0) {
              hours = 23;
              days -= 1;
            }
          }
        }
        
        return { days, hours, mins, secs };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % products.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + products.length) % products.length);
  };
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        style={{ 
          color: i < Math.floor(rating) ? '#FFD700' : '#e4e5e9',
          marginRight: '2px'
        }} 
      />
    ));
  };
  
  const visibleProducts = products.slice(currentIndex, currentIndex + 3);
  if (visibleProducts.length < 3 && products.length > 0) {
    visibleProducts.push(...products.slice(0, 3 - visibleProducts.length));
  }
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Hot Deals</h2>
        <div style={styles.countdown}>
          <span style={styles.countdownItem}>{countdown.days} Days</span>
          <span style={styles.countdownSeparator}>:</span>
          <span style={styles.countdownItem}>{countdown.hours} Hours</span>
          <span style={styles.countdownSeparator}>:</span>
          <span style={styles.countdownItem}>{countdown.mins} Mins</span>
          <span style={styles.countdownSeparator}>:</span>
          <span style={styles.countdownItem}>{countdown.secs} Secs</span>
        </div>
        <div style={styles.controls}>
          <button style={styles.controlButton} onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button style={styles.controlButton} onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      
      <div style={styles.productsContainer}>
        <div style={styles.bestSeller}>
          <div style={styles.bestSellerContent}>
            <h3 style={styles.bestSellerTitle}>Best Seller</h3>
            <p style={styles.bestSellerSubtitle}>FarmVibe Organic</p>
            <div style={styles.bestSellerPrice}>
              <span style={styles.priceTag}>Price only</span>
              <span style={styles.price}>22$</span>
            </div>
          </div>
        </div>
        
        {visibleProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <Link to={`/products/${product.id}`} style={styles.productLink}>
              <img 
                src={product.images[0].url} 
                alt={product.name} 
                style={styles.productImage} 
              />
              <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
                <div style={styles.productRating}>
                  {renderStars(product.rating)}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
