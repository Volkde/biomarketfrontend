import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SignupForm } from "components/SignupForm";

function Signup() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Signup
      </Typography>
      <SignupForm />
    </Container>
  );
}

export default Signup;
