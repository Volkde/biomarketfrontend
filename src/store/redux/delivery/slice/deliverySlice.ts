import { createAppSlice } from "store/createAppSlice";
import { DeliveryState } from "../types/DeliveryState";

const initialState: DeliveryState = {
  status: "default",
  error: undefined
};

export const deliverySlice = createAppSlice({
  name: "DELIVERY",
  initialState,
  reducers: create => ({
    /**
     * resetDeliveryState
     */
    resetDeliveryState: create.reducer(() => initialState)
  })
});

export const {
  actions: deliveryActions,
  reducer: deliveryReducer,
  selectors: deliverySelectors
} = deliverySlice;
