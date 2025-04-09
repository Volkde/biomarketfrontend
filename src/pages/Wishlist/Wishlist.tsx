import { Breadcrumbs, Container, Typography } from "@mui/material";

function Wishlist() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Wishlist
      </Typography>
    </Container>
  );
}

export default Wishlist;
