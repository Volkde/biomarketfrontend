import { AppBar, Box, Toolbar } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { authActions } from "store/redux/auth/slice/authSlice";
import HeaderContext from "../../context/HeaderContext";
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
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.profile());
  }, []);

  const { isAuthenticated } = useAppSelector(selectAuthState);

  const [elAccountMenuAnchor, setElAccountMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [elMoreMenuAnchor, setElMoreMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const cartItemsCount = 5; // TODO cartItemsCount
  const wishlistItemsCount = 3; // TODO wishlistItemsCount
  // const isNavSidebarOpen = false;
  // const isCartSidebarOpen = false;
  const isAccountMenuOpen = Boolean(elAccountMenuAnchor);
  const isMoreMenuOpen = Boolean(elMoreMenuAnchor);

  const handleNavSidebarOpen = () => {
    // TODO: handleNavSidebarOpen()
  };

  // const handleNavSidebarClose = () => {
  //   // TODO: handleNavSidebarClose()
  // };

  const handleCartSidebarOpen = () => {
    // TODO: handleCartSidebarOpen()
  };

  // const handleCartSidebarClose = () => {
  //   // TODO: handleCartSidebarClose()
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
    <HeaderContext.Provider value={{ sidebarIsOpen: false }}>
      <AppBar
        position="fixed"
        color="inherit"
        sx={{
          boxShadow: "none",
          borderBottom: "1px solid #ebebeb"
        }}
      >
        <Toolbar>
          <LogoButton alt="FramVibe" url="/logo.png" />
          <SidebarButton onClick={handleNavSidebarOpen} />
          <Space />
          <Search apiUrl={""} />
          <Space />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {isAuthenticated && (
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
              login={isAuthenticated}
              userFullName="Maksym Stoianov"
              userAvatarUrl="/avatar.png"
              onClick={handleAccountMenuOpen}
            />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MoreButton
              id={moreMenuId}
              open={isMoreMenuOpen}
              onClick={handleMoreMenuOpen}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <MoreMenu
        id={moreMenuId}
        anchorEl={elMoreMenuAnchor}
        open={isMoreMenuOpen}
        login={isAuthenticated}
        cartItemsCount={cartItemsCount}
        wishlistItemsCount={wishlistItemsCount}
        handleClose={handleMoreMenuClose}
        handleAccountMenuOpen={handleAccountMenuOpen}
      />
      <AccountMenu
        id={accountMenuId}
        anchorEl={elAccountMenuAnchor}
        open={isAccountMenuOpen}
        login={isAuthenticated}
        handleClose={handleMenuClose}
      />
    </HeaderContext.Provider>
  );
}

export default Root;
