import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { addressSlice } from "./redux/address/slice/addressSlice";
import { authSlice } from "./redux/auth/slice/authSlice";
import { cartSlice } from "./redux/cart/slice/cartSlice";
import { categorySlice } from "./redux/categories/slice/categorySlice";
import { deliverySlice } from "./redux/delivery/slice/deliverySlice";
import { ordersSlice } from "./redux/orders/slice/ordersSlice";
import { productsSlice } from "./redux/products/slice/productsSlice";
import { reviewsSlice } from "./redux/reviews/slice/reviewsSlice";
import { sellersSlice } from "./redux/sellers/slice/sellersSlice";
import { uiSlice } from "./redux/ui/slice/uiSlice";
import { usersSlice } from "./redux/users/slice/usersSlice";
import { snackbarSlice } from "./redux/ui/slice/snackbarSlice";
import { checkoutSlice } from "./redux/checkout/slice/checkoutSlice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(
  uiSlice,
  snackbarSlice,
  authSlice,
  addressSlice,
  cartSlice,
  categorySlice,
  deliverySlice,
  ordersSlice,
  productsSlice,
  reviewsSlice,
  sellersSlice,
  usersSlice,
  checkoutSlice
);
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState
  });
  // configure listeners using the provided defaults
  // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
