import { createContext } from "react";

export type ToolbarContextType = {
  orientation: "horizontal" | "vertical";
  dir?: "ltr" | "rtl";
};

const ToolbarContext = createContext<ToolbarContextType | undefined>(undefined);

export default ToolbarContext;
