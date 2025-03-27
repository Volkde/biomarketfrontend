import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "hooks/useDebounce";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

export function useSearch(apiUrl: string, debounceDelay = 300) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedQuery = useDebounce(query, debounceDelay);

  const fetchSuggestions = useCallback(async (searchQuery: string) => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${apiUrl}?q=${encodeURIComponent(searchQuery)}`);
      
      if (!response.ok) {
        throw new Error(`Ошибка API: ${response.status}`);
      }
      
      const data = await response.json();
      setSuggestions(data.content || []);
    } catch (error) {
      console.error("Ошибка при поиске:", error);
      setError(error instanceof Error ? error.message : "Ошибка при поиске");
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchSuggestions(debouncedQuery);
  }, [debouncedQuery, fetchSuggestions]);
  
  const clearSearch = useCallback(() => {
    setQuery("");
    setSuggestions([]);
    setError(null);
  }, []);

  return { 
    query, 
    setQuery, 
    suggestions, 
    isFocused, 
    setIsFocused, 
    isLoading, 
    error,
    clearSearch
  };
}
