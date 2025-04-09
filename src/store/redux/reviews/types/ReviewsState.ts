import { ReduxStateStatus } from "types/ReduxStateStatus";
import { Review } from "types/Review";

export interface ReviewsState {
  status: ReduxStateStatus;
  reviews: Review[];
  review?: Review;
  error?: string;
}
