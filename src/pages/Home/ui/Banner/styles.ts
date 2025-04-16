import { styled } from "@mui/material/styles";

export const SliderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 20px",
  height: "300px"
}));

export const Slide = styled("div")<{
  image: string;
}>(({ image }) => ({
  height: "300px",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "12px",
  position: "relative"
}));

export const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "40px",
  transform: "translateY(-50%)",
  color: theme.palette.common.white,
  maxWidth: "50%"
}));

export const Title = styled("h2")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "2rem",
  marginBottom: "0.5rem",
  fontWeight: theme.typography.fontWeightBold
}));

export const Subtitle = styled("p")(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "1.2rem",
  marginBottom: "2rem"
}));

export const SlideButton = styled("a")(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.common.white,
  padding: "10px 20px",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: 500,
  transition: "background 0.3s ease",

  "&:hover": {
    background: theme.palette.success.dark
  }
}));
