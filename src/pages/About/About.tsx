import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        About
      </Typography>
      <Typography variant="h2" component="h2">
        Разработчики
      </Typography>
      <Typography variant="h3" component="h3">
        Backend
      </Typography>
      <ul>
        <li>Nesterov Ilya</li>
        <li>Saratov Sergej</li>
        <li>Tereshchenko Kristina</li>
      </ul>
      <Typography variant="h3" component="h3">
        Frontend
      </Typography>
      <ul>
        <li>Stoianov Maksym</li>
        <li>Demishev Oleh</li>
        <li>Fesenko Bogdan</li>
        <li>Rotärmel Eugen</li>
      </ul>
      <Typography variant="h3" component="h3">
        QA
      </Typography>
      <ul>
        <li>Darievych Maryna</li>
        <li>Kharina Olga</li>
      </ul>
    </Container>
  );
}

export default About;
