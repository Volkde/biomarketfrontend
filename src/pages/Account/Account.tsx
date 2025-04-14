import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";
import { accountValidationSchema } from "./accountValidationSchema";
import { AccountFormValues } from "./types";

function Account() {
  const { t: tAccount } = useTranslation("page-account");
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.profile());
  }, [dispatch]);

  const { status, user, error } = useAppSelector(selectAuthState);

  const formik = useFormik<AccountFormValues>({
    initialValues: {
      username: user?.username || "",
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || ""
    },
    validationSchema: accountValidationSchema,
    validateOnChange: false,
    onSubmit: async values => {
      try {
        // TODO: отправка данных
        // await dispatch(...).unwrap();
      } catch (error: any) {
        console.error(error);
      }
    }
  });

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Grid direction="column" container spacing={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          {tAccount("title")}
        </Typography>

        {status === "error" ? (
          <Typography color="error">Error: {error}</Typography>
        ) : (
          <Box>
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
                  spacing={7}
                  sx={{
                    marginBottom: "15px"
                  }}
                >
                  <Avatar
                    alt={
                      user?.firstName
                        ? user?.firstName + " " + user?.lastName
                        : ""
                    }
                    src={user?.avatar}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Grid direction="column">
                    <TextField
                      fullWidth
                      margin="normal"
                      name="firstName"
                      label={t("firstName") + "*"}
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      name="lastName"
                      label={t("lastName") + "*"}
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  margin="normal"
                  name="username"
                  label={t("username") + "*"}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
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
                  name="phoneNumber"
                  label={t("phoneNumber")}
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
              </Grid>
              <Grid
                direction="column"
                container
                sx={{
                  marginBottom: "15px"
                }}
              >
                <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                  {t("Save")}
                </Button>
              </Grid>
            </form>
          </Box>
        )}
      </Grid>
    </Container>
  );
}

export default Account;
