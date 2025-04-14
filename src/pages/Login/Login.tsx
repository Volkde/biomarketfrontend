import { Container } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { LoginForm } from "components/LoginForm";

function Login() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Breadcrumbs />
      <LoginForm />
    </Container>
  );
}

export default Login;
