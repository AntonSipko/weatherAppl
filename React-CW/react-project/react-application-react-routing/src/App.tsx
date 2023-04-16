
import React, { ReactNode, useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Bread } from './components/pages/Bread';
import { Customers } from './components/pages/Customers';
import { Dairy } from './components/pages/Dairy';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Orders } from './components/pages/Orders';
import { Products } from './components/navigators/Products';
import { ShoppingCart } from './components/pages/ShoppingCart';
import { routes } from './config/layout-config'
import { Navigator } from './components/navigators/Navigator';
import { routesProduct } from './config/products-config';
import { NavigatorDesktop } from './components/navigators/NavigatorDesktop';
import {Login} from "../src/components/pages/Login"
import { useSelector } from 'react-redux';
import { RouteType } from './model/RouteType';

function App() {
const [routesState,setRoutes]=useState(getRoutes());
const authUser=useSelector<any,string>(state=>state.auth.authUser);
function getRoutes():RouteType[]{
     return routes.filter(routePredicate);
}
function routePredicate(route:RouteType):boolean|undefined{
     return route.always||(route.authenticated && !!authUser)||(route.admin && authUser.includes("admin"))||(route.no_authenticated&&!!authUser)
}
useEffect(()=>{
     setRoutes(getRoutes());
},[authUser])
     return <BrowserRouter>
          <Routes>
               <Route path='/' element={<NavigatorDesktop routes={routesState} />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login/>}/>
                    <Route path='customers' element={<Customers />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='shoppingcart' element={<ShoppingCart />} />
                    <Route path='products' element={<Navigator subnav routes={routesProduct} />}>
                         <Route path='dairy' element={<Dairy />} />
                         <Route path='bread' element={<Bread />} />
                    </Route>
                    <Route path="/*" element={<NotFound/>}/>
               </Route>





               <Route path='/*' element={<NotFound />} />

          </Routes>
     </BrowserRouter>
}

export default App;
