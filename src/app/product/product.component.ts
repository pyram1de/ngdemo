import { fetchProducts } from './product.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-product',
  template: `
    <div *ngFor="let product of product$ | async">
    Product: {{ product.name }}
    </div>
    <div *ngIf="loading$ | async; let loading" >
      <div *ngIf="loading">
        loading...
      </div>
    </div>
    <div *ngIf="error$ | async; let error" >
      <div *ngIf="error">
        loading...
      </div>
    </div>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  product$;
  loading$;
  error$;

  constructor(private store: Store<AppState>) {
    this.product$ = this.store.select(store=>store.products.products.list);
    this.loading$ = this.store.select(store=>store.products.products.loading);
    this.error$ = this.store.select(store=>store.products.products.error);
  }

  ngOnInit() {
    this.store.dispatch(fetchProducts());
  }

}
