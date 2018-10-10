import { fetchProducts, addProduct } from './product.actions';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { getList, isLoading, getError } from './product.selectors';


@Component({
  selector: 'app-product',
  template: `
    <div>
      <input [(ngModel)]="newProduct" placeholder="new Product..." />
      <button (click)="addNewProduct()">add new product</button>
    </div>
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
  newProduct: string;

  constructor(private store: Store<AppState>) {
    this.product$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
    this.error$ = this.store.select(getError);
  }

  addNewProduct() {
    this.store.dispatch(addProduct(this.newProduct));
    this.newProduct = '';
  }

  ngOnInit() {
    this.store.dispatch(fetchProducts());
  }

}
