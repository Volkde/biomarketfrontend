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
import { languageSlice } from "./redux/ui/slice/languageSlice";
import { snackbarSlice } from "./redux/ui/slice/snackbarSlice";
import { themeSlice } from "./redux/ui/slice/themeSlice";
import { uiSlice } from "./redux/ui/slice/uiSlice";
import { usersSlice } from "./redux/users/slice/usersSlice";
import { wishlistSlice } from "./redux/wishlist/slice/wishlistSlice";

// `combineSlices` automatically combines the reducers using
// their `reducerPath`s, therefore we no longer need to call `combineReducers`.
const rootReducer = combineSlices(
  uiSlice,
  snackbarSlice,
  themeSlice,
  languageSlice,
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
  wishlistSlice
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
