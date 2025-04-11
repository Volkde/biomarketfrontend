import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LogoButtonProps } from "./types";

function LogoButton({ url, alt }: LogoButtonProps) {
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      onClick={() => navigate("/")}
      sx={{
        padding: "0",
        margin: "0",
        minWidth: "0"
      }}
    >
      {url ? (
        <img
          alt={alt}
          src={url}
          style={{
            maxHeight: "60px"
          }}
        />
      ) : (
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
          color="white"
        >
          {alt}
        </Typography>
      )}
    </Button>
  );
}

export default LogoButton;
