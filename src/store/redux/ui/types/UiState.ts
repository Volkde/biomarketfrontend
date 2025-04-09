import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface UiState {
  status: ReduxStateStatus;
  error?: string;
}
