import { createAppSlice } from "store/createAppSlice";
import { SellersState } from "../types/SellersState";

const initialState: SellersState = {
  status: "default",
  sellers: [],
  seller: undefined,
  error: undefined
};

export const sellersSlice = createAppSlice({
  name: "SELLERS",
  initialState,
  reducers: create => ({
    /**
     * resetSellersState
     */
    resetSellersState: create.reducer(() => initialState)
  })
});

export const {
  actions: sellersActions,
  reducer: sellersReducer,
  selectors: sellersSelectors
} = sellersSlice;
