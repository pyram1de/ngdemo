import {
    FETCHING_PRODUCTS,
    FETCHING_PRODUCTS_ERROR,
    FETCHING_PRODUCTS_SUCCESSFULLY,
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESSFULLY } from './product.constants';
import { Action } from '@ngrx/store';
import { Product } from './product.model';

export interface ActionWithPayload<T> extends Action {
    payload: T;
}

export const fetchedProductsSuccessfully = (products) => ({
    type: FETCHING_PRODUCTS_SUCCESSFULLY,
    payload: products
});
export const fetchError = (error) => ({type: FETCHING_PRODUCTS_ERROR, payload : error});
export const fetchProducts = (): Action => ({ type: FETCHING_PRODUCTS });
export const addProductSuccessfully = (product) => ({
    type: ADD_PRODUCT_SUCCESSFULLY,
    payload: product
});
export const addProductError = (error) => ({type: ADD_PRODUCT_ERROR});
export const addProduct = (product): ActionWithPayload<Product> => ({
    type: ADD_PRODUCT,
    payload: product
});

