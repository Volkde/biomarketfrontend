import { Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { LoginForm } from "components/LoginForm";

function Login() {
  return (
    <>
      <Breadcrumbs />
      <Typography variant="h1" component="h1">
        Login
      </Typography>
      <LoginForm />
    </>
  );
}

export default Login;
