import { Button, Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Login 404. Not Found
      </Typography>
      <p>
        <Button onClick={() => navigate("/")}>На главную</Button>
      </p>
    </Container>
  );
}

export default NotFound;
