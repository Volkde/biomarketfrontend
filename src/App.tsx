import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import GlobalStyles from './styles/GlobalStyles';
import SearchBar from './components/common/SearchBar/SearchBar';

const App = () => {
  return (
		<BrowserRouter>
		<GlobalStyles />
		<SearchBar apiUrl="/api/search"/>
         <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
		</BrowserRouter>
		
  );
};

export default App;