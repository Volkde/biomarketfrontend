import { Box, Toolbar } from "@mui/material";
import type { MainProps } from "./types.ts";

function Main({ children }: MainProps) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Toolbar />
      {children}
    </Box>
  );
}

export default Main;
