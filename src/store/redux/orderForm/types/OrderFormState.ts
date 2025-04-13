import { RootState } from '../../../store';

export interface OrderFormState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  cartItems: CartItem[];
  shippingAddress: Address | null;
  paymentMethod: string | null;
  error: string | null;
}

export interface CartItem {
  productId: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  unitOfMeasure: string;
  totalItemPrice: number;
}

export interface Address {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  street: string;
  postalCode: string;
  email: string;
  phone: string;
}

export interface OrderFormSelectors {
  getOrderFormState: (state: RootState) => OrderFormState;
  getCartItems: (state: RootState) => OrderFormState["cartItems"];
  getShippingAddress: (state: RootState) => OrderFormState["shippingAddress"];
  getPaymentMethod: (state: RootState) => OrderFormState["paymentMethod"];
  getOrderFormStatus: (state: RootState) => OrderFormState["status"];
  getOrderFormError: (state: RootState) => OrderFormState["error"];
}
