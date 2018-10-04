import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app-state';
import { Store } from '@ngrx/store'; 
import { addItem, removeItem } from './counter-list.actions';


@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styles: []
})
export class CounterListComponent implements OnInit {
  list$;
  newItem: string;
  counter: number;

  constructor(private store: Store<AppState>) { 
    this.counter = 0;
    this.list$ = store.select((state)=>state.counter.list);
  }

  ngOnInit() {
  }

  add(){
    this.store.dispatch(addItem(this.newItem, this.counter++))
  }

  remove(id){
    this.store.dispatch(removeItem(id));
  }

}
