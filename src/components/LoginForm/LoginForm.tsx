import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { LoginFormResponse, LoginFormValues } from "./types";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Создание валидационной схемы с помощью Yup
  const schema = Yup.object().shape({
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
    ...(isLogin
      ? {}
      : {
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm password is required"),
        }),
  });

  // Настройка формы с помощью Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values: LoginFormValues) => {
      try {
        const url = isLogin ? "/api/auth/login" : "/api/auth/register";
        const response = await axios.post<LoginFormResponse>(url, {
          email: values.email,
          password: values.password,
        });

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate("/dashboard");
      } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Ошибка авторизации/регистрации. Проверьте введенные данные.");
      }
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ background: "#e8f5e9" }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, width: "100%", maxWidth: 400, bgcolor: "white" }}
      >
        <Typography variant="h5" mb={2}>
          {isLogin ? "Вход в аккаунт" : "Регистрация"}
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
          {!isLogin && (
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
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#66bb6a",
              "&:hover": { bgcolor: "#43a047" },
            }}
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>

          <Button
            fullWidth
            onClick={() => setIsLogin(!isLogin)}
            sx={{ mt: 2, color: "#66bb6a" }}
          >
            {isLogin
              ? "Нет аккаунта? Зарегистрируйтесь"
              : "Уже есть аккаунт? Войти"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginForm;
