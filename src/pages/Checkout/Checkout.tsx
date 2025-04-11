import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useTranslation } from "react-i18next";

function Checkout() {
  const { t } = useTranslation("page-checkout");

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      <p>{t("title", { name: "John" })}</p>
    </Container>
  );
}

export default Checkout;
