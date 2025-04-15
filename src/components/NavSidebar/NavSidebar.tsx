import {
  AssignmentOutlined as AssignmentOutlinedIcon,
  GavelOutlined as GavelOutlinedIcon,
  Home as HomeIcon,
  InfoOutlined as InfoOutlinedIcon
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { categories } from "app/categories";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectUiState } from "store/redux/ui/selectors/selectUiState";
import { uiActions } from "store/redux/ui/slice/uiSlice";

function NavSidebar() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentPath = location.pathname;
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category");
  const { isSidebarPanelOpen } = useAppSelector(selectUiState);

  const handleDrawerClose = () => {
    dispatch(uiActions.closeSidebarPanel());
  };

  return (
    <Drawer
      open={isSidebarPanelOpen}
      onClose={handleDrawerClose}
      variant="temporary"
      anchor="left"
      PaperProps={{
        sx: {
          width: 280,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between" // важная часть
        }
      }}
    >
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              selected={currentPath === "/"}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme => theme.palette.action.selected,
                  color: theme => theme.palette.primary.main,
                  "& .MuiListItemIcon-root": {
                    color: theme => theme.palette.primary.main
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: "bold"
                  }
                },
                "&:hover": {
                  backgroundColor: theme => theme.palette.action.hover
                }
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <List>
          {Object.entries(categories).map(
            ([key, { id, title, path, icon: Icon }], index) => (
              <ListItem key={id ?? index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={path}
                  selected={currentCategory === key}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: theme => theme.palette.action.selected,
                      color: theme => theme.palette.primary.main,
                      "& .MuiListItemIcon-root": {
                        color: theme => theme.palette.primary.main
                      },
                      "& .MuiListItemText-primary": {
                        fontWeight: "bold"
                      }
                    },
                    "&:hover": {
                      backgroundColor: theme => theme.palette.action.hover
                    }
                  }}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
      <Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/about"
              selected={currentPath === "/about"}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme => theme.palette.action.selected,
                  color: theme => theme.palette.primary.main,
                  "& .MuiListItemIcon-root": {
                    color: theme => theme.palette.primary.main
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: "bold"
                  }
                },
                "&:hover": {
                  backgroundColor: theme => theme.palette.action.hover
                }
              }}
            >
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/terms"
              selected={currentPath === "/terms"}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme => theme.palette.action.selected,
                  color: theme => theme.palette.primary.main,
                  "& .MuiListItemIcon-root": {
                    color: theme => theme.palette.primary.main
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: "bold"
                  }
                },
                "&:hover": {
                  backgroundColor: theme => theme.palette.action.hover
                }
              }}
            >
              <ListItemIcon>
                <GavelOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Terms" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/conditions"
              selected={currentPath === "/conditions"}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: theme => theme.palette.action.selected,
                  color: theme => theme.palette.primary.main,
                  "& .MuiListItemIcon-root": {
                    color: theme => theme.palette.primary.main
                  },
                  "& .MuiListItemText-primary": {
                    fontWeight: "bold"
                  }
                },
                "&:hover": {
                  backgroundColor: theme => theme.palette.action.hover
                }
              }}
            >
              <ListItemIcon>
                <AssignmentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Conditions" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default NavSidebar;
