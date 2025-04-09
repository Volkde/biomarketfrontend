import { Close as CloseIcon } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { uiActions } from "store/redux/ui/slice/uiSlice";

function CloseButton() {
  const dispatch = useDispatch();
  const handleDrawerClose = () => dispatch(uiActions.closeCartPanel());

  return (
    <Tooltip title="Close cart">
      <IconButton size="large" onClick={handleDrawerClose} color="inherit">
        <CloseIcon />
      </IconButton>
    </Tooltip>
  );
}

export default CloseButton;
