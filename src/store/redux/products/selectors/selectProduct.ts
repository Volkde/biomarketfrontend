import { createSelector } from "@reduxjs/toolkit";
import { ProductsState } from "../types/ProductsState";
import { selectProductsState } from "./selectProductsState";

export const selectProduct = createSelector(
  selectProductsState,
  (state: ProductsState) => state.product
);
