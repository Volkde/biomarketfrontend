import { ThemeProvider } from "@mui/material";
import { createHashRouter, RouterProvider } from "react-router";
import { useAppSelector } from "store/hooks.ts";
import { selectThemeState } from "store/redux/ui/selectors/selectThemeState.ts";
import { getAppTheme } from "theme/index.ts";
import GlobalStyles from "../styles/GlobalStyles.tsx";
import { routes } from "./routes.ts";

const router = createHashRouter(routes);

function App() {
  const { mode } = useAppSelector(selectThemeState);

  return (
    <ThemeProvider theme={getAppTheme(mode)}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
