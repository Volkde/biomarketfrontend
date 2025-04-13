import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Actions,
  CartItem,
  Controls,
  Info,
  List,
  Name,
  Price,
  ProductImage,
  Quantity,
  Title,
  Total,
  Unit,
  Wrapper
} from "./styles";

interface CartItemType {
  productId: number;
  title: string;
  image: string;
  quantity: number;
  unitOfMeasure: string;
  totalItemPrice: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/cart")
      .then(res => {
        const items = res.data.cart?.items || [];
        console.log("Loaded cart items:", items);
        setCart(items);
      })
      .catch(() => setError("Failed to load cart"))
      .finally(() => setLoading(false));
  }, []);

  const updateQuantity = (productId: number, delta: number) => {
    const item = cart.find(i => i.productId === productId);
    if (!item) return;

    const newQuantity = Math.max(1, item.quantity + delta);

    axios.put(`/api/cart/${productId}`, { quantity: newQuantity }).then(() => {
      setCart(prev =>
        prev.map(item =>
          item.productId === productId
            ? {
                ...item,
                quantity: newQuantity,
                totalItemPrice: (item.totalItemPrice / item.quantity) * newQuantity
              }
            : item
        )
      );
    });
  };

  const removeItem = (productId: number) => {
    axios.delete(`/api/cart/${productId}`).then(() => {
      setCart(prev => prev.filter(item => item.productId !== productId));
    });
  };

  const total = cart.reduce((sum, item) => sum + Number(item.totalItemPrice), 0);

  if (loading) return <Wrapper>Loading...</Wrapper>;
  if (error) return <Wrapper>{error}</Wrapper>;

  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <List>
        {cart.map(item => (
          <CartItem key={item.productId}>
            <ProductImage src={item.image} alt={item.title} />
            <CardContent style={{ flex: 1 }}>
              <Info>
                <Name>{item.title}</Name>
                <Unit>{item.unitOfMeasure}</Unit>
              </Info>
              <Controls>
                <Button
                  size="small"
                  onClick={() => updateQuantity(item.productId, -1)}
                >
                  -
                </Button>
                <Quantity>{item.quantity}</Quantity>
                <Button
                  size="small"
                  onClick={() => updateQuantity(item.productId, 1)}
                >
                  +
                </Button>
                <Price>{item.totalItemPrice.toFixed(2)} €</Price>
                <Button
                  size="small"
                  color="error"
                  onClick={() => removeItem(item.productId)}
                >
                  Remove
                </Button>
              </Controls>
            </CardContent>
          </CartItem>
        ))}
      </List>

      <Total>Total: {total.toFixed(2)} €</Total>
      <Actions>
        <Button variant="outlined" component={Link} href="/products">
          Continue Shopping
        </Button>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </Actions>
    </Wrapper>
  );
};

export default Cart;
