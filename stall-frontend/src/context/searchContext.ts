import { createContext } from "react";

export interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);
export default SearchContext;
