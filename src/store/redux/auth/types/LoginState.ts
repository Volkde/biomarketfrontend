import { User } from "types/User";

export interface LoginState {
  status: "default" | "loading" | "success" | "error";
  error?: string;
  isAuthenticated: boolean;
  user?: User;
}
