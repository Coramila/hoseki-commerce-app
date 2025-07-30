import {Product} from "../types/product"

export interface IProductService{
    fetchProducts: () => Promise<Product[]>;
}