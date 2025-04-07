export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}
