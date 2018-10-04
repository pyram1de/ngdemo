import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { JediListReducer } from './jedi-list/jedi-list.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('jediList', JediListReducer)
  ],
  declarations: [JediListComponent],
  exports: [
    JediListComponent
  ]
})
export class JediModule { }
