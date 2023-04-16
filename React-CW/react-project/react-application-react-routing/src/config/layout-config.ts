import { RouteType } from "../model/RouteType";

export const routes: RouteType[] = [
    {path: '/', label: 'Home',always:true,admin:true},
    {path: '/customers', label: 'Customers',admin:true},
    {path: '/shoppingcart', label: 'Shopping Cart',always:true,admin:true},
    {path: '/orders', label: 'Orders',always:true,admin:true},
    {path: '/products', label: 'Products',no_authenticated:true,always:true,admin:true},
    {path: '/login', label: 'Login',no_authenticated:true},
    {path: '/logout', label: 'Logout',always:true,admin:true}
]