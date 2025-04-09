import { createAppSlice } from "store/createAppSlice";
import { UiState } from "../types/UiState";

const initialState: UiState = {
  status: "default",
  error: undefined
};

export const uiSlice = createAppSlice({
  name: "UI",
  initialState,
  reducers: create => ({
    /**
     * resetUiState
     */
    resetUiState: create.reducer(() => initialState)
  })
});

export const {
  actions: uiActions,
  reducer: uiReducer,
  selectors: uiSelectors
} = uiSlice;
