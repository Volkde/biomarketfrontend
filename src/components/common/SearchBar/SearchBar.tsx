import React, { useState, useCallback } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import * as S from './styles';
import { useSearch } from './useSearch';

interface SearchBarProps {
  apiUrl: string;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ apiUrl, placeholder = "Search Your Product" }) => {
  const { query, setQuery, suggestions, isFocused, setIsFocused } = useSearch(apiUrl);
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
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  }, [setQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        placeholder={placeholder}
      />
      <S.SearchButton>
        <FaSearch />
      </S.SearchButton>
      <S.VoiceButton onClick={startListening} isListening={isListening}>
        <FaMicrophone />
      </S.VoiceButton>

      {isFocused && suggestions.length > 0 && (
        <S.SuggestionsList>
          {suggestions.map((product) => (
            <S.SuggestionItem key={product.id}>
              <span>{product.name}</span>
              <span>{product.price} ₽</span>
            </S.SuggestionItem>
          ))}
        </S.SuggestionsList>
      )}
    </S.SearchContainer>
  );
};

export default SearchBar;