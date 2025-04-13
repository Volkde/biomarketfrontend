import { CartItem } from "src/types/CartItem";

export interface CheckoutState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  cartItems: CartItem[];
  shippingAddress: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    street: string;
    postalCode: string;
  } | null;
  paymentMethod: {
    type: 'creditCard' | 'paypal' | 'bankTransfer';
    cardNumber?: string;
    expirationDate?: string;
    cvv?: string;
  } | null;
  order: {
    id: string;
    total: number;
    status: string;
    createdAt: string;
  } | null;
  error: string | null;
}
