import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";
import { PasswordField } from "components/PasswordField";
import PasswordStrengthInfo from "components/PasswordStrengthInfo/PasswordStrengthInfo";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { authActions } from "store/redux/auth/slice/authSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { SignupValidationSchema } from "./SignupValidationSchema";
import { SignupFormValues } from "./types";

const SESSION_KEY = "signup-form-data";

function SignupForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const saved = sessionStorage.getItem(SESSION_KEY);
  const parsed = saved ? JSON.parse(saved) : null;

  const formik = useFormik({
    initialValues: {
      userName: parsed?.userName || "",
      firstName: parsed?.firstName || "",
      lastName: parsed?.lastName || "",
      email: parsed?.email || "",
      password: "",
      confirmPassword: "",
      termsAccepted: false
    } as SignupFormValues,
    validationSchema: SignupValidationSchema,
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
        )
          .unwrap()
          .then(() => {
            dispatch(
              snackbarActions.enqueueSnackbar({
                message: "Вы успешно зарегистрировались, проверьте ваш email!",
                severity: "success"
              })
            );
          })
          .catch(e => {
            console.log(e);
            dispatch(
              snackbarActions.enqueueSnackbar({
                message: e,
                severity: "success"
              })
            );
          });

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
      if (key === "password" || key === "confirmPassword") return;
      const typedKey = key as keyof SignupFormValues;
      safeData[typedKey] = formik.values[typedKey] as any;
    });

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(safeData));
  }, [formik.values]);

  return (
    <Grid direction="column" container spacing={2}>
      <Typography variant="h5" mb={2}>
        {t("Registration")}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid
          direction="column"
          container
          sx={{
            marginBottom: "15px"
          }}
        >
          <Grid
            direction="row"
            container
            spacing={5}
            sx={{
              marginBottom: "15px"
            }}
          >
            <TextField
              margin="normal"
              name="firstName"
              label={t("firstName") + "*"}
              type="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              sx={{
                flexGrow: "1"
              }}
            />
            <TextField
              margin="normal"
              name="lastName"
              label={t("lastName") + "*"}
              type="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              sx={{
                flexGrow: "1"
              }}
            />
          </Grid>
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
              name="email"
              label={t("email") + "*"}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid
            direction="column"
            container
            sx={{
              marginBottom: "15px"
            }}
          >
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
            {formik.values.password && (
              <PasswordStrengthInfo
                password={formik.values.password}
                minLength={5}
              />
            )}
            <PasswordField
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
          </Grid>

          <FormControlLabel
            control={
              <Checkbox
                name="termsAccepted"
                checked={formik.values.termsAccepted}
                onChange={formik.handleChange}
                value="true"
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                {t("I agree to the")}&nbsp;
                <Link
                  component={RouterLink}
                  to="/terms"
                  target="_blank"
                  color="primary"
                  underline="hover"
                  rel="noopener noreferrer"
                >
                  {t("terms")}
                </Link>
                &nbsp;and&nbsp;
                <Link
                  component={RouterLink}
                  to="/conditions"
                  target="_blank"
                  color="primary"
                  underline="hover"
                  rel="noopener noreferrer"
                >
                  {t("conditions")}
                </Link>
              </Typography>
            }
          />
          {formik.touched.termsAccepted && formik.errors.termsAccepted && (
            <Typography variant="caption" color="error">
              {formik.errors.termsAccepted}
            </Typography>
          )}
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
            sx={{
              mt: 2
            }}
          >
            {t("Sign up")}
          </Button>

          <Button fullWidth onClick={() => navigate("/login")} sx={{ mt: 2 }}>
            {t("Already have an account? Sign in")}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default SignupForm;
