import * as Yup from "yup";

export const accountValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Min 2 symbols")
    .max(20, "Max 20 symbols")
    .typeError("Field must be string")
    .required("Field is required"),
  firstName: Yup.string()
    .min(2, "Min 2 symbols")
    .max(20, "Max 20 symbols")
    .typeError("Field must be string")
    .required("Field is required"),
  lastName: Yup.string()
    .min(2, "Min 2 symbols")
    .max(20, "Max 20 symbols")
    .typeError("Field must be string")
    .required("Field is required"),
  email: Yup.string()
    .email("Invalid email")
    .min(5, "Min 5 symbols")
    .max(50, "Max 50 symbols")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .min(7, "Too short")
    .max(20, "Too long")
    .nullable()
    .optional()
});
