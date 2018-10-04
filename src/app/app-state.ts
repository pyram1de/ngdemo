import { Jedi } from '../models/jedi.model';
import { CounterState } from './counter/counter.reducer';

export interface AppState {
    counter : CounterState,
    jediList: Jedi[]
}