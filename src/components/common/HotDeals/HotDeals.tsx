import { Box, Typography, styled } from '@mui/material';

const HotDealsContainer = styled(Box)({
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

const HotDealsTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '16px',
  color: '#333',
});

const HotDealsList = styled(Box)({
  display: 'flex',
  gap: '16px',
});

const HotDealsItem = styled(Box)({
  flex: '1 1 200px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const HotDeals = () => {
  return (
    <HotDealsContainer>
      <HotDealsTitle variant="h4">Hot Deals</HotDealsTitle>
      <HotDealsList>
        <HotDealsItem>
          <img src="https://via.placeholder.com/200" alt="Hot Deal 1" style={{ width: '100%' }} />
          <Box p={2}>
            <Typography variant="h6">Product 1</Typography>
            <Typography variant="body1">$100</Typography>
          </Box>
        </HotDealsItem>
        <HotDealsItem>
          <img src="https://via.placeholder.com/200" alt="Hot Deal 2" style={{ width: '100%' }} />
          <Box p={2}>
            <Typography variant="h6">Product 2</Typography>
            <Typography variant="body1">$150</Typography>
          </Box>
        </HotDealsItem>
      </HotDealsList>
    </HotDealsContainer>
  );
};

export default HotDeals;