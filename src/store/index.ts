import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from './redux/ui/slice/uiSlice';
import { cartReducer } from './redux/cart/slice/cartSlice';

export const store = configureStore({
  reducer: {
    UI: uiReducer,
    CART: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;