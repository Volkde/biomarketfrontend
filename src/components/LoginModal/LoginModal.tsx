// components/LoginModal.tsx
import { Close as CloseIcon } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { LoginForm } from "components/LoginForm";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectLoginModalState } from "store/redux/ui/selectors/selectLoginModalState";
import { loginModalActions } from "store/redux/ui/slice/loginModalSlice";

function LoginModal() {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector(selectLoginModalState);

  const handleClose = () => {
    dispatch(loginModalActions.closeLoginModal());
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Login</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={theme => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500]
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent id="scroll-dialog-description">
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
