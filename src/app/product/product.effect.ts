import { Product } from './product.model';
import { fetchError, fetchedProductsSuccessfully, addProductSuccessfully,
    addProductError,
    ActionWithPayload} from './product.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, delay, map } from 'rxjs/operators';
import { FETCHING_PRODUCTS, ADD_PRODUCT } from './product.constants';
import { HttpClient } from '@angular/common/http';
import { pipe } from '@angular/core/src/render3/pipe';

@Injectable()
export class ProductEffects {
    @Effect() product$: Observable<Action> = this.action$.pipe(
        ofType(FETCHING_PRODUCTS),
        switchMap(action =>
            this.http
            .get('data/products.json')
            .pipe(delay(1000),
                map(fetchedProductsSuccessfully),
                catchError(err => of(fetchError(err)))
        ))
    );

    @Effect() productsAdd$: Observable<Action> = this.action$.pipe(
        ofType<ActionWithPayload<Product>>(ADD_PRODUCT),
        switchMap(action =>
            of(addProductSuccessfully({name: action.payload})).pipe(delay(1000),
                map(x => {
                    console.log('x marks the spot', action);
                    return x;
                })))
    );
    constructor(private action$: Actions<Action>, private http: HttpClient) {
    }
}
