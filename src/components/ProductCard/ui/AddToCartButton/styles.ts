import { CSSProperties } from "react";

export const styles = {
  button: {
    position: "absolute" as const,
    top: "3px",
    right: "3px",
    zIndex: 50,
    borderRadius: "50%",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#007bff",
    color: "#fff",
    opacity: 0,
    transform: "translateY(4px) scale(0.9)",
    transition: "all 0.3s ease",
    "&:hover": {
      opacity: 1,
      transform: "translateY(0) scale(1)",
    },
    "&.adding": {
      backgroundColor: "#28a745",
    },
  } as CSSProperties,
};
