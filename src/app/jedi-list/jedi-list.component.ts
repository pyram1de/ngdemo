import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app-state';
import { Jedi } from '../jedi.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'jedi-list',
  template: `
    <div *ngFor="let jedi of list$ | async">
    {{ jedi.name }}<button (click)="remove(jedi.id)" >Remove</button>
    </div>
    <input [(ngModel)]="newJedi" placeholder="" />
    <button (click)="add()">Add</button>
    <button (click)="clear()">Clear</button>
  `,
  styles: []
})
export class JediListComponent implements OnInit {
  list$: Observable<Jedi[]>;
  counter = 0;
  newJedi = "";

  constructor(private store: Store<AppState>) { 
    this.list$ = store.select('jediList');
  }

  ngOnInit() {
  }

  add(){
    this.store.dispatch({ type: 'ADD_JEDI', payload : { id: this.counter++, name: this.newJedi } });
    this.newJedi = "";
  }

  clear(){
    this.store.dispatch({type: 'LOAD_JEDIS', payload: []});
    this.counter = 0;
  }

  remove(id){
    this.store.dispatch({ type: 'REMOVE_JEDI', payload: { id }})
  }



}
