import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "store/createAppSlice";
import { OrderFormState, CartItem, Address } from "../types/OrderFormState";
import { orderFormSelectors } from "../selectors/orderFormSelectors";

const initialState: OrderFormState = {
  status: "idle",
  cartItems: [],
  shippingAddress: null,
  paymentMethod: null,
  error: null,
};

export const orderFormSlice = createAppSlice({
  name: "ORDER_FORM",
  initialState,
  reducers: create => ({
    setCartItems: create.reducer((state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    }),

    setShippingAddress: create.reducer((state, action: PayloadAction<Address>) => {
      state.shippingAddress = action.payload;
    }),

    setPaymentMethod: create.reducer((state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    }),

    resetOrderForm: create.reducer(() => initialState),

    setError: create.reducer((state, action: PayloadAction<string>) => {
      state.error = action.payload;
    }),

    setStatus: create.reducer((state, action: PayloadAction<OrderFormState['status']>) => {
      state.status = action.payload;
    }),
  }),
});

export const {
  actions: orderFormActions,
  reducer: orderFormReducer
} = orderFormSlice;