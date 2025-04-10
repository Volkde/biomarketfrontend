import { Container, Divider, List, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { UserCard } from "../UserCard";

function Root() {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography
        variant="body1"
        component="p"
        gutterBottom
        sx={{
          marginBottom: "25px"
        }}
      >
        <b>FramVibe</b> is a web application for selling eco-friendly products.
      </Typography>
      <Typography variant="h4" component="h2" gutterBottom>
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
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <UserCard
          fullName="Nesterov Ilya"
          url="https://github.com/Volkde"
          avatar=""
          role="Team Lead and Backend Developer"
          description=""
        />
        <Divider variant="inset" component="li" />
        <UserCard
          fullName="Saratov Sergej"
          url="https://github.com/s-saratov"
          avatar=""
          role="Senior Backend Developer"
          description=""
        />
        <Divider variant="inset" component="li" />
        <UserCard
          fullName="Tereshchenko Kristina"
          url="https://github.com/Kristovinka"
          avatar="https://avatars.githubusercontent.com/u/57185114?v=4"
          role="Backend Developer"
          description=""
        />
      </List>
      <Typography
        variant="h6"
        component="h6"
        gutterBottom
        sx={{
          marginTop: "25px"
        }}
      >
        Frontend
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <UserCard
          fullName="Stoianov Maksym"
          url="https://github.com/MaksymStoianov"
          avatar="https://avatars.githubusercontent.com/u/40547512?v=4"
          role="Senior Frontend Developer"
          description=""
        />
        <Divider variant="inset" component="li" />
        <UserCard
          fullName="Demishev Oleh"
          url="https://github.com/OlehDemishev"
          avatar=""
          role="Frontend Developer"
          description=""
        />
        <Divider variant="inset" component="li" />
        <UserCard
          fullName="Fesenko Bogdan"
          url="https://github.com/Kitasurfer"
          avatar="https://avatars.githubusercontent.com/u/154629591?v=4"
          role="Frontend Developer"
          description=""
        />
        <Divider variant="inset" component="li" />
        <UserCard
          fullName="Rotärmel Eugen"
          url="https://github.com/Omega-Red-Coder"
          avatar=""
          role="Frontend Developer"
          description=""
        />
      </List>
      <Typography
        variant="h6"
        component="h6"
        gutterBottom
        sx={{
          marginTop: "25px"
        }}
      >
        QA
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <UserCard
          fullName="Darievych Maryna"
          url=""
          avatar=""
          role="QA"
          description=""
        />
        <Divider variant="inset" component="li" />
        <UserCard
          fullName="Kharina Olga"
          url=""
          avatar=""
          role="QA"
          description=""
        />
      </List>
    </Container>
  );
}

export default Root;
