import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import {
  Breadcrumbs,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import {
  Container,
  OptionCategory,
  OptionContainer,
  OptionDetails,
  OptionImage,
  OptionName,
  StyledAutocomplete,
  VoiceButton
} from "./styles";
import {
  GetOptionLabel,
  Product,
  SearchProps,
  SpeechRecognitionEvent
} from "./types";

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const Search = ({
  placeholder = "Produkte suchen…",
  language = "de-DE"
}: SearchProps) => {
  const [input, setInput] = useState<string>("");
  const [listening, setListening] = useState<boolean>(false);

  const debouncedSetInput = useMemo(
    () => debounce((value: string) => setInput(value), 350),
    []
  );

  const { data, isValidating } = useSWR<{ products: Product[] }>(
    input ? `/api/search?query=${encodeURIComponent(input)}` : null,
    fetcher
  );

  // Определяем функцию getOptionLabel с типом GetOptionLabel
  const getOptionLabel: GetOptionLabel = option => {
    if (typeof option === "string") return option;
    return option.name;
  };

  // Приводим getOptionLabel к типу (option: unknown) => string, как требуется Autocomplete
  const handleGetOptionLabel = getOptionLabel as (option: unknown) => string;

  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.start();
    setListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const lastResult = event.results.item(event.resultIndex);
      const transcript = lastResult.transcript;
      setInput(transcript);
      setListening(false);
    };

    recognition.onerror = (event: Event) => {
      console.error("Speech recognition error:", event);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  useEffect(() => {
    return () => {
      debouncedSetInput.cancel();
    };
  }, [debouncedSetInput]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Search
      </Typography>
      <StyledAutocomplete
        freeSolo
        disableClearable
        options={data?.products || []}
        getOptionLabel={handleGetOptionLabel}
        loading={isValidating}
        onInputChange={(_, value) => debouncedSetInput(value)}
        renderInput={params => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#558B2F" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <>
                  {isValidating ? (
                    <CircularProgress color="success" size={20} />
                  ) : null}
                  <VoiceButton onClick={startListening}>
                    <MicIcon
                      style={{ color: listening ? "#FF5722" : "#558B2F" }}
                    />
                  </VoiceButton>
                  {params.InputProps.endAdornment}
                </>
              )
            }}
          />
        )}
        renderOption={(props, option) => {
          if (typeof option === "string") return <li {...props}>{option}</li>;
          const product = option as Product;
          return (
            <OptionContainer {...props}>
              <OptionImage src={product.image} alt={product.name} />
              <OptionDetails>
                <OptionName>{product.name}</OptionName>
                <OptionCategory>
                  {product.category} · {product.price}€
                </OptionCategory>
              </OptionDetails>
            </OptionContainer>
          );
        }}
      />
    </Container>
  );
};
