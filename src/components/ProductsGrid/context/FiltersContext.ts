import { createContext, useContext } from "react";
import { ProductsFilters } from "../types/ProductsFilters";

interface FiltersContextProps {
  filters: ProductsFilters;
  setFilters: (filters: ProductsFilters) => void;
}

export const FiltersContext = createContext<FiltersContextProps>({
  filters: {},
  setFilters: () => {}
});

export const useFilters = () => useContext(FiltersContext);
