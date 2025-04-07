import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h1" component="h1">
        404. Not Found
      </Typography>
      <p>
        <button onClick={() => navigate("/")}>На главную</button>
      </p>
    </>
  );
}

export default NotFound;
