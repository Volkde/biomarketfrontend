import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import { store } from "../store/store.ts";
import theme from "../theme/index.ts";
import { routes } from "./routes.ts";
import GlobalStyles from "../styles/GlobalStyles.tsx";

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
