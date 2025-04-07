import React, { useState } from 'react';
import axios from 'axios'; // Assuming axios is installed and used for API calls
import {
  Typography, // Still needed for basic text not specifically styled
  TextField,
  Button, // Keep base Button for simplicity if SubmitButton isn't customized
  RadioGroup,
  FormControlLabel,
  Radio,
  Step,
  StepLabel,
  Grid,
  Link,
} from '@mui/material';

// Import the styled components
import * as S from './styles'; // Using namespace import for clarity

// Define the steps
const steps = ['Shipping Address', 'Payment Method', 'Order Summary'];

// --- Define Props Interface (even if empty for now) ---
interface Props {}

// --- Step Content Components ---
// (Keep these helper functions or move them to separate files if they grow)

interface ShippingAddressFormProps {
  address: { street: string; city: string; postalCode: string; country: string };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShippingAddressForm: React.FC<ShippingAddressFormProps> = ({ address, onChange }) => {
  return (
    <>
      <S.SectionTitle variant="h6">
        Shipping Address
      </S.SectionTitle>
      {/* Using MUI Grid directly for layout */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="street"
            name="street"
            label="Street address"
            fullWidth
            autoComplete="shipping street-address"
            variant="standard"
            value={address.street}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={address.city}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalCode"
            name="postalCode"
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={address.postalCode}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={address.country}
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </>
  );
};

interface PaymentMethodFormProps {
  paymentMethod: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({ paymentMethod, onChange }) => {
  return (
    <>
      <S.SectionTitle variant="h6">
        Payment Method
      </S.SectionTitle>
      <S.PaymentFormControl component="fieldset" required>
        <RadioGroup
          aria-label="payment-method"
          name="paymentMethod"
          value={paymentMethod}
          onChange={onChange}
        >
          <FormControlLabel value="CreditCard" control={<Radio />} label="Credit Card" />
          <FormControlLabel value="PayPal" control={<Radio />} label="PayPal" />
          <FormControlLabel value="CashOnDelivery" control={<Radio />} label="Cash on Delivery" />
        </RadioGroup>
      </S.PaymentFormControl>
    </>
  );
};

interface OrderSummaryProps {
  address: { street: string; city: string; postalCode: string; country: string };
  paymentMethod: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ address, paymentMethod }) => {
  const formattedAddress = `${address.street || 'N/A'}, ${address.city || 'N/A'}, ${address.postalCode || 'N/A'}, ${address.country || 'N/A'}`;

  return (
    <>
      <S.SectionTitle variant="h6">
        Order Summary
      </S.SectionTitle>
      <S.SummaryLabel variant="subtitle1">
        Shipping Address:
      </S.SummaryLabel>
      <S.SummaryValue>{formattedAddress}</S.SummaryValue>

      <S.SummaryLabel variant="subtitle1">
        Payment Method:
      </S.SummaryLabel>
      <S.SummaryValue>{paymentMethod || 'Not Selected'}</S.SummaryValue>
      {/* Add order items details here if available */}
       <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
         Please review your order details before placing the order.
       </Typography>
    </>
  );
};


// --- Main Checkout Component ---
const Checkout: React.FC<Props> = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);


  // --- Handlers ---
  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod((event.target as HTMLInputElement).value);
  };

  const handlePlaceOrder = async () => {
      setIsPlacingOrder(true);
      setOrderError(null);
      console.log("Attempting to place order with:", { shippingAddress, paymentMethod });

      try {
          // --- Axios Example Placeholder ---
          // Replace with your actual API endpoint and data structure
          const response = await axios.post('/api/orders', {
              shippingAddress,
              paymentMethod,
              // include items from cart, user ID, etc.
          });

          console.log("Order placed successfully:", response.data);
          setOrderId(response.data.orderId || `ORD-${Date.now()}`); // Use actual ID from response
          setActiveStep((prevActiveStep) => prevActiveStep + 1); // Move to confirmation

      } catch (error) {
          console.error("Error placing order:", error);
          setOrderError(error instanceof Error ? error.message : 'An unknown error occurred while placing the order.');
          // Optionally, stay on the summary step to show the error
          // setActiveStep(steps.length - 1);
      } finally {
          setIsPlacingOrder(false);
      }
  };


  const handleNext = () => {
    // Basic Validation
    if (activeStep === 0) {
      if (!shippingAddress.street || !shippingAddress.city || !shippingAddress.postalCode || !shippingAddress.country) {
        alert('Please fill in all required address fields.');
        return;
      }
    } else if (activeStep === 1) {
      if (!paymentMethod) {
        alert('Please select a payment method.');
        return;
      }
    }

    // If it's the final step (trigger Place Order)
    if (activeStep === steps.length - 1) {
        handlePlaceOrder(); // Call the async function
    } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // --- Get Content for Current Step ---
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <ShippingAddressForm address={shippingAddress} onChange={handleAddressChange} />;
      case 1:
        return <PaymentMethodForm paymentMethod={paymentMethod} onChange={handlePaymentChange} />;
      case 2:
        return <OrderSummary address={shippingAddress} paymentMethod={paymentMethod} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    // Using styled components
    <S.PageWrapper component="main" maxWidth="md">
      <S.CheckoutPaper variant="outlined">
        <S.PageTitle component="h1" variant="h4">
          Checkout
        </S.PageTitle>
        <S.StyledStepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </S.StyledStepper>

        {activeStep === steps.length ? (
          // --- Order Confirmation / Thank You Message ---
          <React.Fragment>
            <S.ConfirmationTitle variant="h5">
              Thank you for your order!
            </S.ConfirmationTitle>
            <S.ConfirmationSubtitle variant="subtitle1">
              {orderId
                ? `Your order number is ${orderId}. We have emailed your order confirmation, and will send you an update when your order has shipped.`
                : 'Your order is being processed.'}
            </S.ConfirmationSubtitle>
             {/* Example usage of MUI Link */}
             <Link href="/" underline="hover" sx={{ display: 'inline-block', mt: 3 }}>
                Continue Shopping
             </Link>
          </React.Fragment>
        ) : (
          // --- Form Content for Current Step ---
          <React.Fragment>
             <S.FormContainer>
                {getStepContent(activeStep)}
             </S.FormContainer>

             {/* Display error message on the summary step if order placement fails */}
             {activeStep === steps.length - 1 && orderError && (
                <Typography color="error" sx={{ mt: 2 }}>
                    Error: {orderError}
                </Typography>
             )}

            {/* --- Navigation Buttons --- */}
            <S.ButtonContainer>
              {activeStep !== 0 && (
                <S.BackButton onClick={handleBack} disabled={isPlacingOrder}>
                  Back
                </S.BackButton>
              )}
              {/* Using base Button here, replace with S.SubmitButton if it has custom styles */}
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={isPlacingOrder}
              >
                {isPlacingOrder ? 'Placing Order...' : (activeStep === steps.length - 1 ? 'Place Order' : 'Next')}
              </Button>
            </S.ButtonContainer>
          </React.Fragment>
        )}
      </S.CheckoutPaper>
    </S.PageWrapper>
  );
};

export default Checkout;