import { styled } from "@mui/material/styles";

interface StyledDiscountBadgeProps {
  position: string;
  size: string;
}

export const StyledDiscountBadge = styled("div")<StyledDiscountBadgeProps>(
  ({ theme, position, size }) => ({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0.5),
    borderRadius: "4px",
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    fontSize:
      size === "small" ? "0.75rem" : size === "large" ? "1rem" : "0.875rem",
    fontWeight: "bold",

    ...(position === "top-left" && {
      top: 0,
      left: 0,
      transform: "translate(-50%, -50%)",
    }),

    ...(position === "top-right" && {
      top: 0,
      right: 0,
      transform: "translate(50%, -50%)",
    }),

    ...(position === "bottom-left" && {
      bottom: 0,
      left: 0,
      transform: "translate(-50%, 50%)",
    }),

    ...(position === "bottom-right" && {
      bottom: 0,
      right: 0,
      transform: "translate(50%, 50%)",
    }),
  }),
);
