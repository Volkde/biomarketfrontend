import * as Yup from "yup";

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Field email is required")
    .email("Field has type email")
    .min(5, "Min 5 symbols")
    .max(50, "Max 50 symbols")
    .typeError("Email must be string"),
  password: Yup.string()
    .required("Field password is required")
    .min(5, "Min 5 symbols")
    .max(25, "Max 25 symbols")
    .typeError("Password must be string")
});
