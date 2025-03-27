import { Search as SearchIcon } from "@mui/icons-material";
import { StyledInput, StyledSearch, StyledSearchIconWrapper } from "./styles";
import { SearchProps } from "./types";

function Search(props: SearchProps) {
  return (
    <StyledSearch
      role="search"
      {...props}
      style={{
        backgroundColor: "rgb(0 0 0 / 5%)",
      }}
    >
      <StyledSearchIconWrapper>
        <SearchIcon />
      </StyledSearchIconWrapper>
      <StyledInput
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </StyledSearch>
  );
}

export default Search;
