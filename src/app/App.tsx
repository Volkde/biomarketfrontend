import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router";
import { store } from "../store/store.ts";
import GlobalStyles from "../styles/GlobalStyles.tsx";
import theme from "../theme/index.ts";
import { routes } from "./routes.ts";

function App() {
  const router = createHashRouter(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
