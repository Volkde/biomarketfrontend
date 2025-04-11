import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { LoginForm } from "components/LoginForm";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation("page-login");

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      <LoginForm />
    </Container>
  );
}

export default Login;
