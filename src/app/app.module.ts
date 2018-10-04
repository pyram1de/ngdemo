import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { counterReducer } from './reducer'; 
import { jediListReducer } from './jedi-list.reducer';
import { JediListComponent } from './jedi-list/jedi-list.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JediListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({
      counter : counterReducer,
      jediList: jediListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
