import ProductsService from "../service/ProductsService";
import { ProductsServiseFirebase } from "../service/ProductsServiceFirebase";

export const ProductsServise:ProductsService =new ProductsServiseFirebase();