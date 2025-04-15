import { Container } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SignupForm } from "components/SignupForm";

function Signup() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Breadcrumbs />
      <SignupForm />
    </Container>
  );
}

export default Signup;
