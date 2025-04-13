import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckoutState } from '../types/CheckoutState';
import { CartItem } from 'src/types/CartItem';

const initialState: CheckoutState = {
  status: 'idle',
  cartItems: [] as CartItem[],
  shippingAddress: null,
  paymentMethod: null,
  order: null,
  error: null,
};

export const checkoutSlice = createSlice({
  name: 'CHECKOUT',
  initialState,
  reducers: {
    setShippingAddress: (state, action: PayloadAction<CheckoutState['shippingAddress']>) => {
      state.shippingAddress = action.payload;
    },
    setPaymentMethod: (state, action: PayloadAction<CheckoutState['paymentMethod']>) => {
      state.paymentMethod = action.payload;
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
    placeOrderSuccess: (state, action: PayloadAction<CheckoutState['order']>) => {
      state.order = action.payload;
      state.status = 'succeeded';
    },
    placeOrderFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = 'failed';
    },
    resetCheckout: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const checkoutActions = checkoutSlice.actions;
export const checkoutReducer = checkoutSlice.reducer;
