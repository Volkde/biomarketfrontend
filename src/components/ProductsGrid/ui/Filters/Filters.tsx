import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Slider,
  Switch,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../context/FiltersContext";
import { ProductsFilters } from "../../types/ProductsFilters";
import { ProductsFilterSortBy } from "../../types/ProductsFilterSortBy";
import { ProductsFilterSortOrder } from "../../types/ProductsFilterSortOrder";

function Filters() {
  const { filters, setFilters } = useContext(FiltersContext);
  const [local, setLocal] = useState<ProductsFilters>(filters);

  useEffect(() => {
    setLocal(filters);
  }, [filters]);

  const handleRating = (_: any, newValue: number | number[]) => {
    setLocal(prev => ({ ...prev, rating_min: newValue as number }));
  };

  const handleSort = (_: any, value: string) => {
    if (!value) {
      setLocal(prev => ({
        ...prev,
        sort_by: undefined,
        sort_order: undefined
      }));
      return;
    }
    const [sort_by, sort_order] = value.split(",");
    setLocal(prev => ({
      ...prev,
      sort_by: sort_by as ProductsFilterSortBy,
      sort_order: sort_order as ProductsFilterSortOrder
    }));
  };

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocal(prev => ({
      ...prev,
      [e.target.name]: e.target.checked ? true : undefined
    }));
  };

  const handleApply = () => {
    setFilters(local);
  };

  const handleReset = () => {
    const resetFilters: ProductsFilters = {};
    setLocal(resetFilters);
    setFilters(resetFilters);
  };

  return (
    <Toolbar
      sx={{
        borderRadius: 3,
        boxShadow: 0,
        mb: 3,
        p: { xs: 1, sm: 2 },
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "unset",
        border: "2px solid #ddd",
        margin: "35px 0"
      }}
    >
      {/* Диапазон цены */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center"
        }}
      >
        <TextField
          label="Min Price"
          type="number"
          name="min_price"
          value={local.min_price ?? ""}
          onChange={e => {
            setLocal(prev => ({
              ...prev,
              [e.target.name]:
                e.target.value === "" ? undefined : Number(e.target.value)
            }));
          }}
          size="small"
          sx={{ width: 90 }}
          inputProps={{ min: 0 }}
        />
        <TextField
          label="Max Price"
          type="number"
          name="max_price"
          value={local.max_price ?? ""}
          onChange={e => {
            setLocal(prev => ({
              ...prev,
              [e.target.name]:
                e.target.value === "" ? undefined : Number(e.target.value)
            }));
          }}
          size="small"
          sx={{ width: 90 }}
          inputProps={{ min: 0 }}
        />
      </Box>

      {/* Рейтинг */}
      <Box sx={{ minWidth: 140, px: 1 }}>
        <InputLabel shrink sx={{ fontSize: 13, mb: 1 }}>
          Rating
        </InputLabel>
        <Slider
          value={local.rating_min ?? 0}
          min={0}
          max={5}
          step={0.5}
          marks={[
            { value: 0, label: "Any" },
            { value: 3, label: "3+" },
            { value: 4, label: "4+" },
            { value: 5, label: "5" }
          ]}
          onChange={handleRating}
          valueLabelDisplay="auto"
          size="small"
        />
      </Box>

      {/* Сортировка */}
      <ToggleButtonGroup
        exclusive
        value={
          local.sort_by && local.sort_order
            ? `${local.sort_by},${local.sort_order}`
            : ""
        }
        onChange={handleSort}
        size="small"
        sx={{ ml: 1 }}
      >
        <ToggleButton value="" sx={{ fontWeight: 500 }}>
          Default
        </ToggleButton>
        <ToggleButton value="price,asc">Price ↑</ToggleButton>
        <ToggleButton value="price,desc">Price ↓</ToggleButton>
        <ToggleButton value="rating,desc">Popular</ToggleButton>
      </ToggleButtonGroup>

      {/* Switch: В наличии и Со скидкой */}
      <FormGroup row sx={{ minWidth: 160, ml: 1 }}>
        <FormControlLabel
          control={
            <Switch
              checked={!!local.in_stock}
              name="in_stock"
              onChange={handleSwitch}
              color="primary"
            />
          }
          label="In Stock"
        />
        <FormControlLabel
          control={
            <Switch
              checked={!!local.discounted}
              name="discounted"
              onChange={handleSwitch}
              color="primary"
            />
          }
          label="Discounted"
        />
      </FormGroup>

      {/* Кнопки */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1.5,
          mt: { xs: 2, sm: 0 }
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleApply}
          sx={{ minWidth: 90, borderRadius: 2 }}
        >
          Apply
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleReset}
          sx={{ minWidth: 90, borderRadius: 2, fontWeight: 600 }}
        >
          Reset
        </Button>
      </Box>
    </Toolbar>
  );
}

export default Filters;
