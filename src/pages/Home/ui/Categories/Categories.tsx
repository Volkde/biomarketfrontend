import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { categories } from "app/categories";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Categories() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)"
        },
        gap: 3
      }}
    >
      {Object.values(categories).map(({ id, title, path, icon: Icon }) => (
        <Card
          key={id}
          sx={{
            boxShadow: "none",
            borderRadius: "8px",
            textAlign: "center",
            backgroundColor: alpha(theme.palette.primary.main, 0.75)
          }}
        >
          <CardActionArea onClick={() => navigate(path)} sx={{ p: 1 }}>
            <Icon
              sx={{
                position: "absolute",
                zIndex: 0,
                opacity: 0.3,
                fontSize: 75,
                mb: 1,
                top: "15px",
                left: "-15px",
                color: alpha("#fff", 0.75)
              }}
            />
            <CardContent>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#fff"
                }}
              >
                {t(title)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Categories;
