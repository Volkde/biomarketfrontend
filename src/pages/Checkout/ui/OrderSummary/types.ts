import { Address } from 'types/Address'
import { PaymentMethod } from 'types/Checkout'

export interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
}

export interface OrderSummaryProps {
  shippingAddress: Address
  paymentMethod: PaymentMethod
  items: OrderItem[]
  totalPrice: number
}
