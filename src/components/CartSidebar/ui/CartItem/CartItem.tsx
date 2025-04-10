import { CartItemProps } from "./types";

function CartItem({ title }: CartItemProps) {
  return (
    <div>
      <li>Title: {title}</li>
    </div>
  );
}

export default CartItem;
