import React, { useEffect, useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Switch,
  FormControlLabel,
  Button,
  SelectChangeEvent,
  Chip,
  Divider,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import api from '../../../../services/api';
import { FiltersProps, Category, FiltersState } from './types';
import { FilterBar } from './styles';

const Filters = ({ filters, onFilterChange }: FiltersProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [localFilters, setLocalFilters] = useState<FiltersState>(filters);
  const [loading, setLoading] = useState(false);

  // Improved category fetching
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('/api/categories');
        if (Array.isArray(data) && data.length > 0) {
          console.log('Categories loaded:', data.length);
          setCategories(data);
        } else {
          console.warn('No categories received from API, using fallback');
          setCategories([
            { id: '1', name: 'Vegetables' },
            { id: '2', name: 'Fruits' },
            { id: '3', name: 'Dairy' },
            { id: '4', name: 'Bakery' },
            { id: '5', name: 'Meat' },
          ]);
        }
      } catch (err) {
        console.error('Error loading categories', err);
        setCategories([
          { id: '1', name: 'Vegetables' },
          { id: '2', name: 'Fruits' },
          { id: '3', name: 'Dairy' },
          { id: '4', name: 'Bakery' },
          { id: '5', name: 'Meat' },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    const updated = { ...localFilters, [name]: val };
    setLocalFilters(updated);
    onFilterChange(updated);
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    const [min, max] = newValue as number[];
    const updated = { ...localFilters, minPrice: min, maxPrice: max };
    setLocalFilters(updated);
    onFilterChange(updated);
  };

  const handleReset = () => {
    const resetFilters: FiltersState = {
      categoryId: '',
      minPrice: 0,
      maxPrice: 100,
      minRating: '',
      sort: 'price,asc',
      isOrganic: false,
      isLocal: false,
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };
  return (
    <FilterBar>
      {/* Category Filter with Improved UI */}
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>Category</InputLabel>
        <Select
          name="categoryId"
          value={localFilters.categoryId}
          onChange={handleChange}
          label="Category"
          disabled={loading}
          startAdornment={loading ? <CircularProgress size={20} sx={{ mr: 1 }} /> : null}
        >
          <MenuItem value="">All Categories</MenuItem>
          {categories.map(cat => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Price Range with Tooltip */}
      <Box sx={{ minWidth: 200 }}>
        <Typography variant="body2" fontWeight={500} sx={{ mb: 0.5 }}>
          Price Range: ${localFilters.minPrice} - ${localFilters.maxPrice}
        </Typography>
        <Tooltip title={`$${localFilters.minPrice} - $${localFilters.maxPrice}`} arrow placement="top">
          <Slider
            value={[localFilters.minPrice, localFilters.maxPrice]}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            sx={{ color: '#66BB6A' }}
          />
        </Tooltip>
      </Box>

      {/* Rating Filter */}
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Rating</InputLabel>
        <Select
          name="minRating"
          value={localFilters.minRating}
          onChange={handleChange}
          label="Rating"
        >
          <MenuItem value="">Any Rating</MenuItem>
          <MenuItem value="3">3+ ⭐</MenuItem>
          <MenuItem value="4">4+ ⭐</MenuItem>
          <MenuItem value="5">5 ⭐</MenuItem>
        </Select>
      </FormControl>

      {/* Organic Filter with Chip */}
      <Tooltip title="Organic products are grown without synthetic pesticides or fertilizers">
        <FormControlLabel
          control={
            <Switch
              checked={localFilters.isOrganic}
              onChange={handleChange}
              name="isOrganic"
              color="success"
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              Organic
              {localFilters.isOrganic && (
                <Chip size="small" label="ON" color="success" sx={{ ml: 1, height: 20 }} />
              )}
            </Box>
          }
        />
      </Tooltip>

      {/* Local Filter with Chip */}
      <Tooltip title="Local products are sourced from nearby farms and producers">
        <FormControlLabel
          control={
            <Switch
              checked={localFilters.isLocal}
              onChange={handleChange}
              name="isLocal"
              color="success"
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              Local
              {localFilters.isLocal && (
                <Chip size="small" label="ON" color="success" sx={{ ml: 1, height: 20 }} />
              )}
            </Box>
          }
        />
      </Tooltip>

      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

      {/* Sort Filter */}
      <FormControl size="small" sx={{ minWidth: 150 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          name="sort"
          value={localFilters.sort}
          onChange={handleChange}
          label="Sort By"
        >
          <MenuItem value="price,asc">Price: Low to High</MenuItem>
          <MenuItem value="price,desc">Price: High to Low</MenuItem>
          <MenuItem value="rating,desc">Highest Rated</MenuItem>
          <MenuItem value="name,asc">Name: A to Z</MenuItem>
        </Select>
      </FormControl>

      {/* Reset Button */}
      <Button
        onClick={handleReset}
        variant="outlined"
        color="inherit"
        size="small"
        sx={{
          borderRadius: '20px',
          color: '#4CAF50',
          borderColor: '#A5D6A7',
          '&:hover': {
            backgroundColor: '#F0F4EF',
            borderColor: '#81C784',
          },
        }}
      >
        Reset Filters
      </Button>
    </FilterBar>
  );
};

export default Filters;
