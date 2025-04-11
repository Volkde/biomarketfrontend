import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";

function Account() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(authActions.profile());
  }, [dispatch]);

  const { status, user, error } = useAppSelector(selectAuthState);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Account
      </Typography>
      {status === "success" ? (
        <>
          <p>{t("title", { name: user?.firstName })}</p>
          <p>{user?.email}</p>
        </>
      ) : (
        <p>Error: {error}</p>
      )}
    </Container>
  );
}

export default Account;
