import {
  FavoriteBorder as FavoriteBorderIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  PersonAdd as PersonAddIcon,
  Settings as SettingsIcon,
  ShoppingBasketOutlined as ShoppingBasketOutlinedIcon
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem
} from "@mui/material";
import { useNavigate } from "react-router";
import { useAppDispatch } from "store/hooks";
import { authActions } from "store/redux/auth/slice/authSlice";
import { MoreMenuProps } from "./types";

function MoreMenu({
  id,
  anchorEl,
  open,
  cartItemsCount,
  wishlistItemsCount,
  myShopItemsCount,
  login,
  handleClose
}: MoreMenuProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Menu
      id={`menu-${id}`}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      keepMounted
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {login === true ? (
        <>
          <MenuItem
            onClick={() => {
              navigate("/my-shop");
            }}
          >
            <ListItemIcon>
              <Badge badgeContent={myShopItemsCount} color="success">
                <ShoppingBasketOutlinedIcon />
              </Badge>
            </ListItemIcon>
            Cart
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingBasketOutlinedIcon />
              </Badge>
            </ListItemIcon>
            Cart
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            <ListItemIcon>
              <Badge badgeContent={wishlistItemsCount} color="success">
                <FavoriteBorderIcon />
              </Badge>
            </ListItemIcon>
            Wishlist
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              navigate("/profile");
            }}
          >
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              navigate("/settings");
            }}
          >
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem
            onClick={async () => {
              try {
                await dispatch(authActions.logout()).unwrap();

                navigate("/");
              } catch (error) {
                console.error("logout:", error);
              }
            }}
          >
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem
            onClick={() => {
              navigate("/login");
            }}
          >
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/signup");
            }}
          >
            <ListItemIcon>
              <PersonAddIcon fontSize="small" />
            </ListItemIcon>
            Signup
          </MenuItem>
        </>
      )}
    </Menu>
  );
}

export default MoreMenu;
