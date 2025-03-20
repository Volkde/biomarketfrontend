import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from 'components/Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import SearchBar from './components/common/SearchBar/SearchBar';
import ProductDetail from './pages/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <div style={{ 
          padding: '20px', 
          backgroundColor: 'rgb(118, 150, 62)',
          display: 'flex',
          width: '100%'
        }}>
          <SearchBar />
        </div>
        <Routes> 
         
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;