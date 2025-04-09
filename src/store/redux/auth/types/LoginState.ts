import { ReduxStateStatus } from "types/ReduxStateStatus";
import { User } from "types/User";

export interface LoginState {
  status: ReduxStateStatus;
  isLogin: boolean;
  user?: User;
  error?: string;
}
