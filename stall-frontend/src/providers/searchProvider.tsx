import { ReactNode, useState } from "react";
import SearchContext from "../context/searchContext";

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
