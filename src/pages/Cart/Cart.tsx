import {
  Wrapper,
  Title,
  List,
  Total,
  Actions
} from "./styles";

import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { cartActions, getCartThunk, updateCartQuantityThunk, removeFromCartThunk, clearCartThunk } from "store/redux/cart/slice/cartSlice";
import { CartItem } from "../../components/CartItem";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "components/Breadcrumbs";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { selectCartState } from "store/redux/cart/selectors/selectCartState";

/**
 * Cart page component with shopping cart items and actions
 * @returns {JSX.Element} Cart page component
 */
const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart, status, error } = useAppSelector(selectCartState);
  const { t } = useTranslation("page-cart");

  // Snackbar state
  const [snackbar, setSnackbar] = useState<{open: boolean, message: string, severity: 'success' | 'error'}>({open: false, message: '', severity: 'success'});
  // Dialog state for confirm remove
  const [removeDialog, setRemoveDialog] = useState<{open: boolean, productId: number | null}>({open: false, productId: null});
  // Promo code state
  const [promo, setPromo] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  const updateQuantity = (productId: number, delta: number) => {
    const item = cart?.items.find((i) => i.productId === productId);
    if (!item) return;
    const newQuantity = Math.max(1, item.quantity + delta);
    dispatch(updateCartQuantityThunk({ productId, quantity: newQuantity }))
      .unwrap()
      .then(() => setSnackbar({open: true, message: t('quantityUpdated', {defaultValue: 'Количество обновлено'}), severity: 'success'}))
      .catch(() => setSnackbar({open: true, message: t('quantityUpdateError', {defaultValue: 'Ошибка обновления количества'}), severity: 'error'}));
  };

  const removeItem = (productId: number) => {
    setRemoveDialog({open: true, productId});
  };

  const confirmRemove = () => {
    if (removeDialog.productId == null) return;
    dispatch(removeFromCartThunk(removeDialog.productId))
      .unwrap()
      .then(() => setSnackbar({open: true, message: t('itemRemoved', {defaultValue: 'Товар удалён'}), severity: 'success'}))
      .catch(() => setSnackbar({open: true, message: t('removeError', {defaultValue: 'Ошибка удаления товара'}), severity: 'error'}));
    setRemoveDialog({open: false, productId: null});
  };

  const handlePromoApply = () => {
    // Имитация применения промокода (реализовать через Redux если есть бекенд)
    if (promo.toLowerCase() === 'sale10') {
      setDiscount(0.1); setPromoApplied(true); setPromoError('');
      setSnackbar({open: true, message: t('promoApplied', {defaultValue: 'Промокод применён!'}), severity: 'success'});
    } else {
      setPromoApplied(false); setPromoError(t('promoInvalid', {defaultValue: 'Некорректный промокод'}));
      setSnackbar({open: true, message: t('promoInvalid', {defaultValue: 'Некорректный промокод'}), severity: 'error'});
    }
  };


  if (status === "loading") return <Wrapper style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:300}}><CircularProgress /></Wrapper>;
  if (status === "error") return <Wrapper>{error ?? "Failed to load cart"}</Wrapper>;
  if (!cart?.items?.length) return (
    <Wrapper style={{textAlign:'center',padding:'48px 0'}}>
      <img src="/empty-cart.svg" alt="empty" style={{maxWidth:180,marginBottom:24}}/>
      <Typography variant="h5" gutterBottom>{t("empty", {defaultValue: 'Ваша корзина пуста'})}</Typography>
      <Button variant="contained" href="/products" sx={{mt:2}}>{t("continueShopping")}</Button>
    </Wrapper>
  );

  const subtotal = cart.items.reduce((sum, item) => sum + item.totalItemPrice, 0);
  const discountAmount = promoApplied ? subtotal * discount : 0;
  const total = subtotal - discountAmount;

  return (
    <Wrapper>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>{t("title")}</Typography>

      <List>
        {cart.items.map((item) => (
          <CartItem
            key={item.productId}
            product={item}
            onQuantityChange={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </List>

      {/* Promo code */}
      <div style={{marginTop: 24, marginBottom: 8, display:'flex', alignItems:'center', gap:8}}>
        <TextField
          label={t('promoPlaceholder', {defaultValue:'Промокод'})}
          value={promo}
          onChange={e => setPromo(e.target.value)}
          size="small"
          error={!!promoError}
          helperText={promoError}
          disabled={promoApplied}
        />
        <Button variant="outlined" onClick={handlePromoApply} disabled={promoApplied}>{t('applyPromo', {defaultValue:'Применить'})}</Button>
        {promoApplied && <MuiAlert severity="success" sx={{ml:2}}>{t('promoApplied', {defaultValue:'Промокод применён!'})}</MuiAlert>}
      </div>

      {/* Totals */}
      <Total>
        {t("subtotal", {defaultValue:'Сумма'})}: {subtotal.toFixed(2)} €<br/>
        {promoApplied && <span style={{color:'#388e3c'}}>-{discountAmount.toFixed(2)} € {t('discount', {defaultValue:'Скидка'})}<br/></span>}
        <strong>{t("total")}: {total.toFixed(2)} €</strong>
      </Total>

      <Actions>
        <Button 
          variant="outlined" 
          component={Link} 
          href="/products" 
          sx={{
            mr: 2,
            textTransform: 'none'
          }}
        >
          {t("continueShopping")}
        </Button>
        <Button 
          variant="contained" 
          color="error"
          onClick={() => {
            dispatch(clearCartThunk())
              .unwrap()
              .then(() => setSnackbar({open: true, message: t('cartCleared', {defaultValue: 'Корзина очищена'}), severity: 'success'}))
              .catch(() => setSnackbar({open: true, message: t('clearCartError', {defaultValue: 'Ошибка очистки корзины'}), severity: 'error'}));
          }}
          disabled={!cart?.items?.length || status === "loading"}
          sx={{
            mr: 2,
            textTransform: 'none'
          }}
        >
          {t("clearCart", {defaultValue: 'Очистить корзину'})}
        </Button>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => {
            if (cart?.items?.length > 0) {
              window.location.href = '/checkout';
            }
          }}
          disabled={!cart?.items?.length}
          sx={{
            textTransform: 'none'
          }}
        >
          {t("checkout")}
        </Button>
      </Actions>

      {/* Confirm remove dialog */}
      <Dialog open={removeDialog.open} onClose={()=>setRemoveDialog({open:false,productId:null})}>
        <DialogTitle>{t('removeConfirm', {defaultValue:'Удалить товар из корзины?'})}</DialogTitle>
        <DialogActions>
          <Button onClick={()=>setRemoveDialog({open:false,productId:null})}>{t('cancel', {defaultValue:'Отмена'})}</Button>
          <Button color="error" onClick={confirmRemove}>{t('remove', {defaultValue:'Удалить'})}</Button>
        </DialogActions>
      </Dialog>
      {/* Snackbar */}
      <Snackbar open={snackbar.open} autoHideDuration={2500} onClose={()=>setSnackbar({...snackbar,open:false})}>
        <MuiAlert elevation={6} variant="filled" severity={snackbar.severity} onClose={()=>setSnackbar({...snackbar,open:false})}>
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </Wrapper>
  );
};

export default Cart;

