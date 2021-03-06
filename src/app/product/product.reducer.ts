import { FeatureProducts } from './product.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { 
    FETCHING_PRODUCTS, 
    FETCHING_PRODUCTS_ERROR, 
    FETCHING_PRODUCTS_SUCCESSFULLY,
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESSFULLY } from './product.constants';
import { Product } from './product.model';

export interface ProductState {
    loading: boolean;
    list: Product[];
    error: string;
}

const initialState: ProductState = {
    loading: false,
    list: [],
    error: void 0
};

export interface FeatureProducts {
    products: ProductState
}

export const reducer: ActionReducerMap<FeatureProducts> = {
    products: productReducer
}

export function productReducer(state = initialState, action){
    console.log('reducer', state, action);
    switch(action.type){
        case FETCHING_PRODUCTS_SUCCESSFULLY:
            return { ...state, list: action.payload, loading: false };
        case FETCHING_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
            return {...state, error: action.payload, loading: false};
        case FETCHING_PRODUCTS:
            return {...state, loading: true};
        case ADD_PRODUCT:
            return { ...state, loading: true};
        case ADD_PRODUCT_SUCCESSFULLY:
            return { ...state, list: [...state.list, action.payload], loading: false};
        default: 
            return state;
    }
}
