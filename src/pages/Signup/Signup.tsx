import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SignupForm } from "components/SignupForm";
import { useTranslation } from "react-i18next";

function Signup() {
  const { t } = useTranslation("page-signup");

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      <SignupForm />
    </Container>
  );
}

export default Signup;
