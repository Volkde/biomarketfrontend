import { Breadcrumbs, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Terms() {
  const { t } = useTranslation("page-terms");

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      <p>Мы работаем над этим.</p>
    </Container>
  );
}

export default Terms;
