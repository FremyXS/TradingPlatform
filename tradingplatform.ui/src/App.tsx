import React from 'react';
import ProductList from './features/product-list/ProductList';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import ProductInfo from './features/product-list/components/ProductInfo/ProductInfo';

import './styles/global.scss'
import Catalog from './features/catalog/Catalog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/product/:id' element={<ProductInfo />} />
    </Routes>
  );
}

export default App;
