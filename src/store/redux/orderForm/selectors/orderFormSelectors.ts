import { OrderFormState } from "../types/OrderFormState";
import { RootState } from "../../../store";

export const getCartItems = (state: RootState): OrderFormState["cartItems"] =>
  state.ORDER_FORM.cartItems;

export const getShippingAddress = (state: RootState): OrderFormState["shippingAddress"] =>
  state.ORDER_FORM.shippingAddress;

export const getPaymentMethod = (state: RootState): OrderFormState["paymentMethod"] =>
  state.ORDER_FORM.paymentMethod;

export const getOrderFormStatus = (state: RootState): OrderFormState["status"] =>
  state.ORDER_FORM.status;

export const getOrderFormError = (state: RootState): OrderFormState["error"] =>
  state.ORDER_FORM.error;

export const orderFormSelectors = {
  getCartItems,
  getShippingAddress,
  getPaymentMethod,
  getOrderFormStatus,
  getOrderFormError
};
