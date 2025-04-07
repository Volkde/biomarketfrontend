export interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
}

export interface SearchProps {
  placeholder?: string;
  language?: string; // e.g. "de-DE", "en-US", "ru-RU"
}

// Тип для функции getOptionLabel – принимает string или Product и возвращает строку
export type GetOptionLabel = (option: string | Product) => string;

// Speech Recognition types (используются только в компоненте Search)
export interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

export interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
}

export interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}
