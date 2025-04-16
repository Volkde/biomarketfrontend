import { Button, Grid, TextField, Typography } from "@mui/material";
import { PasswordField } from "components/PasswordField";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { authActions } from "store/redux/auth/slice/authSlice";
import { LoginValidationSchema } from "./LoginValidationSchema";
import { LoginFormProps, LoginFormValues } from "./types";

const SESSION_KEY = "login-form-data";

function LoginForm({ title }: LoginFormProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const saved = sessionStorage.getItem(SESSION_KEY);
  const parsed = saved ? JSON.parse(saved) : null;

  const formik = useFormik({
    initialValues: {
      email: parsed?.email || "",
      password: ""
    } as LoginFormValues,
    validationSchema: LoginValidationSchema,
    validateOnChange: false,
    onSubmit: async (values: LoginFormValues) => {
      try {
        await dispatch(authActions.login(values)).unwrap();

        navigate("/");
      } catch (error: any) {
        formik.setErrors({
          email: t("Invalid email or password. Please try again."),
          password: t("Invalid email or password. Please try again.")
        });
      }
    }
  });

  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        formik.setValues(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.warn("Ошибка при парсинге sessionStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    const safeData: Partial<typeof formik.values> = {};

    Object.keys(formik.values).forEach(key => {
      if (key === "email") {
        const typedKey = key as keyof LoginFormValues;
        safeData[typedKey] = formik.values[typedKey] as any;
      }
    });

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(safeData));
  }, [formik.values]);

  return (
    <Grid direction="column" container spacing={2}>
      {title && (
        <Typography variant="h5" mb={2}>
          {title}
        </Typography>
      )}

      <form onSubmit={formik.handleSubmit}>
        <Grid
          direction="column"
          container
          sx={{
            marginBottom: "15px"
          }}
        >
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
          <PasswordField
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
        </Grid>

        <Grid
          direction="column"
          container
          sx={{
            marginBottom: "15px"
          }}
        >
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2
            }}
          >
            {t("Login")}
          </Button>

          <Button fullWidth onClick={() => navigate("/signup")} sx={{ mt: 2 }}>
            {t("No account? Sign up")}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default LoginForm;
