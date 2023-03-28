
import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Life } from './components/Life';
import { Bread } from './components/pages/Bread';
import { Customers } from './components/pages/Customers';
import { Dairy } from './components/pages/Dairy';
import { Home } from './components/pages/Home';
import { Orders } from './components/pages/Orders';
import { Products } from './components/pages/Products';
import { ShoppingCart } from './components/pages/ShoppingCart';


function App() {

     return <BrowserRouter>
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/shoppingcart' element={<ShoppingCart />} />
               <Route path='/customers' element={<Customers />} />
               <Route path='/orders' element={<Orders />} />
               <Route path='/products' element={<Products />} />
               <Route path='/products/dairy' element={<Dairy />} />
               <Route path='/products/bread' element={<Bread />} />
               
          </Routes>
     </BrowserRouter>
}

export default App;
