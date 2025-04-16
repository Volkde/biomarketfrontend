import { Box, Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Banner } from "../Banner";
import { Categories } from "../Categories";

function Root() {
  const { t } = useTranslation("page-home");

  return (
    <Box sx={{ minHeight: "100vh", py: 4 }}>
      <Container maxWidth="lg">
        <Breadcrumbs />
        <Banner />

        {/* Categories */}
        <Box component="section" sx={{ my: 10 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {t("Categories")}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            {t("categoriesSubtitle")}
          </Typography>
          <Categories />
        </Box>
      </Container>
    </Box>
  );
}

export default Root;
