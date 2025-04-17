import * as Yup from "yup";

const passwordRegex = {
  upper: /[A-Z]/,
  lower: /[a-z]/,
  number: /\d/,
  special: /[!@#$%^&*(),.?":{}|<>]/
};

export const SignupValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Field is required")
    .min(2, "Min 2 symbols")
    .max(25, "Max 25 symbols")
    .typeError("Field must be string"),
  firstName: Yup.string()
    .required("Field is required")
    .min(2, "Min 2 symbols")
    .max(25, "Max 25 symbols")
    .typeError("Field must be string"),
  lastName: Yup.string()
    .required("Field is required")
    .min(2, "Min 2 symbols")
    .max(25, "Max 25 symbols")
    .typeError("Field must be string"),
  email: Yup.string()
    .required("Field email is required")
    .email("Field has type email")
    .min(5, "Min 5 symbols")
    .max(50, "Max 50 symbols")
    .typeError("Email must be string"),
  password: Yup.string()
    .required("Field password is required")
    .min(5, "Password must be at least 5 characters long")
    .max(64, "Password must be no more than 64 characters")
    .matches(
      passwordRegex.upper,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      passwordRegex.lower,
      "Password must contain at least one lowercase letter"
    )
    .matches(passwordRegex.number, "Password must contain at least one number")
    .matches(
      passwordRegex.special,
      "Password must contain at least one special character"
    )
    .typeError("Password must be a string"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required()
});
