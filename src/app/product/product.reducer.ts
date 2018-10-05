import { ActionReducerMap } from '@ngrx/store';
import { FETCHING_PRODUCTS, FETCHING_PRODUCTS_ERROR, FETCHING_PRODUCTS_SUCCESSFULLY } from './product.constants';
import { Product } from './product.model';


const initialState = {
    loading: false,
    list: [{ name: "init"}],
    error: void 0
};

export interface ProductState {
    loading: boolean,
    list: Product[],
    error: string
}

export interface FeatureProducts {
    products: ProductState
}

export function productReducer(state = initialState, action){
    switch(action.type){
        case FETCHING_PRODUCTS_SUCCESSFULLY:
            return { ...state, list: action.payload, loading: false };
        case FETCHING_PRODUCTS_ERROR:
            return {...state, error: action.payload, loading: false};
        case FETCHING_PRODUCTS:
            return {...state, loading: true};
        default: 
            return state;
    }
}

export const ProductReducers: ActionReducerMap<FeatureProducts> = {
    products: productReducer
}

