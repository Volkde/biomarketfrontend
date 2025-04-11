import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { authActions } from "store/redux/auth/slice/authSlice";
import * as Yup from "yup";
import { LoginFormValues } from "./types";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .max(35, "Max 35 symbols")
      .min(5, "Min 5 symbols")
      .typeError("Email must be string"),
    password: Yup.string()
      .required("Field password is required")
      .min(3, "Min 3 symbols")
      .max(30, "Max 30 symbols")
      .typeError("Password must be string")
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values: LoginFormValues) => {
      try {
        await dispatch(authActions.login(values)).unwrap();

        navigate("/");
      } catch (error: any) {
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
          Вход в аккаунт
        </Typography>

        <form onSubmit={formik.handleSubmit}>
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
            Войти
          </Button>

          <Button
            fullWidth
            onClick={() => navigate("/signup")}
            sx={{ mt: 2, color: "#66bb6a" }}
          >
            Нет аккаунта? Зарегистрируйтесь
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
