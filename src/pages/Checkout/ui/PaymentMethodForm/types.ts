import { PaymentMethod } from 'types/Checkout'

export interface PaymentMethodFormProps {
  initialValue: PaymentMethod | null
  onSubmit: (method: PaymentMethod) => void
  isLoading?: boolean
}
