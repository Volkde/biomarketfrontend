import { RootState } from "store/store";
import { CheckoutState } from "../types/CheckoutState";
import { CartItem } from "src/types/CartItem";

export const selectCheckoutState = (state: RootState): CheckoutState => state.CHECKOUT;

export const selectShippingAddress = (state: RootState) => selectCheckoutState(state).shippingAddress;
export const selectPaymentMethod = (state: RootState) => selectCheckoutState(state).paymentMethod;
export const selectOrder = (state: RootState) => selectCheckoutState(state).order;
export const selectError = (state: RootState) => selectCheckoutState(state).error;
export const selectStatus = (state: RootState) => selectCheckoutState(state).status;

export const selectCartItems = (state: RootState): CartItem[] => selectCheckoutState(state).cartItems || [];
