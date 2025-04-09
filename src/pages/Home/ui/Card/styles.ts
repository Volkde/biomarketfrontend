import { Box, styled, Typography } from "@mui/material";


export const CardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "300px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  border: `2px solid ${theme.palette.divider}`,
  padding: "0",
  transition: "all ease 0.4s",
  marginBottom: "30px",
  boxShadow: "none",
  textAlign: "center",

  "&:hover": {
    borderColor: theme.palette.primary.main,

    "& img": {
      transform: "scale(1.15)",
      transition: "transform 0.4s ease"
    }
  }
}));

export const ImageWrapper = styled(Box)`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all ease 0.4s;
`;

export const Image = styled("img")`
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
`;

export const ContentWrapper = styled(Box)`
  position: relative;
  background-color: ${({ theme }) => theme.palette.divider};
  padding: 20px 0;
`;

export const Title = styled("h3")`
  font-weight: 700;
  font-size: 15px;
  margin: 0 0 5px 0;
  line-height: 1.3;
`;

export const Subtitle = styled("p")`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

export const Description = styled("p")`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Footer = styled(Box)`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: #6b7280;
`;