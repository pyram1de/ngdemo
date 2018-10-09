import { AppState } from '../app-state';

export const getList = (state: AppState) => {
    console.log('state', state);
    return state.featureProducts.products.list
};
export const getError = (state: AppState) => state.featureProducts.products.error;
export const isLoading = (state:AppState) => state.featureProducts.products.loading;