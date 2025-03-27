import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import api from "../../../../services/api";
import { styles } from "./styles";
import { Category, FiltersProps } from "./types";

// TODO: component/Filters изменить вид

function Filters({ filters, onFilterChange }: FiltersProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get<Category[]>("/api/categories");
        setCategories(response.data || []);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      categoryId: "",
      minPrice: "",
      maxPrice: "",
      minRating: "",
      sort: "price,asc",
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <Box style={styles.filters}>
      <Box style={styles.filterGroup}>
        <label style={styles.label}>Category</label>
        <select
          name="categoryId"
          value={localFilters?.categoryId}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </Box>

      <Box style={styles.filterGroup}>
        <label style={styles.label}>Price Range</label>
        <div style={styles.priceRange}>
          <input
            type="number"
            name="minPrice"
            value={localFilters?.minPrice}
            onChange={handleChange}
            placeholder="Min"
            style={styles.input}
          />
          <input
            type="number"
            name="maxPrice"
            value={localFilters?.maxPrice}
            onChange={handleChange}
            placeholder="Max"
            style={styles.input}
          />
        </div>
      </Box>

      <Box style={styles.filterGroup}>
        <label style={styles.label}>Rating</label>
        <select
          name="minRating"
          value={localFilters?.minRating}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="">Any</option>
          <option value="3">3+ ⭐</option>
          <option value="4">4+ ⭐</option>
          <option value="5">5 ⭐</option>
        </select>
      </Box>

      <Box style={styles.filterGroup}>
        <label style={styles.label}>Sort By</label>
        <select
          name="sort"
          value={localFilters?.sort}
          onChange={handleChange}
          style={styles.select}
        >
          <option value="price,asc">Price: Low to High</option>
          <option value="price,desc">Price: High to Low</option>
          <option value="rating,desc">Popularity</option>
        </select>
      </Box>

      <Box style={styles.actions}>
        <button onClick={handleApplyFilters} style={styles.applyButton}>
          Apply
        </button>
        <button onClick={handleResetFilters} style={styles.resetButton}>
          Reset
        </button>
      </Box>
    </Box>
  );
}

export default Filters;
