import { categories } from "app/categories";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsFilters } from "../types/ProductsFilters";

function parseSearchParams(searchParams: URLSearchParams): ProductsFilters {
  const parsed: ProductsFilters = {};
  searchParams.forEach((value, key) => {
    if (key === "category") {
      const category = categories[value];

      if (category) {
        parsed["category_id"] = category.id;
      }

      parsed["category"] = value as any;
    } else if (value === "true" || value === "false") {
      parsed[key as keyof ProductsFilters] = (value === "true") as any;
    } else if (!isNaN(Number(value))) {
      parsed[key as keyof ProductsFilters] = Number(value) as any;
    } else {
      parsed[key as keyof ProductsFilters] = value as any;
    }
  });
  return parsed;
}

function areFiltersEqual(a: ProductsFilters, b: ProductsFilters): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function useSyncFiltersWithUrl(
  filters: ProductsFilters,
  setFilters: (filters: ProductsFilters) => void
) {
  const [searchParams, setSearchParams] = useSearchParams();
  const lastSyncedFilters = useRef<ProductsFilters>({});

  // Слушаем изменения в searchParams (например, ручное редактирование URL)
  useEffect(() => {
    const parsed = parseSearchParams(searchParams);

    if (!areFiltersEqual(parsed, lastSyncedFilters.current)) {
      lastSyncedFilters.current = parsed;
      setFilters(parsed);
    }
  }, [searchParams, setFilters]);

  // Слушаем изменения filters и обновляем URL (если filters изменились вручную)
  useEffect(() => {
    if (areFiltersEqual(filters, lastSyncedFilters.current)) return;

    lastSyncedFilters.current = filters;

    const newParams: Record<string, string> = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        newParams[key] = String(value);
      }
    });

    setSearchParams(newParams, { replace: true });
  }, [filters, setSearchParams]);
}
