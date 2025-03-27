import { Box, Typography, styled } from '@mui/material';

export const Container = styled(Box)({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
});

export const Title = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
});

export const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  fontSize: '18px',
  color: '#666',
});