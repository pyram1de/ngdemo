import { Product } from './product.model';
import { fetchError, fetchedProductsSuccessfully } from './product.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, delay, map } from 'rxjs/operators';
import { FETCHING_PRODUCTS } from './product.constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductEffects {
    @Effect() product$: Observable<Action> = this.action$.pipe(
        ofType(FETCHING_PRODUCTS),
        switchMap(action => 
            this.http
            .get("data/products.json")
            .pipe(delay(3000),
                map(fetchedProductsSuccessfully),
                catchError(err => of(fetchError(err)))
        ))
    )
    constructor(private action$ : Actions<Action>, private http : HttpClient){
        
    }
}