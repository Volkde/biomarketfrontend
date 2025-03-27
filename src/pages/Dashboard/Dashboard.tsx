import { useAuth } from '../../contexts/AuthContext';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ background: '#e8f5e9' }}
    >
      <Box sx={{ p: 4, bgcolor: 'white', borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать, {user?.name || user?.email}!
        </Typography>
        
        <Button
          variant="contained"
          color="error"
          onClick={logout}
          sx={{ mt: 2 }}
        >
          Выйти
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/products')}
          sx={{ mt: 2 }}
        >
          Перейти к продуктам
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
