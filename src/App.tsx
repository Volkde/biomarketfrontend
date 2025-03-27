import { ThemeProvider } from "@mui/material";
import Cart from "components/Cart/Cart";
import Search from "components/Header/ui/Search/Search";
import Layout from "components/Layout/Layout";
import AuthForm from "components/LoginForm/LoginForm";
import PrivateRoute from "components/PrivateRoute";
import Checkout from "pages/Checkout/Checkout";
import Dashboard from "pages/Dashboard/Dashboard";
import Products from "pages/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "../src/contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./theme";

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
