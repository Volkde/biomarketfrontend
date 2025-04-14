import { OrderSummaryProps } from './types'
import * as S from './styles'
import { Divider } from '@mui/material'

/**
 * Order summary component displaying shipping, payment, and items details
 * @param {OrderSummaryProps} props - Component props
 * @param {Address} props.shippingAddress - Customer shipping address
 * @param {string} props.paymentMethod - Selected payment method
 * @param {Array<{id: string, name: string, quantity: number, price: number}>} props.items - Order items array
 * @param {number} props.totalPrice - Total order price
 * @returns {JSX.Element} Order summary component
 */
const OrderSummary = ({ shippingAddress, paymentMethod, items, totalPrice }: OrderSummaryProps) => {
  return (
    <S.SummaryWrapper>
      <S.Section>
        <S.SectionTitle variant="h6">Shipping Address</S.SectionTitle>
        <S.AddressLine>{shippingAddress.country}</S.AddressLine>
        <S.AddressLine>{shippingAddress.city}</S.AddressLine>
        <S.AddressLine>{shippingAddress.street}</S.AddressLine>
        <S.AddressLine>{shippingAddress.postalCode}</S.AddressLine>
      </S.Section>

      <Divider />

      <S.Section>
        <S.SectionTitle variant="h6">Payment Method</S.SectionTitle>
        <S.AddressLine>{paymentMethod.replace('-', ' ')}</S.AddressLine>
      </S.Section>

      <Divider />

      <S.Section>
        <S.SectionTitle variant="h6">Order Items</S.SectionTitle>
        <S.ItemsList>
          {items.map((item) => (
            <S.ItemRow key={item.id}>
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </S.ItemRow>
          ))}
        </S.ItemsList>
        <S.TotalRow>
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </S.TotalRow>
      </S.Section>
    </S.SummaryWrapper>
  )
}

export default OrderSummary
