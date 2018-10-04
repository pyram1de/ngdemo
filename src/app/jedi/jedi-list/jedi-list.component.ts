import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app-state';
import { Jedi } from '../../../models/jedi.model';
import { Observable } from 'rxjs';
import { addJedi, removeJedi, loadJedis } from './jedi-list.actions';

@Component({
  selector: 'jedi-list',
  template: `
    <form name="jediForm">
      <div *ngFor="let jedi of list$ | async">
      {{ jedi.name }}<button (click)="remove(jedi.id)" >Remove</button>
      </div>
      <input name="newJedi" [(ngModel)]="newJedi" placeholder="" />
      <button (click)="add()">Add</button>
      <button (click)="clear()">Clear</button>
    </form>
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
    this.store.dispatch(addJedi(this.newJedi));
    this.newJedi = "";
  }

  clear(){
    this.store.dispatch(loadJedis([]));
    this.counter = 0;
  }

  remove(id){
    this.store.dispatch(removeJedi(id));
  }



}
