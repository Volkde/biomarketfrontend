import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'components/AppRoutes/AppRoutes';
import Layout from 'components/Layout/Layout';
import { SnackbarProvider } from 'components/SnackbarComponent/SnackbarComponent';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <GlobalStyles />
        <Layout>
          <AppRoutes />
        </Layout>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;