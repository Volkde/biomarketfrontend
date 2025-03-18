import Button from "components/Button/Button";
import { Title } from "components/Title";
import { useNavigate } from "react-router-dom";
import { StyledPageWrapper } from "./styles";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <StyledPageWrapper>
      <Title content="404. Not Found" />
      <p>
        <Button name="На главную" onClick={() => navigate("/")} />
      </p>
    </StyledPageWrapper>
  );
}

export default NotFoundPage;
