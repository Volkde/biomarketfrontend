import { Skeleton, Typography } from "@mui/material";
import { ProductsGrid } from "components/ProductsGrid";

function Root() {
  return (
    <>
      <Skeleton variant="rounded" height={450} />

      <Typography variant="h2" component="h2">
        Top Categories
      </Typography>

      <Typography variant="h2" component="h2">
        Products
      </Typography>

      <ProductsGrid filters={true} limit={8} page={1} pagination={true} />

      <Typography variant="body1" component="p">
        Material UI components Every Material UI component available so far.
        Material UI aims to provide building blocks for developers to create
        great user interfaces using the Material Design guidelines as a
        reference, which we strive to follow where practical. The library
        doesn't necessarily implement the exact specs of every component or
        feature—where official guidelines are incomplete or contradictory,
        maintainers apply common sense along with the latest standards in web
        development.
      </Typography>
    </>
  );
}

export default Root;
