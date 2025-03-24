import { Box, TextField, styled } from '@mui/material';

export const SearchContainer = styled(Box)({
  position: 'relative',
  width: '50%',
  maxWidth: '100%',
  zIndex: 2000,
});

export const SearchInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    padding: '12px 45px 12px 15px',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    color: '#333',
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: '#ddd',
    },
    '&:hover fieldset': {
      borderColor: '#28a745',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#28a745',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#888',
  },
}));