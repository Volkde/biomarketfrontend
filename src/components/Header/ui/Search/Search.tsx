import { Mic as MicIcon, Search as SearchIcon } from "@mui/icons-material";
import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchContainer,
  SearchHistoryContainer,
  StyledAlert,
  StyledInputBase,
  StyledSnackbar
} from "./styles";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = (term: string) => {
    if (!term.trim()) return;

    navigate(`/search?search_term=${encodeURIComponent(term)}`);
    setSearchHistory(prev =>
      [term, ...prev.filter(t => t !== term)].slice(0, 5)
    );
    setShowHistory(false);
  };

  const handleHistoryClick = (term: string) => {
    setSearchTerm(term);
    handleSearch(term);
  };

  const handleCloseError = () => setError(null);

  const handleFocus = () => setShowHistory(true);

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
      handleSearch(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setError("Ошибка при распознавании голоса");
      setIsListening(false);
    };
  };

  return (
    <Box position="relative">
      <SearchContainer>
        <StyledInputBase
          placeholder="Поиск..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={e => {
            if (e.key === "Enter") {
              handleSearch(searchTerm);
            }
          }}
        />
        <IconButton onClick={() => handleSearch(searchTerm)}>
          <SearchIcon />
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
