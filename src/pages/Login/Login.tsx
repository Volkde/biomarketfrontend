import { Container } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { LoginForm } from "components/LoginForm";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation("page-login");

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Breadcrumbs />
      <LoginForm title={t("title")} />
    </Container>
  );
}

export default Login;
