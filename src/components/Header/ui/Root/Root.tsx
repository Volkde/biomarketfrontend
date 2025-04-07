import { AppBar, Box, Toolbar } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";
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

  const [elAccountMenuAnchor, setElAccountMenuAnchor] =
    useState<null | HTMLElement>(null);
  const [elMoreMenuAnchor, setElMoreMenuAnchor] = useState<null | HTMLElement>(
    null,
  );

  const isLogin = true; // Временно установим true для отображения иконок
  const cartItemsCount = 5; // TODO cartItemsCount
  const wishlistItemsCount = 3; // TODO wishlistItemsCount
  const isNavSidebarOpen = false;
  const isCartSidebarOpen = false;
  const isAccountMenuOpen = Boolean(elAccountMenuAnchor);
  const isMoreMenuOpen = Boolean(elMoreMenuAnchor);

  const handleNavSidebarOpen = () => {
    // TODO: handleNavSidebarOpen()
  };

  const handleNavSidebarClose = () => {
    // TODO: handleNavSidebarClose()
  };

  const handleCartSidebarOpen = () => {
    // Диспатчим действие для открытия корзины
    document.dispatchEvent(new CustomEvent('openCartSidebar'));
  };

  const handleCartSidebarClose = () => {
    // Диспатчим действие для закрытия корзины
    document.dispatchEvent(new CustomEvent('closeCartSidebar'));
  };

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
          borderBottom: "1px solid #ebebeb",
        }}
      >
        <Toolbar>
          <SidebarButton onClick={handleNavSidebarOpen} />
          <LogoButton alt="BioMarketplace" url="/logo.jpg" />
          <Space />
          <Search apiUrl={""} />
          <Space />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Убираем проверку isLogin, чтобы кнопки всегда отображались */}
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
            <AccountButton
              id={accountMenuId}
              open={isAccountMenuOpen}
              login={isLogin}
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
    </HeaderContext.Provider>
  );
}

export default Root;
