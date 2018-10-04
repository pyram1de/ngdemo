import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { increment, decrement } from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    {{ counter$ | async }}
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>


    <app-counter-list></app-counter-list>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counter$;

  constructor(private store: Store<AppState>) { 
    this.counter$ = this.store.select((state) => {
      return state.counter.data;
    });
  }

  ngOnInit() {
    
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

}
