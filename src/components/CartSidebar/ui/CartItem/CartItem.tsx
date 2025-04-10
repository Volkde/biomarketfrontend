import { Box, Button, Grid, Typography } from "@mui/material";
import { CartItemProps } from "./types";

function CartItem({ value }: CartItemProps) {
  const handleRemove = () => {
    // TODO: handleRemove
  };

  return (
    <Grid container direction="row" spacing={2}>
      <img width={50} height={50} src={value.image} />
      <Box sx={{ flexGrow: 1, padding: 0 }}>
        <Typography>{value.title}</Typography>
        <Typography>{value.quantity}</Typography>
        <Typography>
          {value.totalItemPrice} {value.unitOfMeasure}
        </Typography>
        <Button onClick={handleRemove}>Remove</Button>
      </Box>
    </Grid>
  );
}

export default CartItem;
