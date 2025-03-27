import { Box } from "@mui/material";
import { CartSidebar } from "components/CartSidebar";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { NavSidebar } from "components/NavSidebar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <Box>
      <Header />
      <NavSidebar />
      <CartSidebar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Box>
  );
}

export default Layout;
