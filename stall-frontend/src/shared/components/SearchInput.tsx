import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useSearch from "../../hooks/useSearch";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setSearch } = useSearch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search by name"
          variant="fille"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
