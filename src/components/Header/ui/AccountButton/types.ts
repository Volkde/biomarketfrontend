import { MouseEvent } from "react";

export interface AccountButtonProps {
  id: string;
  open: boolean;
  login: boolean;
  userFullName?: string;
  userAvatarUrl?: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
