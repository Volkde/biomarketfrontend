import styled from '@emotion/styled';
import { Box, Typography, Autocomplete, IconButton } from '@mui/material';

export const Container = styled(Box)({
  width: '100%',
  maxWidth: 600,
});

export const StyledAutocomplete = styled(Autocomplete)({
  '& .MuiAutocomplete-inputRoot': {
    padding: '8px 16px',
    backgroundColor: '#FFFFFF', // или bioBeige
    borderRadius: 12,
    border: '1px solid #E0E0E0', // или bioGreen
    transition: 'border-color 0.3s, box-shadow 0.3s',
    '&:hover': {
      borderColor: '#7CB342', // bioGreen
    },
    '&.Mui-focused': {
      borderColor: '#558B2F', // bioGreenDark
      boxShadow: '0 2px 6px rgba(85,139,47,0.2)',
    },
    '& input': {
      fontSize: 16,
      color: '#212121',
    },
  },
});

export const OptionContainer = styled('li')({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: '8px 12px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const OptionImage = styled('img')({
  width: 40,
  height: 40,
  borderRadius: 8,
  objectFit: 'cover',
});

export const OptionDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const OptionName = styled(Typography)({
  fontWeight: 500,
  color: '#424242',
});

export const OptionCategory = styled(Typography)({
  color: '#757575',
  fontSize: 13,
});

export const VoiceButton = styled(IconButton)({
  color: '#558B2F',
});
