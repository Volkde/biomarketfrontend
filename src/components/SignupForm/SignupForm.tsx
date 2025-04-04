import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { authActions } from "store/redux/auth/slice/authSlice";
import * as Yup from "yup";
import { SignupFormValues } from "./types";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
    userName: Yup.string()
      .required("Field is required")
      .max(20, "Max 20 symbols")
      .min(2, "Min 2 symbols")
      .typeError("Field must be string"),
    firstName: Yup.string()
      .required("Field is required")
      .max(20, "Max 20 symbols")
      .min(2, "Min 2 symbols")
      .typeError("Field must be string"),
    lastName: Yup.string()
      .required("Field is required")
      .max(20, "Max 20 symbols")
      .min(2, "Min 2 symbols")
      .typeError("Field must be string"),
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .max(20, "Max 20 symbols")
      .min(10, "Min 10 symbols")
      .typeError("Email must be string"),
    password: Yup.string()
      .required("Field password is required")
      .min(6, "Min 6 symbols")
      .max(20, "Max 20 symbols")
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
            userName: values.userName,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
          })
        ).unwrap();

        navigate("/");
      } catch (error) {
        formik.setErrors({
          email: "Invalid email or password. Please try again.",
          password: "Invalid email or password. Please try again."
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
          Регистрация
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="userName"
            label="userName*"
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
            label="firstName*"
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
            label="lastName*"
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
            label="Email*"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            name="password"
            label="Password*"
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
            label="Confirm Password*"
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
            Зарегистрироваться
          </Button>

          <Button
            fullWidth
            onClick={() => navigate("/login")}
            sx={{ mt: 2, color: "#66bb6a" }}
          >
            Уже есть аккаунт? Войти
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SignupForm;
