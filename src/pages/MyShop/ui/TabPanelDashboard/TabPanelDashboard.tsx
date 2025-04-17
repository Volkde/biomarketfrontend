import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
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
import { TabPanelDashboardProps } from "./types";

const data = [
  { name: "January", sales: 4000 },
  { name: "February", sales: 3000 },
  { name: "March", sales: 5000 },
  { name: "April", sales: 4000 },
  { name: "May", sales: 6000 }
];

function TabPanelDashboard(props: TabPanelDashboardProps) {
  const { t } = useTranslation("page-my-shop");

  return (
    <>
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
                  {t("Sales")}
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
                  {t("Total goods")}
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
                  {t("Revenue")}
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
            {t("Sales Overview")}
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
    </>
  );
}

export default TabPanelDashboard;
