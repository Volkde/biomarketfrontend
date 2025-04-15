import { PaletteOptions } from "@mui/material";

export const getPalette = (mode: "light" | "dark"): PaletteOptions => ({
  mode,
  ...(mode === "light"
    ? {
        primary: {
          main: "#659833"
        },
        secondary: {
          main: "#f5f6fb"
        },
        background: {
          default: "#f4f6f8",
          paper: "#ffffff"
        },
        text: {
          primary: "#212121",
          secondary: "#757575"
        },
        divider: "#f5f6fb"
      }
    : {
        primary: {
          main: "#90caf9"
        },
        secondary: {
          main: "#f5f6fb"
        },
        background: {
          default: "#121212",
          paper: "#1d1d1d"
        },
        text: {
          primary: "#212121",
          secondary: "#757575"
        },
        divider: "#f5f6fb"
      })
});
