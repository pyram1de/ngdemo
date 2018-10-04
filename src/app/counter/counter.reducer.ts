import { ActionReducerMap } from "@ngrx/store";
import { INCREMENT, DECREMENT } from './counter.constants';
import { Counter } from './counter-list/counter.model';
import { counterListReducer } from './counter-list/counter-list.reducer';

export interface CounterState {
    data: number,
    list: Counter[]
};

export const reducer : ActionReducerMap<CounterState> = {
    data: counterReducer,
    list: counterListReducer
};

export function counterReducer(state = 0, action) {
    switch(action.type){ 
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default: 
            return state;
    }
}