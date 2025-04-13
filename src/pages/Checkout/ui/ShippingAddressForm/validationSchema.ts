import * as Yup from 'yup';
import { Address } from 'types/Address';

export const shippingAddressSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string().required('City is required'),
  street: Yup.string().required('Street is required'),
  postalCode: Yup.string().required('Postal code is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
}) as Yup.ObjectSchema<Address>;
