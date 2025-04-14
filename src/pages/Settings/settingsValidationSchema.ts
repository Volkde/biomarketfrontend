import * as Yup from "yup";

export const settingsValidationSchema = Yup.object().shape({
  language: Yup.string().required("Language is required"),
  theme: Yup.string().oneOf(["light", "dark"]),
  notifications: Yup.boolean(),
  hideProfile: Yup.boolean()
});
