import * as Yup from 'yup'

export const shippingAddressSchema = Yup.object().shape({
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  street: Yup.string().required('Street is required'),
  zipCode: Yup.string()
    .required('ZIP code is required')
    .matches(/^\d{5}$/, 'ZIP code must be 5 digits'),
})
