import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import GlobalStyles from './styles/GlobalStyles';
import SearchBar from './components/common/SearchBar/SearchBar';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;