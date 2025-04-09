import { ReduxStateStatus } from "types/ReduxStateStatus";
import { User } from "types/User";

export interface UsersState {
  status: ReduxStateStatus;
  users: User[];
  user?: User;
  error?: string;
}
