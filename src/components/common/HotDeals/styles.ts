import { Box, Typography, Button, styled } from "@mui/material";

// Контейнер для всего компонента
export const Container = styled(Box)({
  width: "100%",
  maxWidth: "1200px",
  margin: "40px auto",
  padding: "0 20px",
});

// Заголовок и таймер
export const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  flexWrap: "wrap",
});

// Заголовок
export const Title = styled(Typography)({
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
  color: "#333",
});

// Таймер
export const Countdown = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

// Элемент таймера
export const CountdownItem = styled(Typography)({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
});

// Разделитель таймера
export const CountdownSeparator = styled(Typography)({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
});

// Список горячих предложений
export const HotDealsList = styled(Box)({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
});

// Элемент горячего предложения
export const HotDealsItem = styled(Box)({
  flex: "1 1 200px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

// Кнопка "View All"
export const ViewAllButton = styled(Button)({
  marginTop: "20px",
  width: "100%",
  maxWidth: "200px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
});