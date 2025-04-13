import { useEffect, useState } from 'react'
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { checkoutActions, checkoutSelectors } from 'store/redux/checkout'
import { usePlaceOrder } from 'shared/api/orders/usePlaceOrder'

import { ShippingAddressForm } from '../ShippingAddressForm'
import { PaymentMethodForm } from '../PaymentMethodForm'
import { OrderSummary } from '../OrderSummary'
import { Address } from 'types/Address'
import { PaymentMethod } from 'types/Checkout'

const steps = ['Адрес доставки', 'Способ оплаты', 'Подтверждение заказа']

const Checkout = () => {
  const dispatch = useAppDispatch()
  // Используем селекторы для получения данных из Redux
  const cartItems = useAppSelector(checkoutSelectors.selectCartItems)
  const shippingAddress = useAppSelector(checkoutSelectors.selectShippingAddress)
  const paymentMethod = useAppSelector(checkoutSelectors.selectPaymentMethod)
  const [activeStep, setActiveStep] = useState(0)

  const { mutate: placeOrder, isPending } = usePlaceOrder()

  // Загрузка корзины при монтировании
  useEffect(() => {
    // Загрузка демо-данных для тестирования
    const demoCartItems = [
      { productId: 1, name: 'Товар 1', quantity: 2, price: 1000, imageUrl: '/products/1.jpg' },
      { productId: 2, name: 'Товар 2', quantity: 1, price: 1500, imageUrl: '/products/2.jpg' },
    ];
    
		dispatch(cartActions.setCartItems(demoCartItems))
    // Загрузка данных из localStorage или использование демо-данных
    const savedCartItems = localStorage.getItem('cartItems') 
      ? JSON.parse(localStorage.getItem('cartItems') || '[]') 
      : demoCartItems;
    
    dispatch(checkoutActions.setCartItems(savedCartItems))
  }, [dispatch])

  const handleNext = () => setActiveStep(prev => Math.min(prev + 1, 2))
  const handleBack = () => setActiveStep(prev => Math.max(prev - 1, 0))

  const handleShippingSubmit = (values: Address) => {
    dispatch(checkoutActions.setShippingAddress(values))
    handleNext()
  }

  const handlePaymentSubmit = (method: PaymentMethod) => {
    dispatch(checkoutActions.setPaymentMethod(method))
    handleNext()
  }

  const handlePlaceOrder = () => {
    if (shippingAddress && paymentMethod && cartItems.length > 0) {
      const orderData = {
        orderItems: cartItems,
        shippingAddress,
        paymentMethod
      };
      
      placeOrder(orderData, {
        onSuccess: (data) => {
          // Добавляем обработку успешного заказа
          console.log('Order placed successfully', data);
          // Можно добавить редирект на страницу успеха
        }, 
        onError: (error) => {
          // Обработка ошибки
          console.error('Order placement failed', error);
        }
      });
    }
  }

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <ShippingAddressForm
          initialValues={shippingAddress || {
            country: '',
            city: '',
            street: '',
            zipCode: ''
          }}
          onSubmit={handleShippingSubmit}
          isLoading={isPending}
        />
      )}

      {activeStep === 1 && (
        <PaymentMethodForm
          initialValue={paymentMethod || 'credit-card'}
          onSubmit={handlePaymentSubmit}
          isLoading={isPending}
        />
      )}

      {activeStep === 2 && (
        <>
          <OrderSummary
            shippingAddress={shippingAddress!}
            paymentMethod={paymentMethod!}
            items={cartItems.map(item => ({
              id: String(item.productId), // Конвертируем в string как ожидается в OrderSummary
              name: item.name,
              quantity: item.quantity,
              price: item.price
            }))}
            totalPrice={cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="outlined" onClick={handleBack}>
              Назад
            </Button>
            <Button
              variant="contained"
              onClick={handlePlaceOrder}
              disabled={isPending}
            >
              Оформить заказ
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Checkout