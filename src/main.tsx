import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";

const container = document.getElementById("root");

// TODO: Что принято выносить в main.tsx а что в App.tsx

if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  throw new Error("Root element with ID 'root' was not found in the document.");
}
