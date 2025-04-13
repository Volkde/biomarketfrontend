import { checkoutActions } from './slice/checkoutSlice';
import { selectCheckoutState, selectShippingAddress, selectPaymentMethod, selectOrder, selectError, selectStatus } from './selectors/selectCheckoutState';
import { selectCartItems } from './selectors/selectCheckoutState';

export const checkoutSelectors = {
  selectCheckoutState,
  selectShippingAddress,
  selectPaymentMethod,
  selectOrder,
  selectError,
  selectStatus,
  selectCartItems
};

export { checkoutActions };
export * from './selectors/selectCheckoutState';
