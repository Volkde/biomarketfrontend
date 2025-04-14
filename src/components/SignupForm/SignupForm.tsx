import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { authActions } from "store/redux/auth/slice/authSlice";
import * as Yup from "yup";
import { SignupFormValues } from "./types";

function SignupForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
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
      .required("Confirm password is required")
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    } as SignupFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values: SignupFormValues) => {
      try {
        await dispatch(
          authActions.register({
            username: values.userName,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
          })
        ).unwrap();

        navigate("/");
      } catch (error: any) {
        formik.setErrors({
          email: t("Invalid email or password. Please try again."),
          password: t("Invalid email or password. Please try again.")
        });
      }
    }
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={3}
        sx={{ p: 4, width: "100%", maxWidth: 400, bgcolor: "white" }}
      >
        <Typography variant="h5" mb={2}>
          {t("Регистрация")}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="userName"
            label={t("userName") + "*"}
            type="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
          <TextField
            fullWidth
            margin="normal"
            name="firstName"
            label={t("firstName") + "*"}
            type="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            fullWidth
            margin="normal"
            name="lastName"
            label={t("lastName") + "*"}
            type="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            fullWidth
            margin="normal"
            name="email"
            label={t("email") + "*"}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            name="password"
            label={t("password") + "*"}
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            fullWidth
            margin="normal"
            name="confirmPassword"
            label={t("confirmPassword") + "*"}
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#66bb6a",
              "&:hover": { bgcolor: "#43a047" }
            }}
          >
            {t("Sign up")}
          </Button>

          <Button
            fullWidth
            onClick={() => navigate("/login")}
            sx={{ mt: 2, color: "#66bb6a" }}
          >
            {t("Already have an account? Sign in")}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default SignupForm;
