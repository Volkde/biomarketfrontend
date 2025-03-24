import { ThemeProvider } from "@mui/material";
import AppRoutes from "components/AppRoutes/AppRoutes";
import Layout from "components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <AppRoutes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
