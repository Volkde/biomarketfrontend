import { ThemeProvider } from "@mui/material";
import Layout from "components/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "components/Cart/Cart";
import Checkout from "pages/Checkout/Checkout";
import { CartProvider } from "../src/contexts/CartContext";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./theme";
import Search from "components/Header/ui/Search/Search";
import Products from "pages/Products/Products";
import AuthForm from "components/Auth/AuthForm";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "components/PrivateRoute";
import Dashboard from "pages/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout>
              <Search apiUrl={""} />
              <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/products" element={<Products />} />
                <Route path="/auth" element={<AuthForm />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;