import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";




interface Product {
  id: string;
  name: string;
  price: number;
}

export function useSearch(apiUrl: string, debounceDelay = 300) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedQuery = useDebounce(query, debounceDelay);

  useEffect(() => {
    if (!debouncedQuery) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const response = await fetch(`${apiUrl}?q=${encodeURIComponent(debouncedQuery)}`);
        const data = await response.json();
        setSuggestions(data.content || []);
      } catch (error) {
        console.error("Ошибка при поиске:", error);
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery, apiUrl]);

  return { query, setQuery, suggestions, isFocused, setIsFocused };
}
