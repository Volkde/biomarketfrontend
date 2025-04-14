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
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectLanguageState } from "store/redux/ui/selectors/selectLanguageState";
import { selectThemeState } from "store/redux/ui/selectors/selectThemeState";
import { languageActions } from "store/redux/ui/slice/languageSlice";
import { themeActions } from "store/redux/ui/slice/themeSlice";
import { Language } from "store/redux/ui/types/LanguageState";
import { ThemeMode } from "store/redux/ui/types/ThemeState";
import { settingsValidationSchema } from "./settingsValidationSchema";
import { SettingsFormValues } from "./types";

function Settings() {
  const { t, i18n } = useTranslation("page-settings");
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector(selectThemeState);
  const { language } = useAppSelector(selectLanguageState);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const formik = useFormik<SettingsFormValues>({
    initialValues: {
      language: language || i18n.language,
      theme: mode,
      hideProfile: false
    },
    validationSchema: settingsValidationSchema,
    onSubmit: async values => {
      dispatch(languageActions.setLanguage(values.language as Language));
      dispatch(themeActions.setTheme(values.theme as ThemeMode));
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
              label={t("Language")}
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
              label={t("Theme")}
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
