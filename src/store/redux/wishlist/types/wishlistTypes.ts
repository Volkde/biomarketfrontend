import { WishlistItem } from "@/types/WishlistItem";

export interface WishlistState {
  items: number[]; // product IDs
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface Payload {
  productId: number;
}

export interface Result {
  items: WishlistItem[];
}
