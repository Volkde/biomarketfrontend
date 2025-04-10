import { Box, Grid, Typography } from "@mui/material";
import { CartItemProps } from "./types";

function CartItem({ value }: CartItemProps) {
  return (
    <Grid container direction="row" spacing={2}>
      <img width={50} height={50} src={value.image} />
      <Box sx={{ flexGrow: 1, padding: 0 }}>
        <Typography>{value.title}</Typography>
        <Typography>{value.quantity}</Typography>
        <Typography>
          {value.totalItemPrice} {value.unitOfMeasure}
        </Typography>
      </Box>
    </Grid>
  );
}

export default CartItem;
