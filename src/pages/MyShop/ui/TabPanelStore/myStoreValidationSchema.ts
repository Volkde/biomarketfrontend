import * as Yup from "yup";

export const myStoreValidationSchema = Yup.object().shape({
  storeName: Yup.string()
    .min(2, "Min 2 symbols")
    .max(20, "Max 20 symbols")
    .typeError("Field must be string")
    .required("Field is required"),
  storeDescription: Yup.string()
    .min(2, "Min 2 symbols")
    .max(500, "Max 500 symbols")
    .typeError("Field must be string")
    .required("Field is required"),
  storeLogo: Yup.string()
    .min(2, "Min 2 symbols")
    .max(500, "Max 500 symbols")
    .typeError("Field must be string")
    .optional()
});
