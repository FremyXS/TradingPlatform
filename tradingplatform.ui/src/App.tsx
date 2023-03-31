import React from 'react';
import ProductList from './features/product-list/ProductList';
import { Route, Routes } from 'react-router';

import ProductInfo from './features/product-list/components/ProductInfo/ProductInfo';
import Catalog from './features/catalog/Catalog';

import { createAuthProvider } from './halpers/createAuthProvider';
import './styles/global.scss'
import Account from './features/account/Account';

function App() {
  const authProvider = createAuthProvider();
  const [logged] = authProvider.useAuth();
  console.log(2, logged);
  return (
    <Routes>
      <Route path='/*' element={<ProductList />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/product/:id' element={<ProductInfo />} />
      {logged && 
        <Route path='/account' element={<Account />} />
      }
    </Routes>
  );
}

export default App;
