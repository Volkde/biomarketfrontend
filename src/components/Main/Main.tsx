import { Box, Toolbar } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import type { MainProps } from "./types.ts";

function Main({ children }: MainProps) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Breadcrumbs />
      {children}
    </Box>
  );
}

export default Main;
