import { useContext } from "react";
import ToolbarContext, { ToolbarContextType } from "../context/ToolbarContext";

export const useToolbarContext = (): ToolbarContextType => {
  const context = useContext(ToolbarContext);

  if (!context) {
    throw new Error("useToolbarContext must be used within a ToolbarProvider");
  }

  return context;
};
