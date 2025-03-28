import { Typography } from "@mui/material";
import ProductsList from "components/ProductsList/ProductsList";
import { StyledPageWrapper } from "./styles";

const Home = () => {
  return (

   <StyledPageWrapper>
      <Typography variant="h1" component="h2">
        Home
      </Typography>
      <ProductsList />
   </StyledPageWrapper>
  );
};

export default Home;