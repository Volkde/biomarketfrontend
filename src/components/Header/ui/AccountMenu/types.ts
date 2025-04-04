import { MenuProps } from "@mui/material";

export interface AccountMenuProps extends MenuProps {
  login: boolean;
  handleClose: () => void;
}
