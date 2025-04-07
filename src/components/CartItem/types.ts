export interface CartItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  };
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
}
