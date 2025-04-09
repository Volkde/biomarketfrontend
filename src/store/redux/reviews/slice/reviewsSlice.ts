import { createAppSlice } from "store/createAppSlice";
import { ReviewsState } from "../types/ReviewsState";

const initialState: ReviewsState = {
  status: "default",
  reviews: [],
  review: undefined,
  error: undefined
};

export const reviewsSlice = createAppSlice({
  name: "REVIEWS",
  initialState,
  reducers: create => ({
    /**
     * resetReviewsState
     */
    resetReviewsState: create.reducer(() => initialState)
  })
});

export const {
  actions: reviewsActions,
  reducer: reviewsReducer,
  selectors: reviewsSelectors
} = reviewsSlice;
