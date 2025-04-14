import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from 'shared/api/axiosInstance';
import { CartItem } from 'types/CartItem';
import { Address } from 'types/Address';

interface OrderData {
  orderItems: CartItem[];
  shippingAddress: Address;
  paymentMethod: {
    type: 'creditCard' | 'paypal' | 'bankTransfer';
    cardNumber?: string;
    expirationDate?: string;
    cvv?: string;
  };
}

interface OrderResponse {
  id: string;
  total: number;
  status: string;
  createdAt: string;
}

export const usePlaceOrder = () => {
  return useMutation<OrderResponse, Error, OrderData>({
    mutationFn: async (orderData: OrderData) => {
      const response = await axiosInstance.post('/orders', orderData);
      return response.data;
    },
  });
};
