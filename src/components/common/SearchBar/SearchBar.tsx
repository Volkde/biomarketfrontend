import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import styles from './SearchBar.module.css';
import { FaSearch } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  price: number;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const fetchSuggestions = async (searchQuery: string) => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(`/api/products/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setSuggestions(data.content || []);
    } catch (error) {
      console.error('Ошибка при поиске:', error);
      setSuggestions([]);
    }
  };

  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedFetchSuggestions(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setSuggestions([]);
      setIsFocused(false);
    }
  };

  const handleSuggestionClick = (productId: string) => {
    navigate(`/products/${productId}`);
    setSuggestions([]);
    setIsFocused(false);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setTimeout(() => setIsFocused(false), 200);

  useEffect(() => {
    return () => {
      debouncedFetchSuggestions.cancel();
    };
  }, []);

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search Your Product"
        className={styles.searchInput}
      />
      <button className={styles.searchButton}>
        <FaSearch />
      </button>

      {isFocused && suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSuggestionClick(product.id)}
              className={styles.suggestionItem}
            >
              {product.name} - {product.price} ₽
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;