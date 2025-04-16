import {
  Category as CategoryIcon,
  Dashboard as DashboardIcon,
  History as HistoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Storefront as StorefrontIcon
} from "@mui/icons-material";
import { Box, Container, Tab, Tabs } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SyntheticEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";
import { selectSellersState } from "store/redux/sellers/selectors/selectSellersState";
import { sellersActions } from "store/redux/sellers/slice/sellersSlice";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel";
import { TabPanelCart } from "../TabPanelCart";
import { TabPanelDashboard } from "../TabPanelDashboard";
import { TabPanelHistory } from "../TabPanelHistory";
import { TabPanelProducts } from "../TabPanelProducts";
import { TabPanelStore } from "../TabPanelStore";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`
  };
}

function Root() {
  const { t } = useTranslation("page-my-shop");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.profile());
  }, [dispatch]);

  const { user, isLogin, isSeller } = useAppSelector(selectAuthState);
  const sellerId = user?.sellerId ?? 1;

  useEffect(() => {
    if (isLogin && isSeller && sellerId) {
      dispatch(sellersActions.fetchGetSellerById({ sellerId }));
    }
  }, [dispatch, isLogin, isSeller, sellerId]);

  const { seller } = useAppSelector(selectSellersState);

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />

      {isLogin ? (
        isSeller ? (
          <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs"
              >
                <Tab
                  icon={<StorefrontIcon />}
                  aria-label="Магазин"
                  label="Магазин"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<DashboardIcon />}
                  aria-label="Dashboard"
                  label="Dashboard"
                  {...a11yProps(1)}
                />
                <Tab
                  icon={<CategoryIcon />}
                  aria-label="Товары"
                  label="Товары"
                  {...a11yProps(2)}
                />
                <Tab
                  icon={<ShoppingCartIcon />}
                  aria-label="Заказы"
                  label="Заказы"
                  {...a11yProps(3)}
                />
                <Tab
                  icon={<HistoryIcon />}
                  aria-label="История заказов"
                  label="История заказов"
                  {...a11yProps(4)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <TabPanelStore
                isLogin={isLogin}
                isSeller={isSeller}
                sellerId={sellerId}
                seller={seller}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <TabPanelDashboard
                isLogin={isLogin}
                isSeller={isSeller}
                sellerId={sellerId}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <TabPanelProducts
                isLogin={isLogin}
                isSeller={isSeller}
                sellerId={sellerId}
                seller={seller}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <TabPanelCart
                isLogin={isLogin}
                isSeller={isSeller}
                sellerId={sellerId}
                seller={seller}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <TabPanelHistory
                isLogin={isLogin}
                isSeller={isSeller}
                sellerId={sellerId}
                seller={seller}
              />
            </CustomTabPanel>
          </>
        ) : (
          <p>У вас еще нет магазина</p>
        )
      ) : (
        <p>Пожалуйста войдите в аккаунт</p>
      )}
    </Container>
  );
}

export default Root;
