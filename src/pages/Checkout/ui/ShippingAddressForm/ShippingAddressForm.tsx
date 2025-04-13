import { Formik, Form, Field } from 'formik'
import { shippingAddressSchema } from './validationSchema'
import { ShippingAddressFormProps } from './types'
import * as S from './styles'

const ShippingAddressForm = ({ initialValues, onSubmit, isLoading }: ShippingAddressFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shippingAddressSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <S.FormWrapper>
            <S.FormTitle variant="h6">Shipping Address</S.FormTitle>

            <Field
              as={S.FormField}
              name="country"
              label="Country"
              error={touched.country && Boolean(errors.country)}
              helperText={touched.country && errors.country}
              required
            />
            <Field
              as={S.FormField}
              name="city"
              label="City"
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
              required
            />
            <Field
              as={S.FormField}
              name="street"
              label="Street"
              error={touched.street && Boolean(errors.street)}
              helperText={touched.street && errors.street}
              required
            />
            <Field
              as={S.FormField}
              name="zipCode"
              label="ZIP Code"
              error={touched.zipCode && Boolean(errors.zipCode)}
              helperText={touched.zipCode && errors.zipCode}
              required
            />

            <S.FormActions>
              <S.SubmitButton type="submit" variant="contained" color="primary" disabled={isLoading}>
                Next
              </S.SubmitButton>
            </S.FormActions>
          </S.FormWrapper>
        </Form>
      )}
    </Formik>
  )
}

export default ShippingAddressForm
