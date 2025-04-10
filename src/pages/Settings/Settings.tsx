import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";

function Settings() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Settings
      </Typography>
    </Container>
  );
}

export default Settings;
