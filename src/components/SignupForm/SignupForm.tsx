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
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { authActions } from "store/redux/auth/slice/authSlice";
import { SignupValidationSchema } from "./SignupValidationSchema";
import { SignupFormValues } from "./types";

function SignupForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
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
        ).unwrap();

        navigate("/login");
      } catch (error: any) {
        formik.setErrors({
          email: t("Invalid email or password. Please try again."),
          password: t("Invalid email or password. Please try again.")
        });
      }
    }
  });

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
