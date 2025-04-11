import { Box } from "@mui/material";
import { AppSnackbar } from "components/AppSnackbar";
import { CartSidebar } from "components/CartSidebar/ui/Root";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { NavSidebar } from "components/NavSidebar";
import { ScrollToTopButton } from "components/ScrollToTopButton";
import { Outlet } from "react-router";

function Layout() {
  return (
    <Box>
      <Header />
      <AppSnackbar />
      <NavSidebar />
      <CartSidebar />
      <ScrollToTopButton />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Box>
  );
}

export default Layout;
