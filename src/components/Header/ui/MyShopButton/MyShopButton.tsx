import { Storefront as StorefrontIcon } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";
import { MyShopButtonProps } from "./types";

function MyShopButton({ id, myShopItemsCount, onClick }: MyShopButtonProps) {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.profile());
  }, [dispatch]);

  const { user, isLogin, isSeller } = useAppSelector(selectAuthState);

  const sellerId = user?.sellerId;

  return (
    <Tooltip title={isSeller ? "Open my shop" : "Create my shop"}>
      <IconButton
        id={id}
        size="large"
        sx={{ ml: 2 }}
        aria-label="Open my shop"
        onClick={onClick}
        color={location.pathname === "/my-shop" ? "primary" : "inherit"}
      >
        <Badge
          badgeContent={
            isSeller && sellerId && sellerId >= 0 ? myShopItemsCount : 0
          }
          color="success"
        >
          <StorefrontIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default MyShopButton;
