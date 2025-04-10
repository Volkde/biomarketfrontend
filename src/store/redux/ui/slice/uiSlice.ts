import { createAppSlice } from "store/createAppSlice";
import { UiState } from "../types/UiState";

const initialState: UiState = {
  isCartPanelOpen: false
};

export const uiSlice = createAppSlice({
  name: "UI",
  initialState,
  reducers: create => ({
    /**
     * openCartPanel
     */
    openCartPanel: state => {
      state.isCartPanelOpen = true;
    },

    /**
     * closeCartPanel
     */
    closeCartPanel: state => {
      state.isCartPanelOpen = false;
    },

    /**
     * toggleCartPanel
     */
    toggleCartPanel: state => {
      state.isCartPanelOpen = !state.isCartPanelOpen;
    },

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
