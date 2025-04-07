import { Category } from "types/Category";

export interface CategoryState {
  status: "default" | "loading" | "success" | "error";
  category: Category | undefined;
  categories: Category[];
  error?: string;
}
