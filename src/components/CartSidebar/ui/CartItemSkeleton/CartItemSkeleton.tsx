import { Box, Grid, Skeleton } from "@mui/material";

function CartItemSkeleton() {
  return (
    <Grid container direction="row" spacing={2}>
      <Skeleton animation="wave" variant="rectangular" width={50} height={50} />
      <Box sx={{ flexGrow: 1, padding: 0 }}>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" width="75%" />
      </Box>
    </Grid>
  );
}

export default CartItemSkeleton;
