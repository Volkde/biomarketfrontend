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
  Vendor,
  Wrapper,
} from "./styles";

interface CartItemType {
  id: number;
  name: string;
  image: string;
  vendor: string;
  unit: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("/api/cart")
      .then(res => setCart(res.data))
      .catch(() => setError("Failed to load cart"))
      .finally(() => setLoading(false));
  }, []);

  const updateQuantity = (id: number, delta: number) => {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    const newQuantity = Math.max(1, item.quantity + delta);
    axios.put(`/api/cart/${id}`, { quantity: newQuantity }).then(() => {
      setCart(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    });
  };

  const removeItem = (id: number) => {
    axios.delete(`/api/cart/${id}`).then(() => {
      setCart(prev => prev.filter(item => item.id !== id));
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) return <Wrapper>Loading...</Wrapper>;
  if (error) return <Wrapper>{error}</Wrapper>;

  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <List>
        {cart.map(item => (
          <CartItem key={item.id}>
            <ProductImage src={item.image} alt={item.name} />
            <CardContent style={{ flex: 1 }}>
              <Info>
                <Name>{item.name}</Name>
                <Vendor>by {item.vendor}</Vendor>
                <Unit>{item.unit}</Unit>
              </Info>
              <Controls>
                <Button
                  size="small"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </Button>
                <Quantity>{item.quantity}</Quantity>
                <Button size="small" onClick={() => updateQuantity(item.id, 1)}>
                  +
                </Button>
                <Price>{(item.price * item.quantity).toFixed(2)} €</Price>
                <Button
                  size="small"
                  color="error"
                  onClick={() => removeItem(item.id)}
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
