import { Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SignupForm } from "components/SignupForm";

function Signup() {
  return (
    <>
      <Breadcrumbs />
      <Typography variant="h1" component="h1">
        Signup
      </Typography>
      <SignupForm />
    </>
  );
}

export default Signup;
