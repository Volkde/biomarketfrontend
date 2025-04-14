import {
  Button,
  Container,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { settingsValidationSchema } from "./settingsValidationSchema";
import { SettingsFormValues } from "./types";

function Settings() {
  const { t, i18n } = useTranslation("page-settings");

  const formik = useFormik<SettingsFormValues>({
    initialValues: {
      language: i18n.language,
      theme: "light",
      notifications: true,
      hideProfile: false
    },
    validationSchema: settingsValidationSchema,
    onSubmit: async values => {
      i18n.changeLanguage(values.language);
    }
  });

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Grid direction="column" container spacing={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t("title")}
        </Typography>
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
              select
              name="language"
              label={t("language")}
              value={formik.values.language}
              onChange={formik.handleChange}
              SelectProps={{ native: true }}
              sx={{ mt: 2 }}
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="de">Deutsch</option>
            </TextField>

            <TextField
              fullWidth
              select
              name="theme"
              label={t("theme")}
              value={formik.values.theme}
              onChange={formik.handleChange}
              SelectProps={{ native: true }}
              sx={{ mt: 2 }}
            >
              <option value="light">{t("Light")}</option>
              <option value="dark">{t("Dark")}</option>
            </TextField>
          </Grid>

          <Grid direction="column" container spacing={2}>
            <FormControlLabel
              control={
                <Switch
                  checked={formik.values.hideProfile}
                  onChange={formik.handleChange}
                  name="hideProfile"
                />
              }
              label={t("Hide my profile")}
              sx={{ mt: 2 }}
            />

            <Grid
              direction="column"
              container
              sx={{
                marginBottom: "15px"
              }}
            >
              <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                {t("Save settings")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default Settings;
