import { FETCHING_PRODUCTS, FETCHING_PRODUCTS_ERROR, FETCHING_PRODUCTS_SUCCESSFULLY } from './product.constants';
import { Action } from '@ngrx/store';

export const fetchedProductsSuccessfully = (products) => ({
    type: FETCHING_PRODUCTS_SUCCESSFULLY,
    payload: products
});
export const fetchError = (error) => ({type: FETCHING_PRODUCTS_ERROR, payload : error});
export const fetchProducts = () : Action => ({ type: FETCHING_PRODUCTS });


