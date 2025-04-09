import { Drawer } from "@mui/material";
import { useState } from "react";

// TODO: Получить продукты в корзине из сервера

function CartSidebar() {
  const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const [products, setProducts] = useState<Product[]>([]);

  // async function fetchProducts() {
  //   const res = await axios.get("/api/products");
  //   setProducts(res.data);
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const elProducts = products.map(p => (
  //   <li key={p.id}>
  //     Title: {p.title} Price: {p.price}
  //   </li>
  // ));

  return (
    <Drawer
      open={open}
      onClose={handleDrawerClose}
      variant="persistent"
      anchor="right"
    ></Drawer>
  );
}

export default CartSidebar;
