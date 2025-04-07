import { Product } from "../Root/types";

export interface ProductQuickViewModalProps {
  open: boolean;
  onClose: () => void;
  product: Product;
}
