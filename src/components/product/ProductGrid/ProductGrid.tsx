import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import styles from './styles.ts';

interface ProductImage {
  id: number;
  url: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  images: ProductImage[];
  isHot?: boolean;
  isSale?: boolean;
  category: string;
}

interface ProductGridProps {
  title?: string;
}

const ProductGrid = ({ title }: ProductGridProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    // Имитация загрузки данных
    setTimeout(() => {
      const mockProducts = [
        { 
          id: 1, 
          name: 'Black Beans', 
          price: 20.00, 
          rating: 4.5,
          category: 'vegetables',
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1551460188-2f48af84543c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 2, 
          name: 'Apple Juice', 
          price: 11.05, 
          rating: 5,
          category: 'fruits',
          isHot: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1600423115367-87ea7661688f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 3, 
          name: 'Jungle Food', 
          price: 20.00, 
          rating: 5,
          category: 'fruits',
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1610397962076-02407a169a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 4, 
          name: 'Vegetables Cabbage', 
          price: 20.00, 
          rating: 5,
          category: 'vegetables',
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 5, 
          name: 'Ziti Food', 
          price: 45.00, 
          rating: 4.5,
          category: 'fruits',
          isHot: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 6, 
          name: 'Kidney Beans', 
          price: 15.00, 
          oldPrice: 18.00,
          rating: 5,
          category: 'vegetables',
          isSale: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1515192088926-be788d39f05a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 7, 
          name: 'Carne Asada', 
          price: 45.00, 
          rating: 5,
          category: 'meat',
          isHot: true,
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
        { 
          id: 8, 
          name: 'Plum Silho', 
          price: 3.00, 
          rating: 4.5,
          category: 'fruits',
          images: [{ id: 1, url: 'https://images.unsplash.com/photo-1632252466322-b2e5be53a5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' }] 
        },
      ];
      
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
    }, 500);
  }, []);
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === filter));
    }
  };
  
  return (
    <div style={styles.container}>
      {title && <h2 style={styles.title}>{title}</h2>}
      
      <div style={styles.filterContainer}>
        <button 
          style={activeFilter === 'all' ? {...styles.filterButton, ...styles.activeFilterButton} : styles.filterButton}
          onClick={() => handleFilterChange('all')}
        >
          Show All
        </button>
        <button 
          style={activeFilter === 'meat' ? {...styles.filterButton, ...styles.activeFilterButton} : styles.filterButton}
          onClick={() => handleFilterChange('meat')}
        >
          Meat
        </button>
        <button 
          style={activeFilter === 'season' ? {...styles.filterButton, ...styles.activeFilterButton} : styles.filterButton}
          onClick={() => handleFilterChange('season')}
        >
          Season
        </button>
        <button 
          style={activeFilter === 'vegetables' ? {...styles.filterButton, ...styles.activeFilterButton} : styles.filterButton}
          onClick={() => handleFilterChange('vegetables')}
        >
          Vegetables
        </button>
      </div>
      
      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <div key={product.id} style={styles.gridItem}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
