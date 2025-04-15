import {
  Category as CategoryIcon,
  Dashboard as DashboardIcon,
  History as HistoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Storefront as StorefrontIcon
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { SyntheticEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
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

const data = [
  { name: "January", sales: 4000 },
  { name: "February", sales: 3000 },
  { name: "March", sales: 5000 },
  { name: "April", sales: 4000 },
  { name: "May", sales: 6000 }
];

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
        Тут будут настройки магазина.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginBottom: "25px"
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: "flex-start" }}>
            {/* Продажи */}
            <Grid component="div">
              <Card
                sx={{
                  boxShadow: 0,
                  border: theme => `2px solid ${theme.palette.divider}`,
                  transition: "all ease 0.4s",
                  "&:hover": {
                    border: theme => `2px solid ${theme.palette.primary.main}`
                  }
                }}
              >
                <CardContent sx={{ textAlign: "center", padding: 3 }}>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      marginBottom: "25px"
                    }}
                  >
                    Продажи
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    234
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Всего товаров */}
            <Grid component="div">
              <Card
                sx={{
                  boxShadow: 0,
                  border: theme => `2px solid ${theme.palette.divider}`,
                  transition: "all ease 0.4s",
                  "&:hover": {
                    border: theme => `2px solid ${theme.palette.primary.main}`
                  }
                }}
              >
                <CardContent sx={{ textAlign: "center", padding: 3 }}>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      marginBottom: "25px"
                    }}
                  >
                    Всего товаров
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Выручка */}
            <Grid component="div">
              <Card
                sx={{
                  boxShadow: 0,
                  border: theme => `2px solid ${theme.palette.divider}`,
                  transition: "all ease 0.4s",
                  "&:hover": {
                    border: theme => `2px solid ${theme.palette.primary.main}`
                  }
                }}
              >
                <CardContent sx={{ textAlign: "center", padding: 3 }}>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      marginBottom: "25px"
                    }}
                  >
                    Выручка
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    42000
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: theme => `2px solid ${theme.palette.divider}`
          }}
        >
          <Paper
            sx={{
              boxShadow: 0,
              padding: 2
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              color="textSecondary"
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "25px"
              }}
            >
              Sales Overview
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
          {/* Добавь другие секции с графиками и статистикой */}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Тут будут товары этого магазина.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Тут будут заказы.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Тут будет история заказов.
      </CustomTabPanel>
    </Container>
  );
}

export default Root;
