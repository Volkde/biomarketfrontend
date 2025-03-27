import { Box, Typography, styled } from "@mui/material";

export const MainContainer = styled(Box)({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "20px",
});

export const MainTitle = styled(Typography)({
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
});

export const MainContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Section = styled(Box)({
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
});

export const SectionTitle = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#333",
});

export const SectionContent = styled(Box)({
  fontSize: "16px",
  color: "#666",
});