
import React, { ReactNode, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import { Life } from './components/Life';
import { Bread } from './components/pages/Bread';
import { Customers } from './components/pages/Customers';
import { Dairy } from './components/pages/Dairy';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';

import { ShoppingCart } from './components/pages/ShoppingCart';

import { Navigators } from './components/navigators/Navigator';
const navigators:string[]=["Home","Customers","Orders","ShoppingCart","Products"]
const products:string[]=["Dairy","Bread"]

function App() {
     // const navigate = useNavigate();
     // useEffect(() => {
     //   navigate('/');
     // }, [navigate]);
     

     return <BrowserRouter>
          <Routes>
               
               <Route path='/' element={<Navigators navigatorArr={navigators} />}>
                    <Route index element={<Home />} />
                    <Route path='customers' element={<Customers />} />
                    <Route path='shoppingcart' element={<ShoppingCart />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='products' element={<Navigators navigatorArr={products} />}>
                         <Route path='dairy' element={<Dairy />} />
                         <Route path='bread' element={<Bread />} />
                    </Route>

                    <Route path='/*' element={<NotFound />} />


               </Route>

               <Route path='/*' element={<NotFound />} />



          </Routes>
     </BrowserRouter>
}

export default App;
