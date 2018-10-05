import { Component } from '@angular/core';
import { AppState } from './app-state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  template: `
  <app-counter></app-counter>

  <jedi-list></jedi-list>

<p>TEST</p>
<app-product></app-product>

  `,
  styles: []
})
export class AppComponent {
  constructor(){
    
  }
}
