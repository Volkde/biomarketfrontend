import { HTMLAttributes } from "react";

export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
  apiUrl: string;
  onSearchResults?: (results: any[]) => void;
}
