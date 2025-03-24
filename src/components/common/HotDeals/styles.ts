import { Box, Typography, Button, styled } from "@mui/material";

export const Container = styled(Box)({
  width: "100%",
  maxWidth: "1200px",
  margin: "40px auto",
  padding: "0 20px",
});

export const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  flexWrap: "wrap",
});

export const Title = styled(Typography)({
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0",
  color: "#333",
});

export const Countdown = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

export const CountdownItem = styled(Typography)({
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
});

export const CountdownSeparator = styled(Typography)({
  fontSize: "14px",
  color: "#333",
});

export const Controls = styled(Box)({
  display: "flex",
  gap: "10px",
});

export const ControlButton = styled(Button)({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "rgb(118, 150, 62)",
  color: "white",
  minWidth: "unset",
  padding: 0,
  "&:hover": {
    backgroundColor: "rgb(100, 130, 50)",
  },
});

export const ProductsContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
});

export const BestSeller = styled(Box)({
  flex: "1 1 250px",
  minHeight: "300px",
  borderRadius: "8px",
  overflow: "hidden",
  position: "relative",
  backgroundImage: "url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
});

export const BestSellerContent = styled(Box)({
  padding: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "8px 8px 0 0",
});

export const BestSellerTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 5px 0",
  color: "#333",
});

export const BestSellerSubtitle = styled(Typography)({
  fontSize: "16px",
  margin: "0 0 15px 0",
  color: "#666",
});

export const BestSellerPrice = styled(Box)({
  position: "relative",
  display: "inline-block",
});

export const PriceTag = styled(Typography)({
  display: "block",
  backgroundColor: "#e6c619",
  color: "white",
  padding: "5px 10px",
  borderRadius: "15px 15px 0 15px",
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "center",
});

export const Price = styled(Typography)({
  display: "block",
  backgroundColor: "#e6c619",
  color: "white",
  padding: "5px 10px",
  borderRadius: "0 0 15px 15px",
  fontSize: "22px",
  fontWeight: "bold",
  textAlign: "center",
});

export const ProductCard = styled(Box)({
  flex: "1 1 250px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

export const ProductLink = styled(Box)({
  textDecoration: "none",
  color: "inherit",
  display: "block",
});

export const ProductImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderBottom: "1px solid #eee",
});

export const ProductInfo = styled(Box)({
  padding: "15px",
});

export const ProductName = styled(Typography)({
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
  color: "#333",
  textAlign: "center",
});

export const ProductPrice = styled(Typography)({
  fontSize: "18px",
  color: "#666",
  margin: "0 0 10px 0",
  textAlign: "center",
});

export const ProductRating = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2px",
});