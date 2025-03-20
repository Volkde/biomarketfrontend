import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import ProductFilters from '../../components/common/ProductFilters/ProductFilters';
import { styles } from './styles';

const Products: React.FC = () => {
  const location = useLocation();
  const [products, setProducts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    categoryId: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    sort: 'price,asc',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchQuery = new URLSearchParams(location.search).get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({
          page: currentPage.toString(),
          size: '12',
          ...(searchQuery && { q: searchQuery }),
          ...(filters.categoryId && { categoryId: filters.categoryId }),
          ...(filters.minPrice && { minPrice: filters.minPrice }),
          ...(filters.maxPrice && { maxPrice: filters.maxPrice }),
          ...(filters.minRating && { minRating: filters.minRating }),
          sort: filters.sort,
        });

        const response = await fetch(`/api/products?${queryParams.toString()}`);
        const data = await response.json();
        setProducts(data.content || []);
        setTotalPages(data.totalPages || 0);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage, filters, searchQuery]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={styles.productsPage}>
      <h1 style={styles.h1}>Shop</h1>
      {searchQuery && <p style={styles.searchQuery}>Search results for: "{searchQuery}"</p>}

      <div style={styles.layout}>
        <div style={styles.filters}>
          <ProductFilters filters={filters} onFilterChange={handleFilterChange} />
        </div>

        <div style={styles.productsGrid}>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

      {totalPages > 1 && (
        <div style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={page === currentPage ? styles.activePage : styles.paginationButton}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;