import { styled } from '@mui/material/styles';
import { Drawer, Box } from '@mui/material';

export const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: 400,
    padding: '20px'
  }
});

export const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
});
