import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useTranslation } from "react-i18next";

function Wishlist() {
  const { t } = useTranslation("page-wishlist");

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
    </Container>
  );
}

export default Wishlist;
