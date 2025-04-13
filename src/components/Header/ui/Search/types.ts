export interface VoiceSearchProps {
  onSearch: (term: string) => void;
}

export interface SearchHistory {
  searchTerm: string;
  timestamp: number;
}
