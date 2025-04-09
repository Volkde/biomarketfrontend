import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductsGrid } from "components/ProductsGrid";
import { useTranslation } from "react-i18next";
import { Banner } from "../Banner";

function Root() {
  const { t } = useTranslation("page-home");

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Banner />
      <Typography variant="h2" component="h2">
        Top Categories
      </Typography>
      <Typography variant="h2" component="h2">
        {t("Products")}
      </Typography>
      <ProductsGrid filters={false} limit={8} page={1} pagination={true} />
    </Container>
  );
}

export default Root;
