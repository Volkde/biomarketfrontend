import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledPageWrapper } from "./styles";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <StyledPageWrapper>
      <Typography variant="h1" component="h2">
        404. Not Found
      </Typography>
      <p>
        <button onClick={() => navigate("/")}>На главную</button>
      </p>
    </StyledPageWrapper>
  );
}

export default NotFoundPage;
