import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Fade, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";

function ScrollToTopButton() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200
  });

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <Fade in={trigger}>
      <Fab
        color="primary"
        size="small"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 9999
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUp />
      </Fab>
    </Fade>
  );
}

export default ScrollToTopButton;
