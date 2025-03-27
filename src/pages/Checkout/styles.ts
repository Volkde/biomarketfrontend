import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Paper,
  Stepper,
  Box,
  Button,
  FormControl,
  Grid, // Keep Grid for layout structure, not typically styled itself unless needed
  TextField, // Base for potentially styled inputs if needed later
  RadioGroup, // Base for potentially styled radio group if needed later
} from '@mui/material';

// Main wrapper for the entire checkout page content
export const PageWrapper = styled(Container)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

// The main card holding the checkout steps content
export const CheckoutPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    padding: theme.spacing(4),
  },
}));

// Title for the Checkout page ("Checkout")
export const PageTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2), // Ensure space below title
})) as typeof Typography; // Cast needed for component prop

// The Stepper component
export const StyledStepper = styled(Stepper)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(5),
}));

// Title for each section within a step (e.g., "Shipping Address")
export const SectionTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2), // Add margin top for sections after the first
  marginBottom: theme.spacing(2),
}));

// Container for form elements within a step
// Using Box as a simple div container
export const FormContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

// Specific styling for the Payment Method FormControl/RadioGroup if needed
export const PaymentFormControl = styled(FormControl)<{ component?: React.ElementType }>(({ theme }) => ({
    marginTop: theme.spacing(1),
    width: '100%', // Ensure it takes full width if needed
}));

// Container for the navigation buttons (Back/Next)
export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
}));

// Specific styling for the "Back" button
export const BackButton = styled(Button)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

// Specific styling for the "Next" or "Place Order" button (optional, if needed)
// Often, just using variant="contained" is enough
export const SubmitButton = styled(Button)(({ theme }) => ({
  // Add custom styles here if the standard variant isn't enough
}));

// Styles for the final confirmation/thank you message
export const ConfirmationTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export const ConfirmationSubtitle = styled(Typography)(({ theme }) => ({
    // No specific styles needed from original, but available here
}));

// Style for summary items if needed (e.g., bold labels)
export const SummaryLabel = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5), // Adjust spacing
}));

export const SummaryValue = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1), // Add space below value
}));

// Note: We keep using MUI Grid directly in the component for layout structure (container, item, xs, sm, spacing).
// Styling Grid items specifically is less common unless adding borders, backgrounds etc.
// Similarly, TextField and RadioGroup styling is often controlled via variant and theme,
// but could be wrapped if heavy customization is needed.