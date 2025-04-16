import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsFilters } from "../types/ProductsFilters";

export function useSyncFiltersWithUrl(
  filters: ProductsFilters,
  setFilters: (filters: ProductsFilters) => void
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const hasSyncedFromUrl = useRef(false);

  // Сначала один раз синхронизируем filters из URL
  useEffect(() => {
    if (hasSyncedFromUrl.current) return;

    const newFilters: ProductsFilters = {};
    searchParams.forEach((value, key) => {
      if (!isNaN(Number(value))) {
        newFilters[key as keyof ProductsFilters] = Number(value) as any;
      } else if (value === "true" || value === "false") {
        newFilters[key as keyof ProductsFilters] = (value === "true") as any;
      } else {
        newFilters[key as keyof ProductsFilters] = value as any;
      }
    });

    setFilters(newFilters);
    hasSyncedFromUrl.current = true;
  }, [searchParams, setFilters]);

  // Затем обновляем URL при изменении filters
  useEffect(() => {
    if (!hasSyncedFromUrl.current) return;

    const newParams: Record<string, string> = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        newParams[key] = String(value);
      }
    });

    setSearchParams(newParams, { replace: true });
  }, [filters, setSearchParams]);
}
