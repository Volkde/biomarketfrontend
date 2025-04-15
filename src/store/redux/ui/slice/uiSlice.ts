import { createAppSlice } from "store/createAppSlice";
import { UiState } from "../types/UiState";

const initialState: UiState = {
  isCartPanelOpen: false,
  isSidebarPanelOpen: false
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
     * openSidebarPanel
     */
    openSidebarPanel: state => {
      state.isSidebarPanelOpen = true;
    },

    /**
     * closeSidebarPanel
     */
    closeSidebarPanel: state => {
      state.isSidebarPanelOpen = false;
    },

    /**
     * toggleSidebarPanel
     */
    toggleSidebarPanel: state => {
      state.isSidebarPanelOpen = !state.isSidebarPanelOpen;
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
