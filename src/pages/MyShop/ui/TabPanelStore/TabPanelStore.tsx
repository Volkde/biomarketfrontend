import { Avatar, Box, Button, Container, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { MyStoreFormValues } from "pages/MyShop/types/MyStoreFormValues";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Rating } from "../Rating";
import { myStoreValidationSchema } from "./myStoreValidationSchema";
import { TabPanelStoreProps } from "./types";

function TabPanelStore({ seller }: TabPanelStoreProps) {
  const { t } = useTranslation("page-my-shop");

  const formik = useFormik<MyStoreFormValues>({
    initialValues: {
      storeName: seller?.storeName || "",
      storeDescription: seller?.storeDescription || "",
      storeLogo: seller?.storeLogo || ""
    },
    validationSchema: myStoreValidationSchema,
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

  useEffect(() => {
    if (!seller) return;

    const same =
      formik.values.storeName === (seller.storeName || "") &&
      formik.values.storeDescription === (seller.storeDescription || "") &&
      formik.values.storeLogo === (seller.storeLogo || "");

    if (!same) {
      formik.setValues({
        storeName: seller.storeName || "",
        storeDescription: seller.storeDescription || "",
        storeLogo: seller.storeLogo || ""
      });
    }
  }, [seller]);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          marginTop: "15px"
        }}
      >
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
              {" "}
              <Grid container direction="column" gap={1}>
                <Avatar
                  alt={seller?.storeName ?? ""}
                  src={seller?.storeLogo}
                  sx={{ width: 100, height: 100 }}
                />
                {seller?.rating && <Rating value={seller?.rating} />}
              </Grid>
              <Grid container direction="column" flexGrow={1}>
                <TextField
                  fullWidth
                  margin="normal"
                  name="storeName"
                  label={t("storeName") + "*"}
                  value={formik.values.storeName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.storeName && Boolean(formik.errors.storeName)
                  }
                  helperText={
                    formik.touched.storeName && formik.errors.storeName
                  }
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              multiline
              rows={5}
              maxRows={7}
              margin="normal"
              name="storeDescription"
              label={t("storeDescription") + "*"}
              value={formik.values.storeDescription}
              onChange={formik.handleChange}
              error={
                formik.touched.storeDescription &&
                Boolean(formik.errors.storeDescription)
              }
              helperText={
                formik.touched.storeDescription &&
                formik.errors.storeDescription
              }
            />
            <TextField
              fullWidth
              margin="normal"
              name="storeLogo"
              label={t("storeLogo") + "*"}
              value={formik.values.storeLogo}
              onChange={formik.handleChange}
              disabled={true}
              hidden={true}
              error={
                formik.touched.storeLogo && Boolean(formik.errors.storeLogo)
              }
              helperText={formik.touched.storeLogo && formik.errors.storeLogo}
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
    </Container>
  );
}

export default TabPanelStore;
