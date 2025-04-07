import { createSelector } from "@reduxjs/toolkit";
import { ProductsState } from "../types/ProductsState";
import { selectProductsState } from "./selectProductsState";

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);
