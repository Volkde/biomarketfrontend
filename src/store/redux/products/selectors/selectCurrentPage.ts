import { createSelector } from "@reduxjs/toolkit";
import { ProductsState } from "../types/ProductsState";
import { selectProductsState } from "./selectProductsState";

export const selectCurrentPage = createSelector(
  selectProductsState,
  (state: ProductsState) => state.page
);
