import { createAppSlice } from "store/createAppSlice";
import { UsersState } from "../types/UsersState";

const initialState: UsersState = {
  status: "default",
  users: [],
  user: undefined,
  error: undefined
};

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState,
  reducers: create => ({
    /**
     * resetUsersState
     */
    resetUsersState: create.reducer(() => initialState)
  })
});

export const {
  actions: usersActions,
  reducer: usersReducer,
  selectors: usersSelectors
} = usersSlice;
