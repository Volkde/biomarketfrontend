import { AppBar, Box, Toolbar, useTheme } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";
import { AccountButton } from "../AccountButton";
import { AccountMenu } from "../AccountMenu";
import { CartButton } from "../CartButton";
import { LogoButton } from "../LogoButton";
import { MoreButton } from "../MoreButton";
import { MoreMenu } from "../MoreMenu";
import { Search } from "../Search";
import { SidebarButton } from "../SidebarButton";
import { Space } from "../Space";
import { WishlistButton } from "../WishlistButton";

function Root() {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.refresh());
  }, []);

  const { isLogin } = useAppSelector(selectAuthState);

  const [elAccountMenuAnchor, setElAccountMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [elMoreMenuAnchor, setElMoreMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const cartItemsCount = 5; // TODO cartItemsCount
  const wishlistItemsCount = 3; // TODO wishlistItemsCount
  const isNavSidebarOpen = false;
  const isCartSidebarOpen = false;
  const isAccountMenuOpen = Boolean(elAccountMenuAnchor);
  const isMoreMenuOpen = Boolean(elMoreMenuAnchor);

  const handleNavSidebarOpen = () => {
    // TODO: handleNavSidebarOpen()
  };

  // const handleNavSidebarClose = () => {
  //   // TODO: handleNavSidebarClose()
  // };

  const handleCartSidebarOpen = () => {
    // Диспатчим действие для открытия корзины
    document.dispatchEvent(new CustomEvent("openCartSidebar"));
  };

  // const handleCartSidebarClose = () => {
  //   // Диспатчим действие для закрытия корзины
  //   document.dispatchEvent(new CustomEvent("closeCartSidebar"));
  // };

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
          <LogoButton alt="FramVibe" url="/logo.png" />
          <Space />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {isLogin && (
              <>
                <CartButton
                  id={cartId}
                  cartItemsCount={cartItemsCount}
                  onClick={handleCartSidebarOpen}
                />
                <WishlistButton
                  id="wishlist"
                  wishlistItemsCount={wishlistItemsCount}
                  onClick={() => {
                    navigate("/wishlist");
                  }}
                />
              </>
            )}
            <AccountButton
              id={accountMenuId}
              open={isAccountMenuOpen}
              login={isLogin}
              userFullName="Maksym Stoianov"
              userAvatarUrl="/avatar.png"
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
            <SidebarButton onClick={handleNavSidebarOpen} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">Contact Us</Link>
          </Box>
          <Space />
          <Search apiUrl={""} />
        </Toolbar>
      </AppBar>
      <MoreMenu
        id={moreMenuId}
        anchorEl={elMoreMenuAnchor}
        open={isMoreMenuOpen}
        login={isLogin}
        cartItemsCount={cartItemsCount}
        wishlistItemsCount={wishlistItemsCount}
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
