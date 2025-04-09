import { Address } from "types/Address";
import { ReduxStateStatus } from "types/ReduxStateStatus";

export interface AddressState {
  status: ReduxStateStatus;
  addresses?: Address[];
  address?: Address;
  error?: string;
}
