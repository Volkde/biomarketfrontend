import React, { useState, useEffect } from 'react';
import { styles } from './styles';

interface ProductFiltersProps {
  filters: {
    categoryId: string;
    minPrice: string;
    maxPrice: string;
    minRating: string;
    sort: string;
  };
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, onFilterChange }) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        const data = await response.json();
        setCategories(data || []);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      categoryId: '',
      minPrice: '',
      maxPrice: '',
      minRating: '',
      sort: 'price,asc',
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div style={styles.filters}>
      <h3 style={styles.h3}>Filters</h3>

      <div style={styles.filterGroup}>
        <label style={styles.label}>Category</label>
        <select
          name="categoryId"
          value={localFilters.categoryId}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.filterGroup}>
        <label style={styles.label}>Price Range</label>
        <div style={styles.priceRange}>
          <input
            type="number"
            name="minPrice"
            value={localFilters.minPrice}
            onChange={handleChange}
            placeholder="Min"
            style={styles.input}
          />
          <input
            type="number"
            name="maxPrice"
            value={localFilters.maxPrice}
            onChange={handleChange}
            placeholder="Max"
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.filterGroup}>
        <label style={styles.label}>Rating</label>
        <select
          name="minRating"
          value={localFilters.minRating}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Any</option>
          <option value="3">3+ ⭐</option>
          <option value="4">4+ ⭐</option>
          <option value="5">5 ⭐</option>
        </select>
      </div>

      <div style={styles.filterGroup}>
        <label style={styles.label}>Sort By</label>
        <select name="sort" value={localFilters.sort} onChange={handleChange} style={styles.select}>
          <option value="price,asc">Price: Low to High</option>
          <option value="price,desc">Price: High to Low</option>
          <option value="rating,desc">Popularity</option>
        </select>
      </div>

      <div style={styles.actions}>
        <button onClick={handleApplyFilters} style={styles.applyButton}>
          Apply
        </button>
        <button onClick={handleResetFilters} style={styles.resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;