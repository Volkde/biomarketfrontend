import { Mic as MicIcon, Search as SearchIcon } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import {
  SearchContainer,
  SearchHistoryContainer,
  StyledAlert,
  StyledInputBase,
  StyledSnackbar,
} from "./styles";
import { SearchProps } from "./types";

const Search = ({ apiUrl, onSearchResults }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleSearch = useCallback(
    debounce(async (term: string) => {
      if (!term) return;

      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}?q=${term}`);
        console.log("Search results:", response.data);
        if (onSearchResults) {
          onSearchResults(response.data);
        }
        setSearchHistory(prev => [term, ...prev.slice(0, 4)]);
      } catch (err) {
        setError("Ошибка при выполнении поиска");
        console.error("Search error:", err);
      } finally {
        setLoading(false);
        setShowHistory(false);
      }
    }, 500),
    [apiUrl, onSearchResults],
  );

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm, handleSearch]);

  const handleCloseError = () => {
    setError(null);
  };

  const handleFocus = () => {
    setShowHistory(true);
  };

  const handleHistoryClick = (term: string) => {
    setSearchTerm(term);
    handleSearch(term);
  };

  const startVoiceInput = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      setError("Ошибка при распознавании голоса");
      setIsListening(false);
    };
  };

  return (
    <Box position="relative" width="100%">
      <SearchContainer>
        <StyledInputBase
          placeholder="Поиск..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
        />
        <IconButton onClick={() => handleSearch(searchTerm)} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : <SearchIcon />}
        </IconButton>
        <IconButton onClick={startVoiceInput} disabled={isListening}>
          <MicIcon />
        </IconButton>
      </SearchContainer>

      {showHistory && searchHistory.length > 0 && (
        <SearchHistoryContainer>
          <List>
            {searchHistory.map((term, index) => (
              <ListItem
                component="button"
                key={index}
                onClick={() => handleHistoryClick(term)}
              >
                <ListItemText primary={term} />
              </ListItem>
            ))}
          </List>
        </SearchHistoryContainer>
      )}

      <StyledSnackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <StyledAlert onClose={handleCloseError} severity="error">
          {error}
        </StyledAlert>
      </StyledSnackbar>
    </Box>
  );
};

export default Search;
