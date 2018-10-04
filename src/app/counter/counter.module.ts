import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule, Action } from '@ngrx/store';
import { reducer, CounterState } from './counter.reducer';
import { CounterListComponent } from './counter-list/counter-list.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature<CounterState, Action>('counter',reducer)
  ],
  declarations: [CounterComponent, CounterListComponent],
  exports: [CounterComponent, CounterListComponent]
})
export class CounterModule { }
