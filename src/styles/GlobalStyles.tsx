// styles/GlobalStyles.tsx
import { GlobalStyles as MuiGlobalStyles } from "@mui/material";

const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      "@import": [
        "url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic)",
        'url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v226/kJF1BvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oDMzByHX9rA6RzaxHMPdY43zj-jCxv3fzvRNU22ZXGJpEpjC_1v-p_4MrImHCIJIZrDCvHOejbd5zrDAt.woff2) format("woff2")'
      ],
      ".material-symbols-outlined": {
        fontFamily: '"Material Symbols Outlined"',
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: "24px",
        lineHeight: 1,
        letterSpacing: "normal",
        textTransform: "none",
        display: "inline-block",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        direction: "ltr",
        WebkitFontFeatureSettings: '"liga"',
        WebkitFontSmoothing: "antialiased"
      },
      ":root": {
        "--primary-color": "#007bff",
        "--secondary-color": "#222222"
      },
      "*": {
        boxSizing: "border-box"
      }
    }}
  />
);

export default GlobalStyles;
