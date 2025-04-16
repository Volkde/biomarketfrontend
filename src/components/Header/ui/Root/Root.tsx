import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import { MouseEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";
import { selectCartState } from "store/redux/cart/selectors/selectCartState";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { selectWishlistState } from "store/redux/wishlist/selectors/selectWishlistState";
import { wishlistActions } from "store/redux/wishlist/slice/wishlistSlice";
import { AccountButton } from "../AccountButton";
import { AccountMenu } from "../AccountMenu";
import { CartButton } from "../CartButton";
import { LanguageSwitcherButton } from "../LanguageSwitcherButton";
import { LogoButton } from "../LogoButton";
import { MoreButton } from "../MoreButton";
import { MoreMenu } from "../MoreMenu";
import { MyShopButton } from "../MyShopButton";
import { Search } from "../Search";
import { SidebarButton } from "../SidebarButton";
import { Space } from "../Space";
import { WishlistButton } from "../WishlistButton";
import { HeaderLink } from "./styles";

function Root() {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");

  useEffect(() => {
    dispatch(authActions.profile());
  }, [dispatch]);

  const { status, user, isLogin, isAdmin, isSeller, error } =
    useAppSelector(selectAuthState);

  useEffect(() => {
    if (isLogin) {
      dispatch(cartActions.fetchGetCart());
    }
  }, [dispatch, isLogin]);

  const [elAccountMenuAnchor, setElAccountMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [elMoreMenuAnchor, setElMoreMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const { status: cartStatus, cart } = useAppSelector(selectCartState);
  const cartItemsCount = useMemo(() => {
    const cartItems = cart?.items ?? [];

    if (cartStatus === "success" && cartItems.length > 0) {
      return cartItems.length;
    }

    return 0;
  }, [cartStatus, cart]);

  useEffect(() => {
    if (isLogin) {
      dispatch(wishlistActions.fetchGetWishlist());
    }
  }, [dispatch, isLogin]);

  const { status: wishlistStatus, wishlist } =
    useAppSelector(selectWishlistState);
  const wishlistItemsCount = useMemo(() => {
    const productIds = wishlist?.productIds ?? [];

    if (wishlistStatus === "success" && productIds.length > 0) {
      return productIds.length;
    }

    return 0;
  }, [wishlistStatus, wishlist]);

  // TODO myShopItemsCount
  const myShopItemsCount = 42;

  const isAccountMenuOpen = Boolean(elAccountMenuAnchor);
  const isMoreMenuOpen = Boolean(elMoreMenuAnchor);

  const handleAccountMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setElAccountMenuAnchor(event.currentTarget);
  };

  const handleMoreMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setElMoreMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setElAccountMenuAnchor(null);
    handleMoreMenuClose();
  };

  const handleMoreMenuClose = () => {
    setElMoreMenuAnchor(null);
  };

  const cartId = "header-mini-cart-panel";
  const accountMenuId = "primary-account-menu";
  const moreMenuId = "primary-account-menu-mobile";

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          boxShadow: "none",
          borderBottom: `0 solid ${theme.palette.divider}`
        }}
      >
        <Toolbar>
          <LogoButton alt="FramVibe" url="/images/logo.svg" />
          <Space />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Grid>
              <Typography sx={{ fontSize: "13px", color: "#777" }}>
                Mon-Fri 8:00 AM - 20:00 PM Saturday Closed
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#777" }}>
                (+800) 111 2020, (+700) 333 44 555
              </Typography>
            </Grid>
          </Box>
          <Space />
          <LanguageSwitcherButton />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {isLogin && (
              <>
                <CartButton id={cartId} cartItemsCount={cartItemsCount} />
                <WishlistButton
                  id="wishlist"
                  wishlistItemsCount={wishlistItemsCount}
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                />
                <MyShopButton
                  id="myShop"
                  myShopItemsCount={myShopItemsCount}
                  onClick={() => {
                    navigate("/my-shop");
                  }}
                />
              </>
            )}
            <AccountButton
              id={accountMenuId}
              open={isAccountMenuOpen}
              login={isLogin}
              userFullName={
                user?.firstName ? user?.firstName + " " + user?.lastName : ""
              }
              userAvatarUrl={user?.avatar || "/avatar.png"}
              onClick={handleAccountMenuOpen}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <MoreButton
              id={moreMenuId}
              open={isMoreMenuOpen}
              onClick={handleMoreMenuOpen}
            />
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.main
          }}
        >
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <SidebarButton />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <HeaderLink
              to="/shop?category=fruits"
              active={category === "fruits"}
            >
              Fruits & Vegetables
            </HeaderLink>
            <HeaderLink to="/shop?category=dairy" active={category === "dairy"}>
              Dairy & Eggs
            </HeaderLink>
            <HeaderLink
              to="/shop?category=bakery"
              active={category === "bakery"}
            >
              Bakery
            </HeaderLink>
            <HeaderLink to="/shop?category=meat" active={category === "meat"}>
              Meat & Fish
            </HeaderLink>
          </Box>
          <Space />
          <Search />
        </Toolbar>
      </AppBar>
      <MoreMenu
        id={moreMenuId}
        anchorEl={elMoreMenuAnchor}
        open={isMoreMenuOpen}
        login={isLogin}
        cartItemsCount={cartItemsCount}
        wishlistItemsCount={wishlistItemsCount}
        myShopItemsCount={myShopItemsCount}
        handleClose={handleMoreMenuClose}
        handleAccountMenuOpen={handleAccountMenuOpen}
      />
      <AccountMenu
        id={accountMenuId}
        anchorEl={elAccountMenuAnchor}
        open={isAccountMenuOpen}
        login={isLogin}
        handleClose={handleMenuClose}
      />
    </>
  );
}

export default Root;
