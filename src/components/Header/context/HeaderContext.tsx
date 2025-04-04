import { createContext } from "react";

export type HeaderContextType = {
  sidebarIsOpen: boolean;
  handleSidebarOpen?: () => void;
  handleSidebarClose?: () => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export default HeaderContext;
