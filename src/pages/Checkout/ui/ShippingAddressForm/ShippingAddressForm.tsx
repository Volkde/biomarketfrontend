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
              name="firstName"
              label="First Name"
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              required
            />
            <Field
              as={S.FormField}
              name="lastName"
              label="Last Name"
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              required
            />
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
              name="postalCode"
              label="Postal Code"
              error={touched.postalCode && Boolean(errors.postalCode)}
              helperText={touched.postalCode && errors.postalCode}
              required
            />
            <Field
              as={S.FormField}
              name="email"
              label="Email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              required
            />
            <Field
              as={S.FormField}
              name="phone"
              label="Phone"
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
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
