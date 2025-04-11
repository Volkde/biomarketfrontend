import { Box, Breadcrumbs, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const { t } = useTranslation("page-error");
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
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
