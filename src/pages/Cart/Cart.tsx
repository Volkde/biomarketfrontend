import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useTranslation } from "react-i18next";

function Cart() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Cart
      </Typography>
      <p>{t("title", { name: "John" })}</p>
    </Container>
  );
}

export default Cart;
