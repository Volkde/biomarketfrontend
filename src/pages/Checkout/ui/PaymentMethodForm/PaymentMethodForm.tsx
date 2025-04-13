import { useState } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio
} from '@mui/material'
import { PaymentMethodFormProps } from './types'
import * as S from './styles'

const PaymentMethodForm = ({ initialValue, onSubmit, isLoading }: PaymentMethodFormProps) => {
  const [value, setValue] = useState(initialValue || 'credit-card')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as typeof value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <S.FormWrapper>
        <S.FormTitle variant="h6">Payment Method</S.FormTitle>

        <FormControl component="fieldset">
          <FormLabel component="legend">Select a method</FormLabel>
          <S.RadioGroupStyled value={value} onChange={handleChange}>
            <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
            <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
            <FormControlLabel value="bank-transfer" control={<Radio />} label="Bank Transfer" />
          </S.RadioGroupStyled>
        </FormControl>

        <S.FormActions>
          <S.SubmitButton type="submit" variant="contained" color="primary" disabled={isLoading}>
            Next
          </S.SubmitButton>
        </S.FormActions>
      </S.FormWrapper>
    </form>
  )
}

export default PaymentMethodForm
