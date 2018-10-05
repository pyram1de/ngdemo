import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class ProductEffects {
    @Effect() product$: Observable<Action>;
    constructor(private action$ : Actions<Action>){
        
    }
}