import {
  Mic as MicIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchContainer,
  StyledInputBase,
  SearchHistoryContainer,
  StyledSnackbar,
  StyledAlert,
  PulsingIconWrapper
} from "./styles";

const LOCAL_STORAGE_KEY = "search_history";

/**
 * Search component with voice input and history
 */
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Load history on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setSearchHistory(JSON.parse(stored));
    }
  }, []);

  const saveHistory = (newHistory: string[]) => {
    setSearchHistory(newHistory);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newHistory));
  };

  const handleSearch = (term: string) => {
    const cleaned = term.trim();
    if (!cleaned) return;

    navigate(`/search?search_term=${encodeURIComponent(cleaned)}`);
    const newHistory = [cleaned, ...searchHistory.filter(t => t !== cleaned)].slice(0, 5);
    saveHistory(newHistory);
    setShowHistory(false);
  };

  const handleHistoryClick = (term: string) => {
    setSearchTerm(term);
    handleSearch(term);
  };

  const handleCloseError = () => setError(null);
  const handleFocus = () => setShowHistory(true);

  const startVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setError("Your browser does not support voice input.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setIsListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
      handleSearch(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setError("Voice recognition error.");
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <Box position="relative">
      <SearchContainer>
        <StyledInputBase
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          onKeyDown={e => {
            if (e.key === "Enter") handleSearch(searchTerm);
            if (e.key === "Escape") setShowHistory(false);
          }}
        />
        <IconButton onClick={() => handleSearch(searchTerm)}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={startVoiceInput} disabled={isListening}>
          <PulsingIconWrapper active={isListening}>
            <MicIcon color={isListening ? "primary" : "inherit"} />
          </PulsingIconWrapper>
        </IconButton>
        {searchTerm && (
          <IconButton onClick={() => setSearchTerm("")}>
            <CloseIcon />
          </IconButton>
        )}
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
        <StyledAlert severity="error" onClose={handleCloseError}>
          {error}
        </StyledAlert>
      </StyledSnackbar>
    </Box>
  );
};

export default Search;
