import React, { useState, useCallback } from 'react';
import { FaSearch, FaMicrophone, FaTimes, FaSpinner } from 'react-icons/fa';
import { Box, TextField, IconButton, CircularProgress } from '@mui/material';
import { SearchContainer, SearchInput } from './styles';
import { useSearch } from './useSearch';

interface SearchBarProps {
  apiUrl: string;
  placeholder?: string;
}

const SearchBar = ({ apiUrl, placeholder = "Search Your Product" }: SearchBarProps) => {
  const { 
    query, 
    setQuery, 
    suggestions, 
    isFocused, 
    setIsFocused, 
    isLoading, 
    error, 
    clearSearch 
  } = useSearch(apiUrl);
  const [isListening, setIsListening] = useState(false);

  const startListening = useCallback(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.lang = 'en-US'; // Можно изменить на нужный язык
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        setQuery(event.results[0][0].transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  }, [setQuery]);

  return (
    <SearchContainer>
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <IconButton>
              <FaSearch />
            </IconButton>
          ),
          endAdornment: (
            <>
              {isLoading && <CircularProgress size={20} className="spin-animation" />}
              {query && (
                <IconButton onClick={clearSearch}>
                  <FaTimes />
                </IconButton>
              )}
              <IconButton onClick={startListening}>
                <FaMicrophone />
              </IconButton>
            </>
          ),
        }}
      />
    </SearchContainer>
  );
};

export default SearchBar;