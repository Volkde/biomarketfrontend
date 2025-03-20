import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // BrowserRouter вместо as Router
import AppRoutes from 'components/AppRoutes/AppRoutes';
import Layout from 'components/Layout/Layout';
import GlobalStyles from './styles/GlobalStyles';
import SearchBar from './components/common/SearchBar/SearchBar';
//import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <div style={{ padding: '20px', backgroundColor: 'rgb(118, 150, 62)' }}>
          <SearchBar />
        </div>
        <AppRoutes />
        {/* <Routes> 
          <Route path="/products" element={<Products />} />
        </Routes> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;