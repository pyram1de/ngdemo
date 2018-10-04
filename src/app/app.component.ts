import { Component } from '@angular/core';
import { AppState } from './app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
  <app-counter></app-counter>

  <jedi-list></jedi-list>
  `,
  styles: []
})
export class AppComponent {
  constructor(){
    
  }
}
