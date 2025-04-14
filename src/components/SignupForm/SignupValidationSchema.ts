import * as Yup from "yup";

export const SignupValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Field is required")
    .min(2, "Min 2 symbols")
    .max(20, "Max 20 symbols")
    .typeError("Field must be string"),
  firstName: Yup.string()
    .required("Field is required")
    .min(2, "Min 2 symbols")
    .max(20, "Max 20 symbols")
    .typeError("Field must be string"),
  lastName: Yup.string()
    .required("Field is required")
    .min(2, "Min 2 symbols")
    .max(20, "Max 20 symbols")
    .typeError("Field must be string"),
  email: Yup.string()
    .required("Field email is required")
    .email("Field has type email")
    .max(50, "Max 50 symbols")
    .min(5, "Min 5 symbols")
    .typeError("Email must be string"),
  password: Yup.string()
    .required("Field password is required")
    .min(5, "Min 5 symbols")
    .max(25, "Max 25 symbols")
    .typeError("Password must be string"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required()
});
