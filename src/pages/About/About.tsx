import { Container, Link, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";

function About() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        sx={{
          marginBottom: "25px"
        }}
      >
        The project was implemented thanks to the coordinated work of a team
        that included frontend and backend developers, as well as UX/UI
        specialists.
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom>
        Backend
      </Typography>
      <ul>
        <li>
          <Link href="https://github.com/Volkde" color="inherit">
            Nesterov Ilya
          </Link>
        </li>
        <li>Saratov Sergej</li>
        <li>Tereshchenko Kristina</li>
      </ul>
      <Typography variant="h6" component="h6" gutterBottom>
        Frontend
      </Typography>
      <ul>
        <li>Stoianov Maksym</li>
        <li>Demishev Oleh</li>
        <li>Fesenko Bogdan</li>
        <li>Rotärmel Eugen</li>
      </ul>
      <Typography variant="h6" component="h6" gutterBottom>
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
