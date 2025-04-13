import { useEffect, useState } from 'react'
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { checkoutActions, checkoutSelectors } from 'store/redux/checkout'
import { usePlaceOrder } from 'shared/api/orders/usePlaceOrder'
import { ShippingAddressForm } from '../ShippingAddressForm'
import { PaymentMethodForm } from '../PaymentMethodForm'
import { OrderSummary } from '../OrderSummary'
import { Address } from 'types/Address'
import { CartItem } from 'types/CartItem'

const steps = ['Адрес доставки', 'Способ оплаты', 'Подтверждение заказа']

interface PaymentMethod {
  type: 'creditCard' | 'paypal' | 'bankTransfer'
  cardNumber?: string
  expirationDate?: string
  cvv?: string
}

const Checkout = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(checkoutSelectors.selectCartItems) as CartItem[]
  const shippingAddress = useAppSelector(checkoutSelectors.selectShippingAddress)
  const paymentMethod = useAppSelector(checkoutSelectors.selectPaymentMethod)
  const [activeStep, setActiveStep] = useState(0)

  const { mutate: placeOrder, isPending } = usePlaceOrder()

  useEffect(() => {
    const demoCartItems: CartItem[] = [
      {
        productId: 1,
        title: 'Quark Cheese',
        image: '/products/1.jpg',
        quantity: 2,
        unitOfMeasure: 'шт',
        totalItemPrice: 2000
      },
      {
        productId: 2,
        title: 'Black Forest Butter',
        image: '/products/2.jpg',
        quantity: 1,
        unitOfMeasure: 'шт',
        totalItemPrice: 1500
      }
    ]

    dispatch(checkoutActions.setCartItems(demoCartItems))
  }, [dispatch])

  const handleNext = () => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))
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
      }

      placeOrder(orderData, {
        onSuccess: (data) => {
          console.log('Order placed successfully', data)
        },
        onError: (error) => {
          console.error('Order placement failed', error)
        }
      })
    }
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.totalItemPrice, 0)

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
            firstName: '',
            lastName: '',
            country: '',
            city: '',
            street: '',
            postalCode: '',
            email: '',
            phone: ''
          }}
          onSubmit={handleShippingSubmit}
          isLoading={isPending}
        />
      )}

      {activeStep === 1 && (
        <PaymentMethodForm
          initialValue={paymentMethod?.type || 'creditCard'}
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
              id: String(item.productId),
              name: item.title,
              quantity: item.quantity,
              price: item.totalItemPrice / item.quantity // для отображения цены за 1 шт
            }))}
            totalPrice={totalPrice}
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
