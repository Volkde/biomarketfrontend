import { Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductsGrid } from "components/ProductsGrid";

function Search() {
  // TODO: Получить все get-параметры и передать их в ProductsGrid
  return (
    <>
      <Breadcrumbs />
      <Typography variant="h1" component="h1">
        Search Result
      </Typography>
      <ProductsGrid />
    </>
  );
}

export default Search;
