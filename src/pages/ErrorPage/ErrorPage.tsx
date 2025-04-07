import { Box, Button } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div>
      <h1>Упс! Что-то пошло не так.</h1>
      <p>Мы уже работаем над этим.</p>
      <p>
        <i>{(error as Error)?.message || "Неизвестная ошибка"}</i>
      </p>
      <Box>
        <Button onClick={() => navigate("/")}>На главную</Button>
        <Button onClick={() => navigate(0)}>Обновить страницу</Button>
      </Box>
    </div>
  );
}

export default ErrorPage;
