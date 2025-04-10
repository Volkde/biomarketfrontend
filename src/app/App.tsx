import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router";
import { store } from "../store/store.ts";
import GlobalStyles from "../styles/GlobalStyles.tsx";
import theme from "../theme/index.ts";
import { routes } from "./routes.ts";

function App() {
  const router = createHashRouter(routes);

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
