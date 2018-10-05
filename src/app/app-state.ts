import { Jedi } from '../models/jedi.model';
import { CounterState } from './counter/counter.reducer';
import { FeatureProducts } from './product/product.reducer';

export interface AppState {
    counter : CounterState,
    jediList: Jedi[],
    products : FeatureProducts
}