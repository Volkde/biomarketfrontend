import { Box, Breadcrumbs, Button, Container, Typography } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Упс! Что-то пошло не так.
      </Typography>
      <p>Мы уже работаем над этим.</p>
      <p>
        <i>{(error as Error)?.message || "Неизвестная ошибка"}</i>
      </p>
      <Box>
        <Button onClick={() => navigate("/")}>На главную</Button>
        <Button onClick={() => navigate(0)}>Обновить страницу</Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;
