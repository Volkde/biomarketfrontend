import { Box, Grid2, Skeleton, Typography } from "@mui/material";
import { ProductsList } from "components/ProductsList";

function Home() {
  return (
    <>
      <Skeleton variant="rounded" height={450} />

      <Typography variant="h2" component="h2">
        Top Categories
      </Typography>
      <Grid2
        container
        wrap="wrap"
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      >
        {Array.from(new Array(8)).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={210} height={118} />
          </Box>
        ))}
      </Grid2>

      <Typography variant="h2" component="h2">
        Products
      </Typography>

      <ProductsList />
      <Grid2
        container
        wrap="wrap"
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {Array.from(new Array(8)).map((item, index) => (
          <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width={210} height={118} />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        ))}
      </Grid2>

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

export default Home;
