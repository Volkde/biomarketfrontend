import { ThemeProvider } from "@mui/material";
import AppRoutes from "components/AppRoutes/AppRoutes";
import Layout from "components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "components/Cart/Cart";
import Checkout from "pages/Checkout/Checkout";
import { CartProvider } from "../src/contexts/CartContext";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./theme";
import { SearchBar } from "components/common/SearchBar";
import Products from "pages/Products/Products";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Layout>
            <SearchBar apiUrl={""} />
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<AppRoutes />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;