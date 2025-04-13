import { Address } from 'types/Address'

export interface ShippingAddressFormProps {
  initialValues: Address
  onSubmit: (values: Address) => void
  isLoading?: boolean
}
