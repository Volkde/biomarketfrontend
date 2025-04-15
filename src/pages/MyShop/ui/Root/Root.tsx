import {
  Category as CategoryIcon,
  History as HistoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Storefront as StorefrontIcon
} from "@mui/icons-material";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SyntheticEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`
  };
}

function Root() {
  const { t } = useTranslation("page-my-shop");
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(authActions.profile());
  }, [dispatch]);

  const { isLogin, isSeller } = useAppSelector(selectAuthState);

  useEffect(() => {
    if (isLogin && isSeller) {
      // TODO: Получить товары в корзине продавца
      dispatch(cartActions.fetchGetCart());
    }
  }, [dispatch, isLogin, isSeller]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            icon={<StorefrontIcon />}
            aria-label="Магазин"
            label="Магазин"
            {...a11yProps(0)}
          />
          <Tab
            icon={<CategoryIcon />}
            aria-label="Товары"
            label="Товары"
            {...a11yProps(1)}
          />
          <Tab
            icon={<ShoppingCartIcon />}
            aria-label="Заказы"
            label="Заказы"
            {...a11yProps(2)}
          />
          <Tab
            icon={<HistoryIcon />}
            aria-label="История заказов"
            label="История заказов"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Тут будут настройки магазина.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Тут будут товары этого магазина.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Тут будут заказы.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Тут будет история заказов.
      </CustomTabPanel>
    </Container>
  );
}

export default Root;
