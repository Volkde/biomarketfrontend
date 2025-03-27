import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./app/routes.ts";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./theme";

function App() {
  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
