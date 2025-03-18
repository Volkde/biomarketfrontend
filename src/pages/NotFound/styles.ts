import styled from "@emotion/styled";
import Button from "components/Button/Button";

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const StyledText = styled.p`
  margin-bottom: 20px;
`;

export const BackButton = styled(Button)`
  padding: 10px 20px;
  font-size: 1em;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color);
  }
`;
