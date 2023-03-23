import React from 'react';
import ProductList from './features/product-list/ProductList';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import ProductInfo from './features/product-list/components/ProductInfo/ProductInfo';

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
