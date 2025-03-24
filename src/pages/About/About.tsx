import { Typography } from "@mui/material";
import { StyledPageWrapper, StyledText } from "./styles";

function About() {
  return (
    <StyledPageWrapper>
      <Typography variant="h1" component="h2">
        About
      </Typography>
      <StyledText>Разработчики</StyledText>
      <StyledText>Backend:</StyledText>
      <ul>
        <li>Nesterov Ilya</li>
        <li>Saratov Sergej</li>
        <li>Tereshchenko Kristina</li>
      </ul>
      <StyledText>Frontend:</StyledText>
      <ul>
        <li>Stoianov Maksym</li>
        <li>Demishev Oleh</li>
        <li>Fesenko Bogdan</li>
        <li>Rotärmel Eugen</li>
      </ul>
      <StyledText>QA:</StyledText>
      <ul>
        <li>Darievych Maryna</li>
        <li>Kharina Olga</li>
      </ul>
    </StyledPageWrapper>
  );
}

export default About;
