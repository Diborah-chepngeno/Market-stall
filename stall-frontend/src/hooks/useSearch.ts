import { useContext } from "react";
import SearchContext, { SearchContextType } from "../context/searchContext";

const useSearch = (): SearchContextType => {
  // ✅ Explicit return type
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export default useSearch;
